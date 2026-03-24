import type { FlowerType, FlowerSize } from "@/types/flower";
import type { ArrangementData, FlowerPosition } from "@/types/arrangement";
import { FLOWER_MAP } from "@/flowers/data";

// Mulberry32 seeded PRNG - deterministic random from a seed
function mulberry32(seed: number): () => number {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Return a seeded random in [lo, hi). */
function rngRange(rng: () => number, lo: number, hi: number): number {
  return lo + rng() * (hi - lo);
}

const SIZE_CONFIG: Record<
  FlowerSize,
  {
    sortPriority: number; // lower = placed first (back of bouquet)
    baseScale: number;
    scaleJitter: number;
    /** How far from dome center this size prefers to sit (0 = dead center). */
    radialBias: number;
  }
> = {
  large: {
    sortPriority: 0,
    baseScale: 1.15,
    scaleJitter: 0.06,
    radialBias: 0.0,
  },
  medium: {
    sortPriority: 1,
    baseScale: 1.0,
    scaleJitter: 0.07,
    radialBias: 0.35,
  },
  small: {
    sortPriority: 2,
    baseScale: 0.88,
    scaleJitter: 0.08,
    radialBias: 0.7,
  },
};

export function generateArrangement(
  flowers: FlowerType[],
  seed: number,
  container = { w: 380, h: 440 },
): ArrangementData {
  const rng = mulberry32(seed);
  const total = flowers.length;

  if (total === 0) return { positions: [], seed };

  // ---- Dome region ----
  // Flowers cluster in the upper-center area of the container,
  // above the wrapper which occupies roughly y: 242-440.
  const domeCenter = {
    x: container.w / 2, // 190
    y: 195, // shifted down so flowers sit snugly above/in the wrapper
  };
  // Radii for the elliptical dome – tighter so flowers overlap nicely
  const domeRadiusX = 75; // horizontal spread
  const domeRadiusY = 65; // vertical spread

  // ---- Sort flowers into placement layers ----
  // Large flowers first (back / center), then medium, then small (front / edges).
  const indexed = flowers.map((f, i) => ({
    flower: f,
    originalIndex: i,
    size: (FLOWER_MAP[f]?.size || "medium") as FlowerSize,
  }));

  // Stable sort by size priority, with slight shuffle within each tier
  // so same-size flowers don't always land in the same spot.
  const tierShuffleKeys = indexed.map(() => rng());
  indexed.sort((a, b) => {
    const pa = SIZE_CONFIG[a.size].sortPriority;
    const pb = SIZE_CONFIG[b.size].sortPriority;
    if (pa !== pb) return pa - pb;
    return tierShuffleKeys[a.originalIndex] - tierShuffleKeys[b.originalIndex];
  });

  // ---- Golden-angle spiral base positions ----
  // The golden angle gives a naturally pleasing, non-overlapping-but-close
  // distribution. We scale it down so flowers *do* overlap for that lush look.
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~137.5 degrees

  const positions: FlowerPosition[] = indexed.map((item, i) => {
    const cfg = SIZE_CONFIG[item.size];
    const t = total > 1 ? i / (total - 1) : 0; // 0..1

    // --- Spiral placement ---
    // Spiral distance grows with sqrt(index) to fill a disc uniformly.
    // radialBias pushes small flowers outward, keeps large flowers near center.
    const baseFraction = Math.sqrt((i + 0.5) / total);
    const biasedFraction = baseFraction * (0.4 + cfg.radialBias * 0.6);
    // Add jitter so it doesn't look mechanical
    const jitterR = rngRange(rng, -0.12, 0.12);
    const fraction = Math.max(0, Math.min(1, biasedFraction + jitterR));

    const spiralAngle = i * goldenAngle + rngRange(rng, -0.3, 0.3);

    const rx = fraction * domeRadiusX;
    const ry = fraction * domeRadiusY;

    let x = domeCenter.x + Math.cos(spiralAngle) * rx;
    let y = domeCenter.y + Math.sin(spiralAngle) * ry;

    // --- Additional position jitter for natural feel ---
    x += rngRange(rng, -8, 8);
    y += rngRange(rng, -6, 6);

    // --- Depth layering ---
    // Back flowers (placed first, large) get lower zIndex and sit slightly
    // higher (lower y). Front flowers get higher zIndex, sit slightly lower.
    const layerOffset = t * 22; // front flowers shift down up to 22px
    y += layerOffset;
    // Push back-row flowers up a bit more
    y -= (1 - t) * 10;

    // Clamp into the valid dome region
    x = Math.max(110, Math.min(270, x));
    y = Math.max(100, Math.min(290, y));

    // --- Rotation: slight natural tilt ---
    // Flowers near edges tilt outward; center flowers stay more upright.
    const distFromCenterX = (x - domeCenter.x) / domeRadiusX; // -1..1
    const baseTilt = distFromCenterX * 10; // lean outward up to 10 deg
    const tiltJitter = rngRange(rng, -5, 5);
    const rotation = Math.max(-15, Math.min(15, baseTilt + tiltJitter));

    // --- Scale ---
    const scaleJitter = rngRange(rng, -cfg.scaleJitter, cfg.scaleJitter);
    // Back flowers slightly smaller (further away), front slightly larger
    const depthScale = 0.95 + t * 0.08;
    const scale = cfg.baseScale * depthScale + scaleJitter;

    // --- Z-index ---
    // Simple: placement order = depth order. Later-placed (front) flowers
    // have higher zIndex so they naturally overlap the ones behind them.
    // Add a small random bump so adjacent flowers interleave slightly.
    const zIndex = i + Math.round(rngRange(rng, 0, 2));

    return {
      flowerId: item.flower,
      index: item.originalIndex,
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      rotation: Math.round(rotation * 10) / 10,
      scale: Math.round(scale * 100) / 100,
      zIndex,
    };
  });

  return { positions, seed };
}

export function newSeed(): number {
  return Math.floor(Math.random() * 2147483647);
}

import type { ArrangementType, FlowerPosition, TemplateArrangement } from "@/types/arrangement";

/**
 * Each layout slot defines where a flower sits in the 380x440 container.
 * Flowers are rendered at size ~110px, so positions are center-points.
 * Slots are ordered back-to-front (first slot = lowest z-index).
 */
interface LayoutSlot {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

// ===== LAYOUT TEMPLATES =====
// Each has 10 slots (max flowers). For fewer flowers, we use from the start.

// Y offset to push flowers down closer to wrappers
const Y_SHIFT = 30;

const LAYOUTS: Record<ArrangementType, LayoutSlot[]> = {
  dome: [
    { x: 190, y: 130 + Y_SHIFT, rotation: 0, scale: 1.15 },
    { x: 145, y: 140 + Y_SHIFT, rotation: -8, scale: 1.1 },
    { x: 235, y: 140 + Y_SHIFT, rotation: 7, scale: 1.1 },
    { x: 168, y: 175 + Y_SHIFT, rotation: -4, scale: 1.05 },
    { x: 215, y: 170 + Y_SHIFT, rotation: 5, scale: 1.08 },
    { x: 130, y: 180 + Y_SHIFT, rotation: -12, scale: 0.95 },
    { x: 250, y: 185 + Y_SHIFT, rotation: 10, scale: 0.95 },
    { x: 190, y: 210 + Y_SHIFT, rotation: 2, scale: 1.0 },
    { x: 155, y: 215 + Y_SHIFT, rotation: -6, scale: 0.92 },
    { x: 225, y: 218 + Y_SHIFT, rotation: 8, scale: 0.9 },
  ],

  cascade: [
    { x: 165, y: 120 + Y_SHIFT, rotation: -10, scale: 1.1 },
    { x: 210, y: 125 + Y_SHIFT, rotation: 5, scale: 1.15 },
    { x: 185, y: 160 + Y_SHIFT, rotation: -3, scale: 1.08 },
    { x: 230, y: 155 + Y_SHIFT, rotation: 8, scale: 1.0 },
    { x: 145, y: 165 + Y_SHIFT, rotation: -12, scale: 0.95 },
    { x: 205, y: 195 + Y_SHIFT, rotation: 3, scale: 1.05 },
    { x: 250, y: 185 + Y_SHIFT, rotation: 12, scale: 0.9 },
    { x: 165, y: 205 + Y_SHIFT, rotation: -8, scale: 0.95 },
    { x: 225, y: 220 + Y_SHIFT, rotation: 6, scale: 0.88 },
    { x: 135, y: 210 + Y_SHIFT, rotation: -15, scale: 0.85 },
  ],

  crescent: [
    { x: 140, y: 130 + Y_SHIFT, rotation: -15, scale: 0.95 },
    { x: 155, y: 160 + Y_SHIFT, rotation: -10, scale: 1.1 },
    { x: 175, y: 190 + Y_SHIFT, rotation: -5, scale: 1.15 },
    { x: 200, y: 210 + Y_SHIFT, rotation: 0, scale: 1.1 },
    { x: 230, y: 195 + Y_SHIFT, rotation: 5, scale: 1.08 },
    { x: 250, y: 165 + Y_SHIFT, rotation: 10, scale: 1.0 },
    { x: 260, y: 135 + Y_SHIFT, rotation: 14, scale: 0.92 },
    { x: 190, y: 155 + Y_SHIFT, rotation: -2, scale: 1.0 },
    { x: 215, y: 150 + Y_SHIFT, rotation: 3, scale: 0.95 },
    { x: 165, y: 140 + Y_SHIFT, rotation: -8, scale: 0.9 },
  ],

  tower: [
    { x: 190, y: 110 + Y_SHIFT, rotation: 0, scale: 1.15 },
    { x: 180, y: 145 + Y_SHIFT, rotation: -5, scale: 1.1 },
    { x: 200, y: 140 + Y_SHIFT, rotation: 4, scale: 1.05 },
    { x: 175, y: 175 + Y_SHIFT, rotation: -8, scale: 1.08 },
    { x: 205, y: 172 + Y_SHIFT, rotation: 6, scale: 1.0 },
    { x: 190, y: 200 + Y_SHIFT, rotation: 2, scale: 1.05 },
    { x: 165, y: 205 + Y_SHIFT, rotation: -10, scale: 0.95 },
    { x: 215, y: 200 + Y_SHIFT, rotation: 8, scale: 0.95 },
    { x: 185, y: 230 + Y_SHIFT, rotation: -3, scale: 0.9 },
    { x: 200, y: 228 + Y_SHIFT, rotation: 5, scale: 0.88 },
  ],

  fan: [
    { x: 190, y: 140 + Y_SHIFT, rotation: 0, scale: 1.2 },
    { x: 135, y: 155 + Y_SHIFT, rotation: -18, scale: 1.05 },
    { x: 245, y: 155 + Y_SHIFT, rotation: 18, scale: 1.05 },
    { x: 110, y: 180 + Y_SHIFT, rotation: -25, scale: 0.95 },
    { x: 270, y: 180 + Y_SHIFT, rotation: 25, scale: 0.95 },
    { x: 160, y: 175 + Y_SHIFT, rotation: -10, scale: 1.0 },
    { x: 220, y: 175 + Y_SHIFT, rotation: 10, scale: 1.0 },
    { x: 190, y: 195 + Y_SHIFT, rotation: 2, scale: 1.08 },
    { x: 145, y: 205 + Y_SHIFT, rotation: -15, scale: 0.9 },
    { x: 235, y: 205 + Y_SHIFT, rotation: 14, scale: 0.9 },
  ],

  wild: [
    { x: 200, y: 155 + Y_SHIFT, rotation: 5, scale: 1.18 },
    { x: 155, y: 130 + Y_SHIFT, rotation: -20, scale: 1.0 },
    { x: 240, y: 140 + Y_SHIFT, rotation: 15, scale: 1.05 },
    { x: 130, y: 170 + Y_SHIFT, rotation: -25, scale: 0.92 },
    { x: 260, y: 175 + Y_SHIFT, rotation: 22, scale: 0.95 },
    { x: 180, y: 190 + Y_SHIFT, rotation: -8, scale: 1.1 },
    { x: 225, y: 200 + Y_SHIFT, rotation: 12, scale: 1.0 },
    { x: 165, y: 220 + Y_SHIFT, rotation: -15, scale: 0.88 },
    { x: 210, y: 225 + Y_SHIFT, rotation: 8, scale: 0.92 },
    { x: 250, y: 210 + Y_SHIFT, rotation: 20, scale: 0.85 },
  ],

  spiral: [
    { x: 200, y: 150 + Y_SHIFT, rotation: 0, scale: 1.2 },
    { x: 235, y: 140 + Y_SHIFT, rotation: 15, scale: 1.1 },
    { x: 245, y: 175 + Y_SHIFT, rotation: 25, scale: 1.0 },
    { x: 215, y: 200 + Y_SHIFT, rotation: 10, scale: 1.05 },
    { x: 175, y: 205 + Y_SHIFT, rotation: -5, scale: 0.95 },
    { x: 155, y: 175 + Y_SHIFT, rotation: -18, scale: 1.0 },
    { x: 160, y: 140 + Y_SHIFT, rotation: -12, scale: 0.95 },
    { x: 190, y: 125 + Y_SHIFT, rotation: 3, scale: 0.9 },
    { x: 220, y: 160 + Y_SHIFT, rotation: 8, scale: 0.88 },
    { x: 195, y: 180 + Y_SHIFT, rotation: -2, scale: 0.92 },
  ],

  triangle: [
    { x: 190, y: 120 + Y_SHIFT, rotation: 0, scale: 1.2 },
    { x: 160, y: 155 + Y_SHIFT, rotation: -8, scale: 1.1 },
    { x: 225, y: 155 + Y_SHIFT, rotation: 8, scale: 1.1 },
    { x: 130, y: 195 + Y_SHIFT, rotation: -15, scale: 1.0 },
    { x: 190, y: 185 + Y_SHIFT, rotation: 2, scale: 1.05 },
    { x: 255, y: 195 + Y_SHIFT, rotation: 14, scale: 1.0 },
    { x: 110, y: 220 + Y_SHIFT, rotation: -20, scale: 0.9 },
    { x: 160, y: 215 + Y_SHIFT, rotation: -6, scale: 0.92 },
    { x: 225, y: 215 + Y_SHIFT, rotation: 6, scale: 0.92 },
    { x: 275, y: 220 + Y_SHIFT, rotation: 18, scale: 0.88 },
  ],

  diamond: [
    { x: 190, y: 120 + Y_SHIFT, rotation: 0, scale: 1.1 },
    { x: 155, y: 155 + Y_SHIFT, rotation: -10, scale: 1.05 },
    { x: 230, y: 155 + Y_SHIFT, rotation: 10, scale: 1.05 },
    { x: 190, y: 175 + Y_SHIFT, rotation: 2, scale: 1.2 },
    { x: 130, y: 180 + Y_SHIFT, rotation: -18, scale: 0.92 },
    { x: 255, y: 180 + Y_SHIFT, rotation: 16, scale: 0.92 },
    { x: 160, y: 210 + Y_SHIFT, rotation: -8, scale: 1.0 },
    { x: 225, y: 210 + Y_SHIFT, rotation: 8, scale: 1.0 },
    { x: 190, y: 230 + Y_SHIFT, rotation: 0, scale: 0.95 },
    { x: 190, y: 145 + Y_SHIFT, rotation: 3, scale: 0.9 },
  ],

  cluster: [
    { x: 185, y: 155 + Y_SHIFT, rotation: -3, scale: 1.2 },
    { x: 210, y: 150 + Y_SHIFT, rotation: 5, scale: 1.15 },
    { x: 195, y: 175 + Y_SHIFT, rotation: 0, scale: 1.1 },
    { x: 170, y: 165 + Y_SHIFT, rotation: -8, scale: 1.05 },
    { x: 220, y: 170 + Y_SHIFT, rotation: 7, scale: 1.05 },
    { x: 185, y: 195 + Y_SHIFT, rotation: -4, scale: 1.0 },
    { x: 210, y: 190 + Y_SHIFT, rotation: 4, scale: 1.0 },
    { x: 165, y: 190 + Y_SHIFT, rotation: -10, scale: 0.92 },
    { x: 230, y: 185 + Y_SHIFT, rotation: 10, scale: 0.9 },
    { x: 200, y: 140 + Y_SHIFT, rotation: 2, scale: 0.95 },
  ],

  wave: [
    { x: 120, y: 160 + Y_SHIFT, rotation: -15, scale: 1.0 },
    { x: 150, y: 145 + Y_SHIFT, rotation: -8, scale: 1.1 },
    { x: 180, y: 155 + Y_SHIFT, rotation: -2, scale: 1.15 },
    { x: 210, y: 140 + Y_SHIFT, rotation: 3, scale: 1.1 },
    { x: 240, y: 155 + Y_SHIFT, rotation: 8, scale: 1.05 },
    { x: 270, y: 145 + Y_SHIFT, rotation: 14, scale: 0.95 },
    { x: 135, y: 190 + Y_SHIFT, rotation: -12, scale: 0.92 },
    { x: 195, y: 185 + Y_SHIFT, rotation: 0, scale: 1.0 },
    { x: 255, y: 180 + Y_SHIFT, rotation: 10, scale: 0.9 },
    { x: 165, y: 180 + Y_SHIFT, rotation: -5, scale: 0.95 },
  ],

  scatter: [
    { x: 145, y: 135 + Y_SHIFT, rotation: -22, scale: 1.05 },
    { x: 240, y: 130 + Y_SHIFT, rotation: 18, scale: 1.1 },
    { x: 185, y: 160 + Y_SHIFT, rotation: 8, scale: 1.18 },
    { x: 260, y: 175 + Y_SHIFT, rotation: -12, scale: 0.95 },
    { x: 125, y: 180 + Y_SHIFT, rotation: 25, scale: 0.9 },
    { x: 215, y: 195 + Y_SHIFT, rotation: -5, scale: 1.0 },
    { x: 160, y: 210 + Y_SHIFT, rotation: 15, scale: 0.92 },
    { x: 280, y: 155 + Y_SHIFT, rotation: -20, scale: 0.85 },
    { x: 200, y: 130 + Y_SHIFT, rotation: 3, scale: 0.95 },
    { x: 240, y: 210 + Y_SHIFT, rotation: 12, scale: 0.88 },
  ],
};

const ARRANGEMENT_TYPES: ArrangementType[] = [
  "dome",
  "cascade",
  "crescent",
  "tower",
  "fan",
  "wild",
  "spiral",
  "triangle",
  "diamond",
  "cluster",
  "wave",
  "scatter",
];

export function getArrangementTypes(): ArrangementType[] {
  return ARRANGEMENT_TYPES;
}

/**
 * Resolve a template arrangement into concrete flower positions.
 */
export function resolvePositions(arrangement: TemplateArrangement): FlowerPosition[] {
  const layout = LAYOUTS[arrangement.type] || LAYOUTS.dome;
  const flowers = arrangement.flowers;

  return flowers.map((flowerId, i) => {
    const slot = layout[i % layout.length];
    // For overflow flowers (beyond layout slots), offset slightly so they don't stack exactly
    const overflow = Math.floor(i / layout.length);
    const offsetX = overflow * 12 * (i % 2 === 0 ? 1 : -1);
    const offsetY = overflow * 8;
    return {
      flowerId,
      index: i,
      x: slot.x + offsetX,
      y: slot.y + offsetY,
      rotation: slot.rotation + overflow * 5,
      scale: slot.scale * (1 - overflow * 0.05),
      zIndex: i,
    };
  });
}

/**
 * Create a template arrangement.
 */
export function createArrangement(
  flowers: string[],
  type: ArrangementType = "dome",
): TemplateArrangement {
  return { type, flowers: [...flowers] };
}

/**
 * Cycle to next arrangement type.
 */
export function nextArrangementType(current: ArrangementType): ArrangementType {
  const idx = ARRANGEMENT_TYPES.indexOf(current);
  return ARRANGEMENT_TYPES[(idx + 1) % ARRANGEMENT_TYPES.length];
}

// Legacy support
export function generateArrangement(flowers: string[], seed: number): TemplateArrangement {
  // Map old seed-based calls to template arrangements
  const typeIdx = Math.abs(seed) % ARRANGEMENT_TYPES.length;
  return { type: ARRANGEMENT_TYPES[typeIdx], flowers: [...flowers] };
}

export function newSeed(): number {
  return Math.floor(Math.random() * 2147483647);
}

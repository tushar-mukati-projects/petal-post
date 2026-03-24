import Link from "next/link";
import { FeedbackModal } from "./FeedbackModal";

export function Footer() {
  return (
    <footer className="w-full py-6 px-6 mt-auto">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          crafted with love by{" "}
          <Link href="/" className="font-semibold text-petal hover:underline">
            PetalPost
          </Link>
        </p>
        <p className="text-xs text-muted-foreground/60">
          Got thoughts? <FeedbackModal variant="inline" />
        </p>
      </div>
    </footer>
  );
}

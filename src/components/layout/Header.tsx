import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-heading font-extrabold tracking-tight text-foreground group-hover:text-petal transition-colors">
            Petal
            <span className="text-petal group-hover:text-foreground transition-colors">Post</span>
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/create?mode=color"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Create
          </Link>
          <Link
            href="/collections"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Collections
          </Link>
        </nav>
      </div>
    </header>
  );
}

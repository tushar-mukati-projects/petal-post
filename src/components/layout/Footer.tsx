import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 px-6 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          made with love using{" "}
          <Link href="/" className="font-semibold text-petal hover:underline">
            PetalPost
          </Link>
        </p>
      </div>
    </footer>
  );
}

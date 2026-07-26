import Link from "next/link";
import { Container } from "@/components/container";
import { buttonClass } from "@/components/button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <p className="font-mono text-sm">
        <span className="text-accent">~/serny</span>
        <span className="text-muted"> $ </span>
        cd ./this-page
      </p>
      <p className="mt-2 font-mono text-sm text-muted">
        bash: cd: ./this-page: No such file or directory
      </p>

      <h1 className="mt-10 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
        404
        <span className="text-accent">.</span>
      </h1>
      <p className="mt-3 text-muted">This route doesn&apos;t exist (yet).</p>

      <div className="mt-8">
        <Link href="/" className={buttonClass("secondary")}>
          cd ~ &nbsp;(back home)
        </Link>
      </div>
    </Container>
  );
}

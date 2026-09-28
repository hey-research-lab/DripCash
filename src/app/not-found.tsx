import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="text-[15px] font-bold uppercase text-drip">404</p>
      <h1 className="t-hero mt-3 text-ink">This drop missed the bucket.</h1>
      <p className="t-lead mt-6 max-w-xl">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn mt-10">
        Back to home
      </Link>
    </section>
  );
}

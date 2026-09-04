import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Summer Tech Maintenance Solutions" },
      {
        name: "description",
        content:
          "Summer Tech Maintenance Solutions W.L.L delivers AC and HVAC services across Bahrain.",
      },
      { property: "og:title", content: "About Summer Tech Maintenance Solutions" },
      {
        property: "og:description",
        content: "AC and HVAC specialists serving homes and businesses in Bahrain.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-24 text-center sm:px-6">
        <h1 className="text-3xl font-bold text-navy">About Us</h1>
        <p className="mt-3 text-muted-foreground">This page is coming soon.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary">
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

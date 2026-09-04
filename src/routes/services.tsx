import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Summer Tech AC & HVAC, Bahrain" },
      {
        name: "description",
        content:
          "AC installation, repair, cleaning, maintenance and commercial HVAC services from Summer Tech in Bahrain.",
      },
      { property: "og:title", content: "Services — Summer Tech AC & HVAC" },
      {
        property: "og:description",
        content: "AC installation, repair, cleaning and commercial HVAC services in Bahrain.",
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
        <h1 className="text-3xl font-bold text-navy">Services</h1>
        <p className="mt-3 text-muted-foreground">This page is coming soon.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary">
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

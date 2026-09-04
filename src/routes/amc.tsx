import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/amc")({
  head: () => ({
    meta: [
      { title: "AMC Contracts — Summer Tech Bahrain" },
      {
        name: "description",
        content:
          "Annual Maintenance Contracts that keep your AC systems reliable, efficient and ready all year.",
      },
      { property: "og:title", content: "AMC Contracts — Summer Tech Bahrain" },
      {
        property: "og:description",
        content: "Annual Maintenance Contracts for residential and commercial AC systems.",
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
        <h1 className="text-3xl font-bold text-navy">Annual Maintenance Contracts</h1>
        <p className="mt-3 text-muted-foreground">This page is coming soon.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary">
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

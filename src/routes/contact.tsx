import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Summer Tech — AC & HVAC Service Bahrain" },
      {
        name: "description",
        content: "Call, WhatsApp or email Summer Tech for AC and HVAC service in Bahrain.",
      },
      { property: "og:title", content: "Contact Summer Tech" },
      {
        property: "og:description",
        content: "Get in touch for AC installation, repair and maintenance in Bahrain.",
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
        <h1 className="text-3xl font-bold text-navy">Contact Us</h1>
        <p className="mt-3 text-muted-foreground">This page is coming soon.</p>
        <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary">
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

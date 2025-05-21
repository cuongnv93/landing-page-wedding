import React, { Suspense } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// Lazy load các component con
const Hero = React.lazy(() => import("@/components/hero"));
const FeaturedProducts = React.lazy(
  () => import("@/components/featured-products")
);
const Benefits = React.lazy(() => import("@/components/benefits"));
const Question = React.lazy(() => import("@/components/question"));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading Featured Products...</div>}>
          <FeaturedProducts />
        </Suspense>
        <Suspense fallback={<div>Loading Benefits...</div>}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<div>Loading Questions...</div>}>
          <Question />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

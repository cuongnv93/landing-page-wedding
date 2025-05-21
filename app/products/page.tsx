"use client";

import FeaturedProducts from "../../components/featured-products";

export default function ProductsPage() {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Danh sách sản phẩm
      </h1>
      <FeaturedProducts />
    </section>
  );
}

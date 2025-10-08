// app/products/page.tsx
export default async function ProductsPage({ searchParams }: { searchParams: { category?: string; page?: string } }) {
  const category = searchParams.category || "all";
  const page = searchParams.page || "1";

  const res = await fetch(`https://api.example.com/products?category=${category}&page=${page}`);
  const products = await res.json();

  return (
    <div>
      <h1>تصنيف: {category}</h1>
      <h2>الصفحة: {page}</h2>
      {/* عرض المنتجات */}
    </div>
  );
}

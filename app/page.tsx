import ActiveUsers from '@/components/ActiveUsers';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';

// 10 mock products the candidate will work with throughout the assessment.
const PRODUCTS = [
  { id: '1', name: 'Mechanical Keyboard', category: 'Electronics', price: 129 },
  { id: '2', name: 'Ergonomic Mouse', category: 'Electronics', price: 59 },
  { id: '3', name: 'Standing Desk Mat', category: 'Office', price: 45 },
  { id: '4', name: 'USB-C Hub', category: 'Electronics', price: 39 },
  { id: '5', name: 'Monitor Arm', category: 'Office', price: 89 },
  { id: '6', name: 'Noise-Cancelling Headphones', category: 'Electronics', price: 299 },
  { id: '7', name: 'Laptop Stand', category: 'Office', price: 35 },
  { id: '8', name: 'Webcam 4K', category: 'Electronics', price: 149 },
  { id: '9', name: 'Desk Organiser', category: 'Office', price: 25 },
  { id: '10', name: 'LED Desk Lamp', category: 'Office', price: 55 },
];

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  // Task 1: Filter products by the `q` search param (case-insensitive)
  const visibleProducts = q
    ? PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    )
    : PRODUCTS;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Product Dashboard</h1>
        <ActiveUsers />
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar />
      </div>

      {/* Product grid */}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </ul>
    </main>
  );
}

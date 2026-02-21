import ActiveUsers from '@/components/ActiveUsers';
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

// NOTE: This is a Server Component. For Task 1 you will need to read
// `searchParams` (the prop Next.js passes to page components) to filter the
// product list, and make SearchBar a Client Component that updates the URL.
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  // TODO (Task 1): Uncomment and use `q` to filter the list once SearchBar
  // writes the query to the URL.
  const visibleProducts = PRODUCTS; // ← should be filtered by `q`

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
          <li
            key={product.id}
            className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm
                       transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">{product.name}</p>
                <span className="mt-0.5 inline-block rounded-full bg-indigo-50 px-2 py-0.5 text-xs
                                 font-medium text-indigo-600">
                  {product.category}
                </span>
              </div>

              {/* TODO (Task 3): Replace this static button with a working
                  wishlist toggle. Call `toggleWishlist(product.id)` from
                  the WishlistContext and turn the heart red when the product
                  is in the wishlist. */}
              <button
                aria-label="Add to wishlist"
                className="text-xl text-gray-300 transition hover:text-red-500"
              >
                ♡
              </button>
            </div>

            <p className="mt-auto pt-2 text-lg font-bold text-gray-800">
              ${product.price}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

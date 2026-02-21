'use client';

import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    price: number;
}

export default function ProductCard({ id, name, category, price }: ProductCardProps) {
    const { wishlist, toggleWishlist } = useWishlist();
    const isWishlisted = wishlist.includes(id);

    return (
        <li
            className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm
                 transition hover:shadow-md"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="font-semibold">{name}</p>
                    <span className="mt-0.5 inline-block rounded-full bg-indigo-50 px-2 py-0.5 text-xs
                           font-medium text-indigo-600">
                        {category}
                    </span>
                </div>

                <button
                    onClick={() => toggleWishlist(id)}
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    className={`text-xl transition hover:text-red-500 ${isWishlisted ? 'text-red-500' : 'text-gray-300'
                        }`}
                >
                    {isWishlisted ? '♥' : '♡'}
                </button>
            </div>

            <p className="mt-auto pt-2 text-lg font-bold text-gray-800">
                ${price}
            </p>
        </li>
    );
}

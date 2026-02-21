'use client';

import React, { createContext, useContext, useState } from 'react';

// TODO (Task 3): Define a proper TypeScript interface for the context value.
// Right now everything is typed as `any`, which will cause TypeScript errors
// downstream and provides no autocomplete support.
const WishlistContext = createContext<any>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  // TODO (Task 3): Implement toggleWishlist.
  // It should ADD the id if it's not in the list, or REMOVE it if it already is.
  // Currently this function does nothing.
  function toggleWishlist(id: string) {
    // ← broken: no implementation
  }

  // TODO (Task 3): Expose `wishlist` and `toggleWishlist` through the value prop.
  // Right now the provider leaks an empty object, so consumers always get undefined.
  return (
    <WishlistContext.Provider value={{}}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (ctx === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return ctx;
}

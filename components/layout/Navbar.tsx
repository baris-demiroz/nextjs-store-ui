"use client";

import Link from "next/link";
import { useState } from "react";
import MiniCart from "@/components/cart/MiniCart";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black text-white">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">


        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          MyStore
        </Link>



        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium">

            <li>
              <Link
                href="/"
                className="transition hover:text-blue-400"
              >
                Ana Sayfa
              </Link>
            </li>


            <li>
              <Link
                href="/products"
                className="transition hover:text-blue-400"
              >
                Ürünler
              </Link>
            </li>


            <li>
              <Link
                href="/categories"
                className="transition hover:text-blue-400"
              >
                Kategoriler
              </Link>
            </li>


            <li>
              <Link
                href="/campaigns"
                className="transition hover:text-blue-400"
              >
                Kampanyalar
              </Link>
            </li>

          </ul>
        </nav>




        {/* Actions */}
        <div className="flex items-center gap-5 text-xl">


          {/* Search */}
          <Link
            href="/search"
            className="transition hover:scale-110"
          >
            🔍
          </Link>



          {/* Favorites */}
          <Link
            href="/favorites"
            className="transition hover:scale-110"
          >
            ❤️
          </Link>




          {/* Account */}
          <Link
            href="/account"
            className="transition hover:scale-110"
          >
            👤
          </Link>




          {/* Cart */}
          <div className="relative">

            <button
              onClick={() => setCartOpen((prev) => !prev)}
              className="relative transition hover:scale-110"
            >

              🛒


              <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold">
                2
              </span>

            </button>



            {cartOpen && (
              <MiniCart />
            )}

          </div>


        </div>


      </div>

    </header>
  );
}
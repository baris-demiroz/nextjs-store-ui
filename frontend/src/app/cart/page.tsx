import CartItem from "@/src/components/cart/CartItem";
import CartSummary from "@/src/components/cart/CartSummary";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-10 text-4xl font-bold">
        Sepetim
      </h1>


      <section className="grid gap-8 lg:grid-cols-3">

        <div className="space-y-5 lg:col-span-2">

          <CartItem
            name="iPhone 17 Pro Max"
            brand="Apple"
            price={89999}
          />


          <CartItem
            name="Galaxy S26 Ultra"
            brand="Samsung"
            price={69999}
          />

        </div>


        <div>
          <CartSummary />
        </div>


      </section>

    </main>
  );
}
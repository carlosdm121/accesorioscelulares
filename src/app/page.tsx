import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ProductGrid from "@/components/products/ProductGrid";
import PaymentMethods from "@/components/payments/PaymentMethods";
import OrderForm from "@/components/form/OrderForm";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <PaymentMethods />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}

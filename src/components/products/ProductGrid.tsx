import { PRODUCTS } from "@/constants/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros Productos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Explora nuestra selección exclusiva de accesorios para potenciar y proteger tus dispositivos móviles con estilo y calidad.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              Ver todas las categorías &rarr;
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

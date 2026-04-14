import Image from "next/image";

const PAYMENT_METHODS = [
  {
    name: "Visa",
    logo: "/img/visa.png",
  },
  {
    name: "Mastercard",
    logo: "/img/mastercard.png",
  },
  {
    name: "Mercado Pago",
    logo: "/img/MercadoPago.svg",
  },
  {
    name: "Go Cuotas",
    logo: "/img/gocuotas.png",
  },
  {
    name: "Rapipago",
    logo: "/img/rapipago.png",
  },
  {
    name: "Pago Fácil",
    logo: "/img/pagofacil.png",
  },
];

export default function PaymentMethods() {
  return (
    <section id="payments" className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
          Medios de Pago Aceptados
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {PAYMENT_METHODS.map((method) => (
            <div key={method.name} className="flex flex-col items-center">
              <div className="relative w-24 h-12 md:w-32 md:h-16 flex items-center justify-center bg-white p-2 rounded-lg shadow-sm border border-gray-100 transition-transform hover:scale-105">
                <Image
                  src={method.logo}
                  alt={method.name}
                  width={120}
                  height={60}
                  className="max-h-full w-auto object-contain"
                  unoptimized={method.logo.endsWith('.svg') || method.logo.includes('mercado-pago')}
                />
              </div>
              <span className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                {method.name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-gray-600 dark:text-gray-400 text-sm">
          Aceptamos todas las tarjetas de crédito y débito. ¡Pagá en cuotas sin interés!
        </p>
      </div>
    </section>
  );
}

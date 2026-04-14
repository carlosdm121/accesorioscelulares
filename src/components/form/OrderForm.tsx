export default function OrderForm() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Listo para tu pedido?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Completá el formulario y nos pondremos en contacto con vos a la brevedad para coordinar el envío y el pago.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Juan Pérez"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="+54 9 11 1234-5678"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email (opcional)
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="order" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Detalle de tu pedido
              </label>
              <textarea
                id="order"
                rows={4}
                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Escribí aquí los productos que te interesan..."
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
              >
                Enviar Pedido por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

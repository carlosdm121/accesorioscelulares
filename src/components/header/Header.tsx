import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Cel<span className="text-blue-600">Shop</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Productos
            </a>
            <a href="#payments" className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Pagos
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Contacto
            </a>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
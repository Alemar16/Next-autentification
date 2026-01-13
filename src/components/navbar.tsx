import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center w-1/3">
            <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tighter">
              MiApp
            </Link>
          </div>
          
          <div className="hidden sm:flex justify-center w-1/3">
             <Link 
                href="/#users-carousel" 
                className="text-gray-600 hover:text-indigo-600 font-medium text-base transition-colors"
            >
              Usuarios
            </Link>
          </div>

          <div className="flex items-center justify-end gap-6 w-1/3">
            <Link
              href="/login"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

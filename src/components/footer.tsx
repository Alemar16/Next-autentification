import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">MiApp</span>
            <span className="text-gray-500 text-sm">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-indigo-600 transition-colors">Términos</Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

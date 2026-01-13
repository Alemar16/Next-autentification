import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 drop-shadow-sm">
          Conecta con el Mundo
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Una plataforma segura y moderna para gestionar tu identidad y descubrir a otros. Únete a miles de usuarios que ya confían en MiApp.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-xl shadow-indigo-200"
          >
            Comenzar Ahora
          </Link>
          <Link
            href="/login"
            className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:border-gray-300 shadow-sm"
          >
            Ya tengo cuenta
          </Link>
        </div>
      </div>
    </section>
  );
}

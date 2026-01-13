export function AuthFlow() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Cómo funciona</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Flujo de Autenticación Seguro
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Implementamos las mejores prácticas de seguridad utilizando NextAuth v5 y encriptación robusta.
            </p>
        </div>

        <div className="relative">
             {/* Line connector for large screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                
                {/* Step 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl mb-6 ring-4 ring-white">
                        1
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Credenciales Seguras</h3>
                    <p className="text-gray-500">
                        El usuario ingresa su email y contraseña. Usamos <code>Zod</code> para validar los datos tanto en cliente como en servidor.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl mb-6 ring-4 ring-white">
                        2
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Encriptación & Hashing</h3>
                    <p className="text-gray-500">
                        La contraseña se transforma mediante <code>bcrypt</code> antes de compararse. Nunca almacenamos contraseñas en texto plano.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl mb-6 ring-4 ring-white">
                        3
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Sesión Persistente</h3>
                    <p className="text-gray-500">
                        Si las credenciales son válidas, NextAuth genera un JWT seguro (JWE) para manejar la sesión del usuario.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from "next/image";

type UserBasic = {
  id: string;
  nombre: string | null;
  apellido: string | null;
  fotoPerfil: string | null;
};

export function UserCarousel({ users }: { users: UserBasic[] }) {
  if (!users || users.length === 0) return null;

  return (
    <section id="users-carousel" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
         <h2 className="text-3xl font-bold text-gray-900">Nuestra Comunidad</h2>
         <p className="mt-4 text-gray-600">Descubre quiénes ya se han unido a nosotros.</p>
      </div>

      <div className="relative w-full pause-on-hover">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <div className="flex animate-scroll w-max gap-12">
          {[...users, ...users, ...users].map((user, index) => (
             <div 
                key={`${user.id}-${index}`}
                className="flex-shrink-0 w-48 flex flex-col items-center gap-3 transition-opacity opacity-80 hover:opacity-100 cursor-pointer"
             >
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100 ring-2 ring-indigo-50 shadow-md">
                    {user.fotoPerfil ? (
                         <Image
                            src={user.fotoPerfil}
                            alt={user.nombre || "User"}
                            fill
                            className="object-cover"
                            sizes="96px"
                            unoptimized
                         />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-300">
                             <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                             </svg>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <h3 className="text-base font-bold text-gray-800 truncate max-w-[180px]">
                        {user.nombre || 'Usuario'}
                    </h3>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

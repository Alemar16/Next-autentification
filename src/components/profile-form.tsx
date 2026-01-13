'use client';

import { useActionState, useState } from 'react';
import { updateProfile } from "@/actions/auth-actions";
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import default styles
import "react-phone-number-input/style.css";

type User = {
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    fotoPerfil: string | null;
};

const initialState = "";

export function ProfileForm({ user }: { user: User }) {
    const [state, action, isPending] = useActionState(updateProfile, initialState);
    const [avatarUrl, setAvatarUrl] = useState(user.fotoPerfil || '');
    const [phoneNumber, setPhoneNumber] = useState(user.telefono || '');

    return (
        <form action={action} className="mt-5 space-y-8">
            <div className="flex flex-col items-center mb-6">
                <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg ring-2 ring-indigo-50">
                    {avatarUrl ? (
                         <div className="relative h-full w-full">
                            {/* Using unoptimized to ensure external URLs work immediately without requiring server restart for config changes,
                                though config was updated. Using standard img tag with better styling is also an option if next/image is too strict,
                                but user specifically asked to fix the warning. */}
                            <Image
                                src={avatarUrl}
                                alt="Avatar"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized // Optional: remove if you are confident server restarted or config matched
                                onError={() => {
                                    setAvatarUrl('https://via.placeholder.com/150?text=Avatar');
                                }}
                            />
                        </div>
                    ) : (
                         <div className="h-full w-full flex items-center justify-center text-gray-400 bg-gray-100">
                             <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                             </svg>
                         </div>
                    )}
                </div>
                <p className="mt-3 text-sm font-medium text-gray-500">Vista previa del avatar</p>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                <div className="sm:col-span-3">
                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900">
                        Nombre
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            required
                            minLength={2}
                            defaultValue={user.nombre || ''}
                            className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border text-gray-900 placeholder-gray-400 valid:border-green-500"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="apellido" className="block text-sm font-semibold text-gray-900">
                        Apellido
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="apellido"
                            id="apellido"
                            required
                            minLength={2}
                            defaultValue={user.apellido || ''}
                            className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border text-gray-900 placeholder-gray-400 valid:border-green-500"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={user.email || ''}
                            disabled
                            className="shadow-sm border-gray-300 block w-full sm:text-sm rounded-md bg-gray-100 px-3 py-2 border text-gray-600 cursor-not-allowed font-medium"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-900">
                        Teléfono
                    </label>
                    <div className="mt-1">
                         {/* Hidden input to send the plain value in formData */}
                        <input type="hidden" name="telefono" value={phoneNumber || ''} />
                        
                        <PhoneInput
                            international
                            defaultCountry="AR"
                            value={phoneNumber}
                            onChange={(value) => setPhoneNumber(value?.toString() || '')}
                            className="shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 focus-within:border-indigo-600 flex w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border text-gray-900 placeholder-gray-400 [&_.PhoneInputCountry]:mr-2 [&_input]:outline-none [&_input]:bg-transparent"
                             placeholder="Ingresa tu número de teléfono"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="direccion" className="block text-sm font-semibold text-gray-900">
                        Dirección
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="direccion"
                            id="direccion"
                            defaultValue={user.direccion || ''}
                            className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border text-gray-900 placeholder-gray-400"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="fotoPerfil" className="block text-sm font-semibold text-gray-900">
                        URL Foto de Perfil
                    </label>
                    <div className="mt-1">
                        <input
                            type="text" // changed from url to text to be less strict or allow typing
                            name="fotoPerfil"
                            id="fotoPerfil"
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}
                            className="shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border text-gray-900 placeholder-gray-400"
                            placeholder="https://example.com/avatar.jpg"
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        Pega la URL de una imagen para actualizar tu avatar.
                    </p>
                </div>

            </div>

            <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-200">
                 {state && (
                     <p className={`text-sm font-medium ${state === 'Profile updated successfully' ? 'text-green-700' : 'text-red-700'}`}>
                         {state === 'Profile updated successfully' ? '¡Perfil actualizado con éxito!' : state}
                     </p>
                 )}
                <button
                    type="submit"
                    disabled={isPending}
                    className="ml-3 inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200"
                >
                    {isPending ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            </div>
        </form>
    );
}

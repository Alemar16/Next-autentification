'use client';

import { registerUser } from '@/actions/auth-actions';
import { useActionState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [state, dispatch, isPending] = useActionState(registerUser, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Crea tu cuenta
          </h2>
        </div>
        <form action={dispatch} className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                placeholder="Contraseña (mínimo 6 caracteres)"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Ya tienes cuenta?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
            >
              {isPending ? 'Registrando...' : 'Registrarse'}
            </button>
          </div>
          <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
            {state && (
               <p className={`text-sm ${state === 'User registered successfully' ? 'text-green-500' : 'text-red-500'}`}>
                {state}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

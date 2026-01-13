import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/profile-form";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
      redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white px-6 py-6 shadow sm:rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Perfil de Usuario</h1>
             <form
                action={async () => {
                  "use server"
                  await import("@/auth").then(m => m.signOut())
                }}
              >
              <button type="submit" className="text-sm font-medium text-red-600 hover:text-red-500">
                  Cerrar Sesión
              </button>
            </form>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Información Personal</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Actualiza tu información personal aquí.</p>
            </div>
            
            <ProfileForm user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

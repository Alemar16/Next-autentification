import Image from "next/image";

export function TechStack() {
  const technologies = [
    {
      name: "Next.js 15",
      description: "El framework de React para producción",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop", // React generic image
    },
    {
      name: "Prisma ORM",
      description: "ORM moderno para Node.js y TypeScript",
      image: "https://images.unsplash.com/photo-1667372393119-c85c020799a3?q=80&w=2070&auto=format&fit=crop", // Database/Geometric abstract
    },
    {
      name: "NextAuth.js",
      description: "Autenticación segura para Next.js",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop", // Security/Lock abstract
    },
    {
      name: "Tailwind CSS",
      description: "Framework de utilidades para diseño rápido",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop", // Design/Code abstract
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tecnologías Implementadas
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Este proyecto está construido sobre una base sólida de tecnologías modernas para garantizar rendimiento, seguridad y escalabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="relative group overflow-hidden rounded-2xl shadow-lg h-80">
              <Image
                src={tech.image}
                alt={tech.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-200 text-sm font-medium">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

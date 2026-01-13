# Next-autentification

Este proyecto es un sistema completo de autenticación desarrollado con **Next.js 15** (App Router y Server Actions), **Prisma Client** (con PostgreSQL Adapter) y **NextAuth.js** (Auth.js v5).

## Características

- **Autenticación Segura**: Login y registro con credenciales (email/password).
- **Gestión de Perfil**: Actualización de datos de usuario con `Server Actions` y validación con `Zod`.
- **Base de Datos**: Integración con PostgreSQL usando `Prisma ORM` y `Driver Adapters`.
- **UI Moderna**: Estilizado con Tailwind CSS, incluyendo feedback visual y carga optimizada de imágenes (`next/image`).
- **Middleware**: Protección de rutas y redirecciones automáticas.

## Tecnologías Utilizadas

- Next.js 15 & React 19
- Prisma ORM 7
- NextAuth.js v5 (Beta)
- Tailwind CSS 4
- PostgreSQL (via `pg` & `@prisma/adapter-pg`)
- Zod & Bcrypt

## Configuración Inicial

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Alemar16/Next-autentification.git
   ```

2. Instala dependencias:

   ```bash
   npm install
   # o
   bun install
   ```

3. Configura las variables de entorno (`.env.local`):

   ```env
   DATABASE_URL="postgresql://user:password@host:port/dbname"
   AUTH_SECRET="tu_secreto_generado"
   ```

4. Ejecuta las migraciones o sincroniza la base de datos:

   ```bash
   npx prisma db push
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   bun dev
   ```

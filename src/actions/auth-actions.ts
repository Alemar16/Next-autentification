'use server';

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const ProfileSchema = z.object({
  nombre: z.string().optional(),
  apellido: z.string().optional(),
  telefono: z.string().optional(),
  direccion: z.string().optional(),
  fotoPerfil: z.string().url().optional().or(z.literal('')),
});

export async function registerUser(prevState: string | undefined, formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const validatedFields = RegisterSchema.safeParse(data);

    if (!validatedFields.success) {
      return "Invalid fields";
    }

    const { email, password } = validatedFields.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return "Email already registered";
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return "User registered successfully";
  } catch (error) {
    console.error("Registration error:", error);
    return "Failed to register user";
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirectTo: '/perfil',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function updateProfile(prevState: string | undefined, formData: FormData) {
  try {
      // Need to get the current user session email or ID somehow. 
      // Ideally, pass it as a hidden field or get session here.
      // For security, should get session here. 
      
      const { auth } = await import("@/auth"); // Dynamic import to avoid build issues if mixed
      const session = await auth();

      if (!session?.user?.email) {
          return "Not authenticated";
      }

      const data = Object.fromEntries(formData.entries());
      const validatedFields = ProfileSchema.safeParse(data);

      if (!validatedFields.success) {
        console.error(validatedFields.error);
        return "Invalid fields";
      }

      await prisma.user.update({
        where: { email: session.user.email },
        data: validatedFields.data,
      });
      
      revalidatePath('/perfil');
      revalidatePath('/'); // Update landing page carousel
      return "Profile updated successfully";

  } catch (error) {
      console.error("Update profile error:", error);
      return "Failed to update profile";
  }
}

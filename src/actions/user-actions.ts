'use server';

import { prisma } from "@/lib/prisma";

export async function getUsersForCarousel() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        nombre: true,
        apellido: true,
        fotoPerfil: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20, // Limit to recent 20 for performance
    });
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
}

import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function main() {
  console.log('Testing Prisma Client initialization with pg adapter...');
  try {
      const connectionString = process.env.DATABASE_URL;
      if (!connectionString) {
          throw new Error("DATABASE_URL not found in environment");
      }
      
      const pool = new Pool({ connectionString });
      const adapter = new PrismaPg(pool);
      const prisma = new PrismaClient({ adapter });
      
      console.log('Client initialized.');
      await prisma.$connect();
      console.log('Client connected successfully!');
      
      // Try a simple query
      const userCount = await prisma.user.count();
      console.log(`User count: ${userCount}`);

      await prisma.$disconnect();
      await pool.end();
  } catch (e) {
      console.error('Client failed:', e);
      process.exit(1);
  }
}

main();

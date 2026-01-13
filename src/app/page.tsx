import { Hero } from "@/components/hero";
import { UserCarousel } from "@/components/user-carousel";
import { TechStack } from "@/components/tech-stack";
import { AuthFlow } from "@/components/auth-flow";
import { getUsersForCarousel } from "@/actions/user-actions";

export default async function Home() {
  const users = await getUsersForCarousel();

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TechStack />
      <AuthFlow />
      <UserCarousel users={users} />
    </main>
  );
}

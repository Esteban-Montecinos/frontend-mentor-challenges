import { getChallenges } from "@/service/api";
import HomePageClient from "./client";

export default async function Home() {
  const challenges = await getChallenges();
  return (
    <main className="flex flex-col items-center max-w-lg gap-8 p-4 m-auto mt-8">
      <h1 className="text-3xl font-bold text-center">Frontend Mentor Challenges</h1>
      <HomePageClient challenges={challenges} />
      <span className="text-xs">Desarrollado por <a href="https://github.com/Esteban-Montecinos" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline ">Esteban-Montecinos.</a></span>
    </main>
  );
}

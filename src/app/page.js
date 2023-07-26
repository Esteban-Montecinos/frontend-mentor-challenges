import { load } from "cheerio";
import HomePageClient from "./client";

async function getChallenges() {
  const html = await fetch("https://www.frontendmentor.io/challenges").then(
    (res) => res.text()
  );
  const $ = load(html);
  const nextData = JSON.parse($("#__NEXT_DATA__").html());

  return Object.values(nextData.props.initialState["v2/challenges"].entities);
}
export default async function Home() {
  const challenges = await getChallenges();
  return (
    <main className="max-w-lg m-auto mt-8 p-4 flex flex-col gap-8 items-center">
      <h1 className="text-3xl font-bold text-center">Frontend Mentor Challenges</h1>
      <HomePageClient challenges={challenges} />
    </main>
  );
}

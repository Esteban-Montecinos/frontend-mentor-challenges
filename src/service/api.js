import { load } from "cheerio";

export async function getChallenges() {
  const html = await fetch("https://www.frontendmentor.io/challenges").then(
    (res) => res.text()
  );
  const $ = load(html);
  const nextData = JSON.parse($("#__NEXT_DATA__").html());

  return Object.values(nextData.props.initialState["v2/challenges"].entities);
}
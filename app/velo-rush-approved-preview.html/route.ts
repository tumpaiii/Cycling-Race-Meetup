import { readFile } from "node:fs/promises";
import { join } from "node:path";
import roadBike from "@/src/assets/images/road-bike.webp";
import roadRace from "@/src/assets/images/road-race.webp";
import venueLandscape from "@/src/assets/images/venue-landscape.webp";
import communityGuest from "@/src/assets/images/community-guest.webp";
import industryGuest from "@/src/assets/images/industry-guest.webp";
import orangeBicycle from "@/src/assets/images/orange-bicycle.webp";
import sunsetBike from "@/src/assets/images/sunset-bike.webp";
import peloton from "@/src/assets/images/peloton.webp";
import guestCoach from "@/src/assets/images/guest-coach.webp";
import racingCyclists from "@/src/assets/images/racing-cyclists.webp";

const photos: Record<string, string> = {
  "road-bike": roadBike.src,
  "road-race": roadRace.src,
  "venue-landscape": venueLandscape.src,
  "community-guest": communityGuest.src,
  "industry-guest": industryGuest.src,
  "orange-bicycle": orangeBicycle.src,
  "sunset-bike": sunsetBike.src,
  "peloton": peloton.src,
  "guest-coach": guestCoach.src,
  "racing-cyclists": racingCyclists.src,
};

export const dynamic = "force-static";

export async function GET() {
  const template = await readFile(
    join(process.cwd(), "lib", "velo-rush-preview.html"),
    "utf8",
  );
  const html = template.replace(/\{\{photo:([a-z-]+)\}\}/g, (_, name: string) => photos[name]);
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

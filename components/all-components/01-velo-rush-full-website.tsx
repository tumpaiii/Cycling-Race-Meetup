import { cn } from "@/lib/utils";

interface VeloRushFullWebsiteProps {
  className?: string;
}

export default function VeloRushFullWebsite({ className }: VeloRushFullWebsiteProps) {
  return (
    <main className={cn("w-full min-h-screen overflow-hidden bg-[#171B19]", className)}>
      <iframe
        className="preview-frame"
        src="/velo-rush-approved-preview.html"
        title="VELO RUSH full cycling race meetup website"
        loading="eager"
        allow="fullscreen"
      />
    </main>
  );
}

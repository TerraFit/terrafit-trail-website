import { ExerciseLibrary } from "@/components/exercise-library";
import { YouTubeModal } from "@/components/youtube-modal";
import { TrailLocator } from "@/components/trail-locator";

export default function Home() {
  return (
    <>
      <YouTubeModal videoId="your-video-id" isOpen={false} onClose={() => {}} />
      <ExerciseLibrary />
      <TrailLocator />
          
    </>
  );
}

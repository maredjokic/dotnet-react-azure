import { useRef, useState, useEffect } from "react";
import { useWindowSizeCustom } from './hooks-examples/useWindowSizeCustom';

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { width, height } = useWindowSizeCustom();

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-black">
      <p>Širina: {width}</p>
      <p>Visina: {height}</p>
      <video
        ref={videoRef}
        className="w-full"
        src="/sample.mp4"
        controls={false}
      />
      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          onClick={togglePlay}
          className="bg-white px-4 py-2 rounded text-black"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};
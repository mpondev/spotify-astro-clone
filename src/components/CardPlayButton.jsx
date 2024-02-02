import { Pause, Play } from './Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setCurrentMusic, setIsPlaying } =
    usePlayerStore(state => state);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}

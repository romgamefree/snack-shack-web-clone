
import { Play } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
}

const GameCard = ({ title, image, category }: GameCardProps) => {
  return (
    <div className="game-card">
      <img 
        src={image} 
        alt={title}
        className="game-card-image"
      />
      <div className="game-card-overlay" />
      <div className="game-card-content">
        <h3 className="game-card-title">{title}</h3>
        <span className="text-xs text-white/75">{category}</span>
      </div>
      <div className="game-card-play">
        <Play className="h-4 w-4 text-white" />
      </div>
    </div>
  );
};

export default GameCard;

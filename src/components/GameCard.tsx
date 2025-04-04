
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  id: number;
}

const GameCard = ({ title, image, category, id }: GameCardProps) => {
  return (
    <Link to={`/game/${id}`} className="game-card">
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
    </Link>
  );
};

export default GameCard;

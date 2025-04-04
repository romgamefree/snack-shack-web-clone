
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
    <article className="game-card">
      <Link to={`/game/${id}`} className="game-card">
        <img 
          src={image} 
          alt={`${title} - ${category} game`}
          className="game-card-image"
          loading="lazy"
          width="300"
          height="225"
        />
        <div className="game-card-overlay" />
        <div className="game-card-content">
          <h3 className="game-card-title">{title}</h3>
          <span className="text-xs text-white/75">{category}</span>
        </div>
        <div className="game-card-play" aria-label="Play game">
          <Play className="h-4 w-4 text-white" />
        </div>
      </Link>
    </article>
  );
};

export default GameCard;

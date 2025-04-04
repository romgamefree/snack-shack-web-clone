
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import GameCard from "./GameCard";

interface GameCollectionProps {
  title: string;
  games: {
    id: number;
    title: string;
    image: string;
    category: string;
  }[];
}

const GameCollection = ({ title, games }: GameCollectionProps) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary">
            See All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {games.slice(0, 6).map(game => (
            <GameCard 
              key={game.id}
              title={game.title}
              image={game.image}
              category={game.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCollection;

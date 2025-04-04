
import GameCard from "./GameCard";

// Sample game data
const sampleGames = [
  { id: 1, title: "Bubble Shooter", image: "https://placehold.co/300x225?text=Bubble+Shooter", category: "Puzzle" },
  { id: 2, title: "Car Racing Extreme", image: "https://placehold.co/300x225?text=Racing+Game", category: "Racing" },
  { id: 3, title: "Word Connect Challenge", image: "https://placehold.co/300x225?text=Word+Game", category: "Puzzle" },
  { id: 4, title: "Space Invaders", image: "https://placehold.co/300x225?text=Space+Game", category: "Action" },
  { id: 5, title: "Candy Match", image: "https://placehold.co/300x225?text=Candy+Match", category: "Puzzle" },
  { id: 6, title: "Basketball Pro", image: "https://placehold.co/300x225?text=Basketball", category: "Sports" },
  { id: 7, title: "Ninja Run", image: "https://placehold.co/300x225?text=Ninja+Game", category: "Action" },
  { id: 8, title: "Solitaire Kings", image: "https://placehold.co/300x225?text=Solitaire", category: "Card" },
  { id: 9, title: "Farm Adventure", image: "https://placehold.co/300x225?text=Farm+Game", category: "Adventure" },
  { id: 10, title: "Chess Master", image: "https://placehold.co/300x225?text=Chess", category: "Strategy" },
  { id: 11, title: "Zombie Apocalypse", image: "https://placehold.co/300x225?text=Zombie+Game", category: "Action" },
  { id: 12, title: "Sudoku Challenge", image: "https://placehold.co/300x225?text=Sudoku", category: "Puzzle" },
];

interface GameGridProps {
  category: string;
}

const GameGrid = ({ category }: GameGridProps) => {
  // Filter games by category if needed
  const games = category === "All Games" 
    ? sampleGames 
    : sampleGames.filter(game => game.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map(game => (
          <GameCard 
            key={game.id}
            id={game.id}
            title={game.title}
            image={game.image}
            category={game.category}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;

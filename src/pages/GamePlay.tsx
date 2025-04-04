
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Sample game data (same as in GameDetails page)
const gameData = {
  1: { 
    id: 1, 
    title: "Bubble Shooter",
    playUrl: "https://example.com/games/bubble-shooter"
  },
  2: { 
    id: 2, 
    title: "Car Racing Extreme",
    playUrl: "https://example.com/games/car-racing"
  },
  3: { 
    id: 3, 
    title: "Word Connect Challenge",
    playUrl: "https://example.com/games/word-connect"
  },
  4: { 
    id: 4, 
    title: "Space Invaders",
    playUrl: "https://example.com/games/space-invaders"
  },
  5: { 
    id: 5, 
    title: "Candy Match",
    playUrl: "https://example.com/games/candy-match"
  },
  6: { 
    id: 6, 
    title: "Basketball Pro",
    playUrl: "https://example.com/games/basketball-pro"
  },
  7: { 
    id: 7, 
    title: "Ninja Run",
    playUrl: "https://example.com/games/ninja-run"
  },
  8: { 
    id: 8, 
    title: "Solitaire Kings",
    playUrl: "https://example.com/games/solitaire-kings"
  },
  9: { 
    id: 9, 
    title: "Farm Adventure",
    playUrl: "https://example.com/games/farm-adventure"
  },
  10: { 
    id: 10, 
    title: "Chess Master",
    playUrl: "https://example.com/games/chess-master"
  },
  11: { 
    id: 11, 
    title: "Zombie Apocalypse",
    playUrl: "https://example.com/games/zombie-apocalypse"
  },
  12: { 
    id: 12, 
    title: "Sudoku Challenge",
    playUrl: "https://example.com/games/sudoku-challenge"
  }
};

// Define a type for our game data
type GameDataType = typeof gameData;
type GameIdType = keyof GameDataType;

const GamePlay = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading data from an API
    const loadGame = () => {
      setLoading(true);
      setTimeout(() => {
        const numericId = id ? parseInt(id, 10) : 0;
        // Check if the numeric ID exists in our gameData
        if (id && numericId > 0 && gameData[numericId as GameIdType]) {
          setGame(gameData[numericId as GameIdType]);
        }
        setLoading(false);
      }, 1000); // Simulate network delay
    };

    loadGame();
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const goHome = () => {
    navigate('/'); // Go to the home page
  };

  if (loading) {
    return <GamePlayLoading />;
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Game not found</h1>
        <Button onClick={goHome}>
          <Home className="mr-2 h-4 w-4" /> Go to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Game Play Header */}
      <header className="bg-black text-white p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white mr-2"
            onClick={handleBack}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">{game.title}</h1>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white"
          onClick={goHome}
        >
          <Home className="h-5 w-5" />
        </Button>
      </header>
      
      {/* Game iframe container */}
      <div className="flex-1 w-full">
        <iframe
          src={game.playUrl}
          title={game.title}
          className="w-full h-full border-0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// Loading component
const GamePlayLoading = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <header className="bg-black text-white p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center">
          <Skeleton className="h-10 w-10 rounded-full mr-2" />
          <Skeleton className="h-8 w-40" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </header>
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="text-center">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default GamePlay;

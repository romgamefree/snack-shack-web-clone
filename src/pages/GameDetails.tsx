import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

// Sample game data (in a real app, this would come from an API)
const gameData = {
  1: { 
    id: 1, 
    title: "Bubble Shooter", 
    image: "https://placehold.co/800x500?text=Bubble+Shooter", 
    category: "Puzzle", 
    description: "Join millions of players in this addictive bubble shooter game! Match 3 or more bubbles of the same color to pop them and clear the board. With hundreds of challenging levels, vibrant graphics, and easy-to-learn gameplay, Bubble Shooter is the perfect way to relax and have fun.",
    instructions: "Tap to aim and shoot bubbles. Match 3 or more bubbles of the same color to pop them.",
    playUrl: "https://example.com/games/bubble-shooter"
  },
  2: { 
    id: 2, 
    title: "Car Racing Extreme", 
    image: "https://placehold.co/800x500?text=Racing+Game", 
    category: "Racing",
    description: "Experience the thrill of high-speed racing with Car Racing Extreme! Race through stunning environments, unlock powerful cars, and compete against players worldwide. With realistic physics and responsive controls, this game puts you in the driver's seat of the most exciting races.",
    instructions: "Use arrow keys or swipe to steer. Tap to accelerate and brake.",
    playUrl: "https://example.com/games/car-racing"
  },
  3: { 
    id: 3, 
    title: "Word Connect Challenge", 
    image: "https://placehold.co/800x500?text=Word+Game", 
    category: "Puzzle",
    description: "Challenge your vocabulary with Word Connect Challenge! Swipe letters to form words and solve hundreds of puzzles. Perfect for word game enthusiasts and those looking to improve their language skills while having fun.",
    instructions: "Swipe to connect letters and form words. Find all words to complete the level.",
    playUrl: "https://example.com/games/word-connect"
  },
  4: { 
    id: 4, 
    title: "Space Invaders", 
    image: "https://placehold.co/800x500?text=Space+Game", 
    category: "Action",
    description: "Defend Earth against alien invaders in this modern take on the arcade classic! Space Invaders brings retro gaming to your device with updated graphics and exciting power-ups. How long can you survive the alien onslaught?",
    instructions: "Tap left or right to move. Tap the screen to shoot at aliens.",
    playUrl: "https://example.com/games/space-invaders"
  },
  5: { 
    id: 5, 
    title: "Candy Match", 
    image: "https://placehold.co/800x500?text=Candy+Match", 
    category: "Puzzle",
    description: "Sweet, colorful, and addictive! Candy Match is a delightful match-3 puzzle game with hundreds of levels. Swap candies to create matches, trigger special effects, and overcome challenging obstacles as you progress through this sugary adventure.",
    instructions: "Swap adjacent candies to match 3 or more of the same color.",
    playUrl: "https://example.com/games/candy-match"
  },
  6: { 
    id: 6, 
    title: "Basketball Pro", 
    image: "https://placehold.co/800x500?text=Basketball", 
    category: "Sports",
    description: "Show off your basketball skills in this fast-paced sports game! Perfect your timing to make amazing shots, compete in various game modes, and become the Basketball Pro champion. Simple controls make it easy to pick up but challenging to master.",
    instructions: "Tap and hold to aim, release to shoot the basketball.",
    playUrl: "https://example.com/games/basketball-pro"
  },
  7: { 
    id: 7, 
    title: "Ninja Run", 
    image: "https://placehold.co/800x500?text=Ninja+Game", 
    category: "Action",
    description: "Run, jump, and slice your way through challenging obstacles as a nimble ninja! With beautiful environments, fluid animations, and increasingly difficult levels, Ninja Run offers an exciting endless runner experience for players of all ages.",
    instructions: "Tap to jump, swipe down to slide, swipe up to climb walls.",
    playUrl: "https://example.com/games/ninja-run"
  },
  8: { 
    id: 8, 
    title: "Solitaire Kings", 
    image: "https://placehold.co/800x500?text=Solitaire", 
    category: "Card",
    description: "The classic card game, perfected for your device! Solitaire Kings features beautiful card designs, multiple variations of solitaire, and a user-friendly interface. Enjoy the timeless gameplay of this beloved card game wherever you go.",
    instructions: "Tap and drag cards to arrange them in sequence. Build stacks by alternating colors.",
    playUrl: "https://example.com/games/solitaire-kings"
  },
  9: { 
    id: 9, 
    title: "Farm Adventure", 
    image: "https://placehold.co/800x500?text=Farm+Game", 
    category: "Adventure",
    description: "Build and manage your own virtual farm in Farm Adventure! Plant crops, raise animals, and expand your farmland in this relaxing yet engaging simulation game. Trade with neighbors and unlock new items as you grow your farming empire.",
    instructions: "Tap fields to plant crops, tap animals to collect resources. Build structures to expand your farm.",
    playUrl: "https://example.com/games/farm-adventure"
  },
  10: { 
    id: 10, 
    title: "Chess Master", 
    image: "https://placehold.co/800x500?text=Chess", 
    category: "Strategy",
    description: "Challenge your mind with Chess Master, featuring multiple difficulty levels suitable for beginners and grandmasters alike! Improve your strategy, learn new tactics, and enjoy various chess puzzles in this beautifully designed chess game.",
    instructions: "Tap a piece to select it, then tap a square to move. Follow standard chess rules.",
    playUrl: "https://example.com/games/chess-master"
  },
  11: { 
    id: 11, 
    title: "Zombie Apocalypse", 
    image: "https://placehold.co/800x500?text=Zombie+Game", 
    category: "Action",
    description: "Survive the undead onslaught in Zombie Apocalypse! Gather weapons, find survivors, and build defenses as you navigate through a world overrun by zombies. With intense action and strategic gameplay, every decision could be your last.",
    instructions: "Tap to shoot, swipe to change weapons. Collect resources to craft items and weapons.",
    playUrl: "https://example.com/games/zombie-apocalypse"
  },
  12: { 
    id: 12, 
    title: "Sudoku Challenge", 
    image: "https://placehold.co/800x500?text=Sudoku", 
    category: "Puzzle",
    description: "Exercise your brain with Sudoku Challenge, featuring thousands of puzzles across multiple difficulty levels! With helpful hints, notes, and an intuitive interface, this game makes sudoku accessible for newcomers while still challenging for experts.",
    instructions: "Tap a cell to select it, then tap a number to fill it in. Follow sudoku rules to complete the grid.",
    playUrl: "https://example.com/games/sudoku-challenge"
  }
};

// Define a type for our game data
type GameDataType = typeof gameData;
type GameIdType = keyof GameDataType;

const GameDetails = () => {
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
      }, 1500); // Simulate network delay
    };

    loadGame();
  }, [id]);

  // Navigate back to the home page
  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <GameLoading />;
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Game not found</h1>
        <Button onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Games
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button variant="outline" onClick={handleBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="mb-6">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                  {game.category}
                </span>
                <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
                <p className="text-gray-600 mb-4">{game.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">How to Play</h2>
                <p className="text-gray-600">{game.instructions}</p>
              </div>
              
              <Button 
                className="w-full py-6 text-lg" 
                onClick={() => navigate(`/play/${id}`)}
              >
                Play Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Loading component
const GameLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-24 mb-4" />
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Skeleton className="w-full aspect-video" />
            </div>
            <div className="p-6 md:w-1/2">
              <Skeleton className="h-8 w-24 mb-2" />
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              
              <Skeleton className="h-8 w-40 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-6" />
              
              <Skeleton className="h-14 w-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameDetails;


import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryTabs from '@/components/CategoryTabs';
import GameGrid from '@/components/GameGrid';
import GameCollection from '@/components/GameCollection';
import AppBanner from '@/components/AppBanner';
import Footer from '@/components/Footer';

// Sample game data for collections
const trendingGames = [
  { id: 1, title: "Bubble Shooter", image: "https://placehold.co/300x225?text=Bubble+Shooter", category: "Puzzle" },
  { id: 2, title: "Car Racing Extreme", image: "https://placehold.co/300x225?text=Racing+Game", category: "Racing" },
  { id: 3, title: "Word Connect Challenge", image: "https://placehold.co/300x225?text=Word+Game", category: "Puzzle" },
  { id: 4, title: "Space Invaders", image: "https://placehold.co/300x225?text=Space+Game", category: "Action" },
  { id: 5, title: "Candy Match", image: "https://placehold.co/300x225?text=Candy+Match", category: "Puzzle" },
  { id: 6, title: "Basketball Pro", image: "https://placehold.co/300x225?text=Basketball", category: "Sports" },
];

const newGames = [
  { id: 7, title: "Ninja Run", image: "https://placehold.co/300x225?text=Ninja+Game", category: "Action" },
  { id: 8, title: "Solitaire Kings", image: "https://placehold.co/300x225?text=Solitaire", category: "Card" },
  { id: 9, title: "Farm Adventure", image: "https://placehold.co/300x225?text=Farm+Game", category: "Adventure" },
  { id: 10, title: "Chess Master", image: "https://placehold.co/300x225?text=Chess", category: "Strategy" },
  { id: 11, title: "Zombie Apocalypse", image: "https://placehold.co/300x225?text=Zombie+Game", category: "Action" },
  { id: 12, title: "Sudoku Challenge", image: "https://placehold.co/300x225?text=Sudoku", category: "Puzzle" },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Games");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoryTabs onSelectCategory={setSelectedCategory} />
      <GameGrid category={selectedCategory} />
      <GameCollection title="Trending Games" games={trendingGames} />
      <AppBanner />
      <GameCollection title="New Releases" games={newGames} />
      <Footer />
    </div>
  );
};

export default Index;

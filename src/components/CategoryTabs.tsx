
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "All Games",
  "Action",
  "Puzzle",
  "Strategy",
  "Arcade",
  "Racing",
  "Sports",
  "Card",
  "Adventure"
];

interface CategoryTabsProps {
  onSelectCategory: (category: string) => void;
}

const CategoryTabs = ({ onSelectCategory }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState("All Games");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto pb-2 scrollbar-none">
          <div className="flex space-x-2 py-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2",
                  activeCategory === category 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;

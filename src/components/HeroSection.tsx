
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/80 to-primary-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTl2MWgtMnYtMWgyem0tNCA0aC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Play Instant Games
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            No downloads, no waiting. Jump right into the best casual gaming experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-white text-primary hover:bg-gray-100">
              Browse Games
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://placehold.co/800x450?text=Featured+Game" 
              alt="Featured Game" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="rounded-full w-16 h-16 bg-secondary hover:bg-secondary/90">
                <Play className="h-8 w-8 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

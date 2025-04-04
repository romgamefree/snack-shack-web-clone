
import { Button } from "@/components/ui/button";

const AppBanner = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-primary-light to-primary rounded-xl overflow-hidden">
          <div className="p-8 md:p-10 md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Play GameSnacks on your mobile device</h2>
            <p className="text-white/90 mb-6">Download our app for the best gaming experience with no ads and offline play.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100">
                App Store
              </Button>
              <Button className="bg-white text-primary hover:bg-gray-100">
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center p-6">
            <img 
              src="https://placehold.co/300x600?text=Phone+Mockup" 
              alt="Mobile App" 
              className="h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;

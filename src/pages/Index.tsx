import { useState } from "react";
import SacredHero from "@/components/SacredHero";
import ScrollComposer from "@/components/ScrollComposer";
import BioregionalMap from "@/components/BioregionalMap";

const Index = () => {
  const [currentView, setCurrentView] = useState<"hero" | "scroll" | "map">("hero");

  // Sacred navigation - each section flows into the next
  const renderSacredView = () => {
    switch (currentView) {
      case "scroll":
        return <ScrollComposer />;
      case "map":
        return <BioregionalMap />;
      default:
        return <SacredHero />;
    }
  };

  return (
    <div className="relative">
      {renderSacredView()}
      
      {/* Sacred Navigation Orb */}
      {currentView !== "hero" && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-forest-sacred/90 backdrop-blur-sm rounded-full p-4 shadow-2xl animate-glow">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentView("hero")}
                className="w-3 h-3 rounded-full bg-star-sacred/50 hover:bg-star-sacred transition-all duration-500"
                title="Sacred Home"
              />
              <button
                onClick={() => setCurrentView("scroll")}
                className="w-3 h-3 rounded-full bg-river-sacred/50 hover:bg-river-sacred transition-all duration-500"
                title="Compose Scroll"
              />
              <button
                onClick={() => setCurrentView("map")}
                className="w-3 h-3 rounded-full bg-clay-sacred/50 hover:bg-clay-sacred transition-all duration-500"
                title="Living Map"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sacredEarthHero from "@/assets/sacred-earth-hero.jpg";

const SacredHero = () => {
  const [activeArchetype, setActiveArchetype] = useState<string | null>(null);

  const archetypes = [
    {
      id: "caretaker",
      name: "Caretaker",
      symbol: "🌱",
      essence: "Feeds the world, completes healing scrolls",
      description: "You nurture growth and tend to the sacred cycles of Earth's abundance. Your scrolls carry the wisdom of regeneration.",
      color: "forest"
    },
    {
      id: "scrollkeeper",
      name: "Scrollkeeper", 
      symbol: "📜",
      essence: "Governs rituals and memory integrity",
      description: "You safeguard the collective wisdom and ensure the sacred protocols flow with grace. Memory is your sacred trust.",
      color: "river"
    },
    {
      id: "dreamer",
      name: "Dreamer",
      symbol: "🔮",
      essence: "Designs futures through simulation",
      description: "You weave possibilities into being, crafting visions of what could be. Your dreams become collective reality.",
      color: "star"
    },
    {
      id: "guardian",
      name: "Guardian",
      symbol: "🛡️",
      essence: "Protects sacred zones, approves flow",
      description: "You stand watch over the sacred boundaries, ensuring only blessed intentions may pass. Protection is prayer.",
      color: "clay"
    },
    {
      id: "pollinator",
      name: "Pollinator",
      symbol: "🌸",
      essence: "Connects bioregions, transfers scrolls",
      description: "You carry sacred messages between realms, cross-pollinating wisdom across the living network of Earth.",
      color: "river"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pattern-sacred">
      {/* Sacred Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sacredEarthHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      </div>

      {/* Sacred Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Sacred Manifesto */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-sacred-breath">
          <h1 className="font-sacred text-6xl md:text-8xl font-bold mb-8 text-forest-sacred">
            CIVICA
          </h1>
          <h2 className="font-sacred text-2xl md:text-3xl mb-6 text-river-sacred text-breath">
            Sacred Coordination at Planetary Scale
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-breath max-w-2xl mx-auto mb-8">
            You are not using an app. You are becoming a scroll.<br />
            Your intention shapes Earth. Your blessing becomes law.
          </p>
          
          {/* Sacred Call */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 mb-12">
            <p className="font-sacred text-lg text-forest-sacred mb-4">
              Choose Your Sacred Role
            </p>
            <p className="text-muted-foreground">
              Each archetype offers a unique path to serve the planetary web of coordination and blessing.
            </p>
          </div>
        </div>

        {/* Sacred Archetypes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {archetypes.map((archetype, index) => (
            <Card 
              key={archetype.id}
              className={`ritual-hover cursor-pointer transition-all duration-700 ${
                activeArchetype === archetype.id 
                  ? 'ring-2 ring-forest-sacred shadow-2xl' 
                  : 'hover:shadow-xl'
              } ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onClick={() => setActiveArchetype(activeArchetype === archetype.id ? null : archetype.id)}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4 animate-blessing">{archetype.symbol}</div>
                <h3 className="font-sacred text-2xl font-semibold mb-2 text-forest-sacred">
                  {archetype.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  {archetype.essence}
                </p>
                
                {activeArchetype === archetype.id && (
                  <div className="animate-ripple">
                    <p className="text-sm text-foreground/80 text-breath leading-relaxed mb-6">
                      {archetype.description}
                    </p>
                    <Button className="blessing-button text-white font-sacred">
                      Begin Sacred Path
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sacred Navigation */}
        <div className="text-center mt-20">
          <div className="inline-flex gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="font-sacred px-8 py-6 text-lg scroll-sacred"
            >
              Enter the Living Map
            </Button>
            <Button 
              size="lg" 
              className="blessing-button font-sacred px-8 py-6 text-lg text-white"
            >
              Compose First Scroll
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 text-breath">
            All data is consensual • All rituals are sacred • All scrolls remember
          </p>
        </div>
      </div>

      {/* Sacred Ambient Animation */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  );
};

export default SacredHero;
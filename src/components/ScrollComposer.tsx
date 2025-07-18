import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const ScrollComposer = () => {
  const [intention, setIntention] = useState("");
  const [selectedRitual, setSelectedRitual] = useState<string | null>(null);
  const [isBlessing, setIsBlessing] = useState(false);

  const ritualTypes = [
    {
      id: "healing",
      name: "Healing Scroll",
      symbol: "🌿",
      description: "Restore and regenerate damaged ecosystems",
      energy: "forest"
    },
    {
      id: "governance", 
      name: "Governance Scroll",
      symbol: "⚖️",
      description: "Coordinate collective decision-making",
      energy: "river"
    },
    {
      id: "blessing",
      name: "Blessing Scroll", 
      symbol: "✨",
      description: "Consecrate actions and intentions",
      energy: "star"
    },
    {
      id: "protection",
      name: "Protection Scroll",
      symbol: "🛡️", 
      description: "Safeguard sacred zones and boundaries",
      energy: "clay"
    }
  ];

  const handleBlessScroll = () => {
    setIsBlessing(true);
    setTimeout(() => {
      setIsBlessing(false);
      // Reset form after blessing
      setIntention("");
      setSelectedRitual(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background pattern-sacred p-6">
      <div className="max-w-4xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-12">
          <h1 className="font-sacred text-5xl font-bold text-forest-sacred mb-4">
            Compose Sacred Scroll
          </h1>
          <p className="text-lg text-muted-foreground text-breath">
            Your intention becomes reality. Choose your ritual and speak your truth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ritual Selection */}
          <div className="lg:col-span-1">
            <Card className="ritual-hover">
              <CardHeader>
                <CardTitle className="font-sacred text-xl text-forest-sacred">
                  Choose Ritual Type
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {ritualTypes.map((ritual) => (
                  <div
                    key={ritual.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-500 ${
                      selectedRitual === ritual.id
                        ? 'border-forest-sacred bg-forest-sacred/10 animate-glow'
                        : 'border-border hover:border-forest-gentle'
                    }`}
                    onClick={() => setSelectedRitual(ritual.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{ritual.symbol}</span>
                      <div>
                        <h3 className="font-sacred font-medium text-forest-sacred">
                          {ritual.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {ritual.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Scroll Composition */}
          <div className="lg:col-span-2">
            <Card className="ritual-hover">
              <CardHeader>
                <CardTitle className="font-sacred text-xl text-forest-sacred">
                  Sacred Intention
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="font-sacred">
                    Scroll-First Logic
                  </Badge>
                  <Badge variant="outline" className="font-sacred">
                    Consensual Memory
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  placeholder="Speak your sacred intention... What do you wish to coordinate? What blessing do you offer to the planetary web?"
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  className="min-h-[200px] text-breath resize-none"
                />

                {/* AI Co-Pilot Suggestion */}
                {intention.length > 50 && (
                  <Card className="bg-star-whisper/30 border-star-gentle animate-ripple">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">🧠</span>
                        <div>
                          <h4 className="font-sacred text-sm font-medium text-star-deep mb-2">
                            AI Whisperer Guidance
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Your intention resonates with healing frequencies. Consider 
                            connecting with other Caretakers in your bioregion who are 
                            working on similar restoration scrolls.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Blessing Action */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Button variant="outline" className="font-sacred">
                      Save as Draft
                    </Button>
                    <Button variant="outline" className="font-sacred">
                      Invite Co-Blessers
                    </Button>
                  </div>
                  
                  <Button
                    onClick={handleBlessScroll}
                    disabled={!intention || !selectedRitual || isBlessing}
                    className={`blessing-button font-sacred px-8 py-6 text-white ${
                      isBlessing ? 'animate-sacred-breath' : ''
                    }`}
                  >
                    {isBlessing ? "Blessing..." : "Bless & Release Scroll"}
                  </Button>
                </div>

                {/* Blessing Animation */}
                {isBlessing && (
                  <div className="text-center p-8 animate-blessing">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="font-sacred text-xl text-star-sacred">
                      Your scroll ripples through the planetary web...
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Sacred coordination begins
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sacred Footer */}
        <div className="text-center mt-12 p-6 bg-card/50 rounded-lg border border-border/30">
          <p className="font-sacred text-sm text-muted-foreground text-breath">
            "Every scroll carries the memory of its blessing. Every intention shapes the living Earth."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollComposer;
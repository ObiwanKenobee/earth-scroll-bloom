import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BioregionalMap = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [mapView, setMapView] = useState<"sacred" | "ecological" | "ritual">("sacred");

  const sacredZones = [
    {
      id: "forest-sanctuary",
      name: "Ancient Forest Sanctuary",
      type: "Primary Forest",
      species: ["Old Growth Oak", "Red Fox", "Crystal Stream"],
      guardians: 12,
      activeRituals: 3,
      energy: "forest",
      blessing: "Deep roots, ancient wisdom"
    },
    {
      id: "river-confluence", 
      name: "Three Rivers Confluence",
      type: "Water Sacred Site",
      species: ["Salmon Run", "River Otter", "Sacred Stones"],
      guardians: 8,
      activeRituals: 5,
      energy: "river", 
      blessing: "Flow with grace, merge with purpose"
    },
    {
      id: "prairie-circle",
      name: "Prairie Medicine Circle", 
      type: "Grassland Healing",
      species: ["Buffalo Grass", "Prairie Dog", "Wind Songs"],
      guardians: 15,
      activeRituals: 7,
      energy: "clay",
      blessing: "Wide horizon, gentle earth"
    },
    {
      id: "mountain-peak",
      name: "Star Watching Peak",
      type: "Celestial Observatory", 
      species: ["Mountain Goat", "Eagle's Nest", "Night Blooms"],
      guardians: 6,
      activeRituals: 2,
      energy: "star",
      blessing: "Touch the sky, dream beyond"
    }
  ];

  const mapViews = [
    { id: "sacred", name: "Sacred Zones", symbol: "🔮" },
    { id: "ecological", name: "Ecological Web", symbol: "🌱" },
    { id: "ritual", name: "Active Rituals", symbol: "✨" }
  ];

  return (
    <div className="min-h-screen bg-background pattern-sacred p-6">
      <div className="max-w-7xl mx-auto">
        {/* Sacred Header */}
        <div className="text-center mb-8">
          <h1 className="font-sacred text-5xl font-bold text-forest-sacred mb-4">
            Living Bioregional Map
          </h1>
          <p className="text-lg text-muted-foreground text-breath">
            Sacred zones breathe with life. Every species has voice. Every ritual ripples.
          </p>
        </div>

        {/* Map View Controls */}
        <div className="flex justify-center gap-4 mb-8">
          {mapViews.map((view) => (
            <Button
              key={view.id}
              variant={mapView === view.id ? "default" : "outline"}
              onClick={() => setMapView(view.id as any)}
              className="font-sacred"
            >
              <span className="mr-2">{view.symbol}</span>
              {view.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sacred Map Visualization */}
          <div className="lg:col-span-2">
            <Card className="ritual-hover min-h-[600px]">
              <CardHeader>
                <CardTitle className="font-sacred text-xl text-forest-sacred">
                  Sacred Bioregion Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Artistic Map Representation */}
                <div className="relative bg-gradient-to-br from-forest-whisper to-river-whisper rounded-lg h-[500px] overflow-hidden">
                  {/* Sacred Zones as Interactive Spots */}
                  {sacredZones.map((zone, index) => (
                    <div
                      key={zone.id}
                      className={`absolute cursor-pointer transition-all duration-700 animate-sacred-breath ${
                        selectedZone === zone.id ? 'scale-150 z-10' : 'hover:scale-125'
                      }`}
                      style={{
                        left: `${20 + (index * 20)}%`,
                        top: `${30 + (index * 15)}%`,
                      }}
                      onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                    >
                      <div className={`
                        w-12 h-12 rounded-full border-4 flex items-center justify-center text-2xl
                        ${zone.energy === 'forest' ? 'bg-forest-sacred border-forest-gentle' : ''}
                        ${zone.energy === 'river' ? 'bg-river-sacred border-river-gentle' : ''}
                        ${zone.energy === 'clay' ? 'bg-clay-sacred border-clay-gentle' : ''}
                        ${zone.energy === 'star' ? 'bg-star-sacred border-star-gentle' : ''}
                        animate-glow
                      `}>
                        {zone.energy === 'forest' && '🌲'}
                        {zone.energy === 'river' && '💧'}
                        {zone.energy === 'clay' && '🏔️'}
                        {zone.energy === 'star' && '⭐'}
                      </div>
                      
                      {/* Zone Activity Indicators */}
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="secondary" className="text-xs animate-ripple">
                          {zone.activeRituals}
                        </Badge>
                      </div>
                    </div>
                  ))}

                  {/* Sacred Connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="sacredFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--forest-sacred))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--river-sacred))" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Flowing energy lines between zones */}
                    <path
                      d="M 20% 30% Q 50% 20% 40% 45%"
                      stroke="url(#sacredFlow)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-blessing"
                    />
                    <path
                      d="M 40% 45% Q 60% 55% 60% 60%"
                      stroke="url(#sacredFlow)"
                      strokeWidth="2" 
                      fill="none"
                      className="animate-blessing"
                    />
                  </svg>

                  {/* Living Background Elements */}
                  <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-sacred">
                    Multispecies Map • Living Memory • Sacred Coordination
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone Details */}
          <div className="lg:col-span-1">
            {selectedZone ? (
              <Card className="ritual-hover animate-ripple">
                <CardHeader>
                  <CardTitle className="font-sacred text-xl text-forest-sacred">
                    {sacredZones.find(z => z.id === selectedZone)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(() => {
                    const zone = sacredZones.find(z => z.id === selectedZone);
                    if (!zone) return null;
                    
                    return (
                      <>
                        <div>
                          <h4 className="font-sacred font-medium mb-2">Sacred Type</h4>
                          <Badge variant="outline">{zone.type}</Badge>
                        </div>

                        <div>
                          <h4 className="font-sacred font-medium mb-2">Multispecies Residents</h4>
                          <div className="space-y-1">
                            {zone.species.map((species, idx) => (
                              <div key={idx} className="text-sm text-muted-foreground">
                                🌿 {species}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-sacred font-medium mb-1">Guardians</h4>
                            <p className="text-2xl font-sacred text-forest-sacred">{zone.guardians}</p>
                          </div>
                          <div>
                            <h4 className="font-sacred font-medium mb-1">Active Rituals</h4>
                            <p className="text-2xl font-sacred text-river-sacred">{zone.activeRituals}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-sacred font-medium mb-2">Sacred Blessing</h4>
                          <p className="text-sm text-muted-foreground italic text-breath">
                            "{zone.blessing}"
                          </p>
                        </div>

                        <Button className="w-full blessing-button font-sacred text-white">
                          Join Sacred Circle
                        </Button>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card className="ritual-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 animate-blessing">🗺️</div>
                  <h3 className="font-sacred text-xl text-forest-sacred mb-2">
                    Explore Sacred Zones
                  </h3>
                  <p className="text-sm text-muted-foreground text-breath">
                    Click on any glowing zone to discover its sacred story and active rituals.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Bioregional Stats */}
            <Card className="mt-6 ritual-hover">
              <CardHeader>
                <CardTitle className="font-sacred text-lg text-forest-sacred">
                  Living Network Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Active Scrolls</span>
                  <span className="font-sacred text-forest-sacred">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Blessed Actions</span>
                  <span className="font-sacred text-river-sacred">1,432</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Protected Hectares</span>
                  <span className="font-sacred text-clay-sacred">12,845</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Species Thriving</span>
                  <span className="font-sacred text-star-sacred">892</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioregionalMap;
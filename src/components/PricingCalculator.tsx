import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const PricingCalculator = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const priceRates = {
    sedan: { perKm: 200, perHour: 2500 },
    suv: { perKm: 300, perHour: 3500 },
    minibus: { perKm: 400, perHour: 5000 },
    bus: { perKm: 500, perHour: 6500 },
  };

  const calculatePrice = () => {
    if (!vehicleType || (!distance && !duration)) return;

    const rates = priceRates[vehicleType as keyof typeof priceRates];
    let price = 0;

    if (distance) {
      price += parseFloat(distance) * rates.perKm;
    }
    if (duration) {
      price += parseFloat(duration) * rates.perHour;
    }

    setEstimatedPrice(Math.round(price));
  };

  const bookWithEstimate = () => {
    const vehicleLabel = vehicleType === "sedan" ? "Sedan" : 
                        vehicleType === "suv" ? "SUV" : 
                        vehicleType === "minibus" ? "Minibus" : "Bus";
    
    const message = `Hi! I'd like to book a ${vehicleLabel}.

Estimated details:
Distance: ${distance || "N/A"} km
Duration: ${duration || "N/A"} hours
Estimated Price: ₦${estimatedPrice?.toLocaleString()}`;
    
    window.location.href = `https://wa.me/2348165884235?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Price Calculator
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get an instant estimate for your trip
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Estimate Your Ride Cost</CardTitle>
            <CardDescription>
              Select your vehicle type and trip details for a quick estimate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger id="vehicle">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan (₦200/km, ₦2,500/hr)</SelectItem>
                  <SelectItem value="suv">SUV (₦300/km, ₦3,500/hr)</SelectItem>
                  <SelectItem value="minibus">Minibus (₦400/km, ₦5,000/hr)</SelectItem>
                  <SelectItem value="bus">Bus (₦500/km, ₦6,500/hr)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="distance">Distance (km)</Label>
                <Input
                  id="distance"
                  type="number"
                  placeholder="e.g., 50"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (hours)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="e.g., 3"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
            </div>

            <Button onClick={calculatePrice} className="w-full" variant="default">
              Calculate Estimate
            </Button>

            {estimatedPrice !== null && (
              <div className="mt-6 p-6 bg-primary/10 rounded-lg space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Estimated Price</p>
                  <p className="text-4xl font-bold text-primary">
                    ₦{estimatedPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Final price may vary based on actual conditions
                  </p>
                </div>
                <Button onClick={bookWithEstimate} variant="cta" className="w-full">
                  Book This Ride
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingCalculator;

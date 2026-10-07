import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Blessing A.",
    text: "Very reliable and professional service. The driver was courteous and the car was spotlessly clean. I'll definitely use them again for my next trip!",
    rating: 5,
  },
  {
    name: "Oluwaseun M.",
    text: "Best car hire service in Ibadan! They picked me up from the airport on time and the journey was smooth and comfortable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Taiwo O.",
    text: "Professional service from start to finish. The pricing was transparent and fair. Safety Plus lives up to their name - I felt safe throughout the journey.",
    rating: 5,
  },
  {
    name: "Adebayo K.",
    text: "Excellent service! The car was spotless and the driver very professional. They made my business trip stress-free. Will definitely use them again.",
    rating: 5,
  },
  {
    name: "Chioma N.",
    text: "I was impressed by their punctuality and professionalism. The vehicle was clean and comfortable. Best car hire experience in Ibadan!",
    rating: 5,
  },
  {
    name: "Yemi S.",
    text: "Safety Plus exceeded my expectations! From booking to drop-off, everything was seamless. Their customer service is top-notch. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real experiences from real customers
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-border hover:shadow-lg hover:scale-105 transition-all duration-300 h-full">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic min-h-[100px]">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-foreground">— {testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

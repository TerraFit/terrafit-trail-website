"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Heart, Leaf, Award, Zap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Attract More Residents & Visitors",
    description: "Stand out with a unique outdoor fitness amenity that appeals to health-conscious residents and travelers",
  },
  {
    icon: TrendingUp,
    title: "Increase Property Value",
    description: "Add a premium feature that enhances your property's appeal and market positioning",
  },
  {
    icon: Heart,
    title: "Promote Community Wellness",
    description: "Support your community's health and fitness goals with professional-grade equipment",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    description: "Sustainable outdoor installation that blends naturally with your landscape",
  },
  {
    icon: Award,
    title: "Professional Quality",
    description: "Durable, weather-resistant equipment designed for commercial use",
  },
  {
    icon: Zap,
    title: "Low Maintenance",
    description: "Minimal upkeep required with long-lasting materials and simple care instructions",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Why Choose TerraFit Trail?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your outdoor space into a fitness destination that residents and visitors will love
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="py-12 px-6">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join leading private estates and corporate properties across South Africa in offering world-class outdoor fitness experiences with TerraFit Trail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8"
                  >
                    Request a Quote
                  </a>
                  <a 
                    href="#exercises" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8"
                  >
                    View Exercise Library
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

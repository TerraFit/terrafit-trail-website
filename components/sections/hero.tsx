"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Play } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  onVideoClick?: () => void;
}

export function Hero({ onVideoClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(76,175,80,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,195,74,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Outdoor Fitness Revolution</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Transform Your Space Into a{" "}
            <span className="text-primary">Fitness Destination</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional outdoor fitness trails designed for public and private estates, corporate campuses, and resort properties. 
            15 stations, 43 exercises, endless possibilities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-base px-8 group" asChild>
              <Link href="#contact">
                Get a Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <Link href="#exercises">
                Explore Exercises
              </Link>
            </Button>
          </div>

          {/* Video Thumbnail */}
          {onVideoClick && (
            <div className="pt-4">
              <button
                onClick={onVideoClick}
                className="relative w-full max-w-md mx-auto group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden aspect-video flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <Play className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Watch TerraFit in Action</p>
              </button>
            </div>
          )}
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Stations</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary">43</div>
              <div className="text-sm text-muted-foreground">Exercises</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Outdoor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Exercises } from "@/components/sections/exercises";
import { TrailLocator } from "@/components/sections/trail-locator";
import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { YouTubeModal } from "@/components/youtube-modal";
import { WhatsAppPopup } from "@/components/whatsapp-popup";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onVideoClick={() => setIsVideoOpen(true)} />
      <YouTubeModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId="N2rLyglNFTg"
      />
      <Exercises />
      <TrailLocator />
      <Benefits />
      <Contact />
      <Footer />
      <WhatsAppPopup />
    </main>
  );
}

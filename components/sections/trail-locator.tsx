"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleMapsModal } from "@/components/google-maps-modal";
import { QRCodeDisplay } from "@/components/qr-code-display";

export function TrailLocator() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <section id="trail" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Find Your Trail</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the TerraFit Trail at our featured location
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8!2d25.1000752!3d-33.9082336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzI5LjYiUyAyNcKwMDYnMDAuMyJF!5e0!3m2!1sen!2sza!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>J-Bay Zebra Lodge</CardTitle>
                  <CardDescription>Eastern Cape, South Africa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        10 minutes from Jeffreys Bay, 30 minutes from Gqeberha<br />
                        Coordinates: -33.9082336, 25.1000752
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Sunrise to Sunset (7 days a week)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">
                        +27 (0) 78 925 6812
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@jbayzebralodge.co.za
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full" asChild>
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=-33.9082336,25.1000752" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsMapOpen(true)}
                    >
                      View TerraFit Trail Zebra Lodge Map
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Want a Trail at Your Location?</CardTitle>
                  <CardDescription>
                    Perfect for private estates, corporate campuses, and resort properties
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">Request Installation Quote</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* QR Code Display Section */}
          <div className="mt-12 pt-12 border-t">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold">Member Check-In</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Registered members can scan the QR code below to check in when you arrive at the trail
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <QRCodeDisplay location="J-Bay Zebra Lodge" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Modal */}
      <GoogleMapsModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        mapsUrl="https://www.google.com/maps/d/u/0/edit?mid=1SdIieEa52IvOCyOngVgepuzqeOB9W8I&ll=-33.90527983013055%2C25.09132899999999&z=16"
      />
    </section>
  );
}

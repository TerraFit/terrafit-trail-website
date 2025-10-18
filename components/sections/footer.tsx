"use client";

import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Mountain className="w-6 h-6 text-primary" />
              <span>TerraFit Trail</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional outdoor fitness trails for private estates, corporate campuses, and resort properties across South Africa.
            </p>
            <div className="text-xs text-muted-foreground pt-2">
              <p className="font-medium">TerraFit Trail</p>
              <p>A Division of Aemara Group Pty Ltd</p>
              <p>P.O. Box 851, 6330 Jeffreys Bay</p>
              <p>Eastern Cape, South Africa</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#exercises" className="text-muted-foreground hover:text-foreground transition-colors">
                  Exercise Library
                </Link>
              </li>
              <li>
                <Link href="#trail" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trail Locator
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:inquiry@aemaragroup.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  inquiry@aemaragroup.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <a href="https://wa.me/27837789487" className="hover:text-foreground transition-colors block">
                    WhatsApp: +27 (0) 83 778 9487
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Eastern Cape, South Africa
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Business Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} TerraFit Trail. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

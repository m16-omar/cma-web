import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { CmaLogo } from './CmaLogo';

export const CmaFooter: React.FC = () => {
  const googleMapsUrl = 'https://maps.google.com/?q=Plot+11+Lateef+Jakande+Road+Agidingbi+Ikeja+Lagos+City+105.1+FM';
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.363625448378!2d3.3533!3d6.6142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e62df98687%3A0xb3e71d3a4362a7d4!2sLateef%20Jakande%20Rd%2C%20Agidingbi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng';

  return (
    <footer className="border-t border-[#1A1A1A] bg-black text-xs text-[#A0A0A0] pt-14 pb-8 mt-12">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#1A1A1A]">
          {/* Col 1: Brand Logo & Socials */}
          <div className="space-y-4">
            <CmaLogo size="md" showText={true} />
            <p className="text-xs text-[#A0A0A0] leading-relaxed max-w-xs">
              Nurturing the next generation of radio professionals and media entrepreneurs.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
              >
                <span className="font-bold text-[10px]">ig</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
              >
                <span className="font-bold text-[10px]">𝕏</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
              >
                <span className="font-bold text-[10px]">yt</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF6B00] text-white flex items-center justify-center transition-colors"
              >
                <span className="font-bold text-[9px]">tk</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs font-display">
              QUICK LINKS
            </div>
            <ul className="space-y-1.5 text-xs text-[#A0A0A0]">
              <li>
                <Link to="/" className="hover:text-[#FF6B00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="hover:text-[#FF6B00] transition-colors">
                  Mentors
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF6B00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#FF6B00] transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs font-display">
              POPULAR COURSES
            </div>
            <ul className="space-y-1.5 text-xs text-[#A0A0A0]">
              <li>
                <Link to="/courses/broadcast-media-pro-2026" className="hover:text-[#FF6B00] transition-colors">
                  Broadcast Media Pro Course
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                  Radio Presentation
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                  Voiceover & Audio Production
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                  Event Hosting & Public Speaking
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FF6B00] transition-colors">
                  Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Interactive Google Map */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs font-display">
              CONTACT US
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <span className="text-[#A0A0A0]">
                  Plot 11 Lateef Jakande Road, Agidingbi, Ikeja, Lagos.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <a href="tel:08109688638" className="text-[#A0A0A0] hover:text-white transition-colors">
                  0810 968 8638
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <a href="mailto:academy@city1051fm.com" className="text-[#A0A0A0] hover:text-white transition-colors">
                  academy@city1051fm.com
                </a>
              </div>
            </div>

            {/* Embedded Google Map Preview Box */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden border border-[#1A1A1A] aspect-[16/9] relative group shadow-md bg-[#0F0F0F]">
                {/* Embedded Live Google Map */}
                <iframe
                  title="City Media Academy Location"
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />

                {/* Top/Bottom Overlay Bar */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-transparent to-black/60 flex flex-col justify-between p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/10">
                      VISIT OUR CAMPUS
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Open Studio" />
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto self-end text-[10px] font-bold text-[#FF6B00] hover:text-white bg-black/80 hover:bg-[#FF6B00] hover:border-[#FF6B00] backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#FF6B00]/40 transition-all flex items-center gap-1 shadow-md"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[#A0A0A0] text-xs">
          © 2026 City Media Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

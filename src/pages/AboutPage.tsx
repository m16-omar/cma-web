import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Users,
  Radio,
  GraduationCap,
  Trophy,
  Target,
  Eye,
  BookOpen,
  Film,
  Wrench,
  Building,
  Wifi,
  UserCheck,
  Award,
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Heart,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { CmaFooter } from '../components/ui/CmaFooter';
import { CmaNavbar } from '../components/ui/CmaNavbar';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      <Helmet>
        <title>About Us | City Media Academy</title>
        <meta
          name="description"
          content="City Media Academy (CMA) is the training arm of City 105.1 FM. Nurturing the next generation of radio professionals and media entrepreneurs."
        />
      </Helmet>

      {/* 1. TOP NAVBAR - Matching reference */}
      <CmaNavbar />

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#1A1A1A]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy & Stats */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pre-Heading */}
              <span className="text-xs sm:text-sm font-bold text-[#FF6B00] uppercase tracking-widest block font-display">
                ABOUT CITY MEDIA ACADEMY
              </span>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.08]">
                Nurturing the Next<br />
                Generation of Radio<br />
                Professionals and<br />
                <span className="text-[#FF6B00]">Media Entrepreneurs.</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed font-normal max-w-2xl">
                City Media Academy (CMA) is the training arm of City 105.1 FM, one of Nigeria's leading urban contemporary radio stations. We are passionate about developing skilled, confident and industry-ready broadcast media professionals who will shape the future of media in Africa and beyond.
              </p>

              {/* Mentor Statistics Bar (4 Items) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white leading-none font-display">8</div>
                    <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Industry Mentors</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white leading-none font-display">150+</div>
                    <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Years Combined Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white leading-none font-display">1000+</div>
                    <div className="text-[11px] text-[#A0A0A0] mt-0.5 leading-tight">Students Mentored</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-white leading-tight font-display">Top</div>
                    <div className="text-[11px] text-[#A0A0A0] leading-tight">Industry Experts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Campus / Lobby Visual */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-[#1A1A1A] aspect-[4/3] shadow-2xl group">
              <img
                src="/images/cma_classroom_ai.jpg"
                alt="City Media Academy Classroom Lecture"
                className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              {/* Glowing Reception Logo Sign */}
              <div className="absolute top-6 left-6 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="font-serif italic font-bold text-[#FF6B00] text-xl block leading-none">
                  City
                </span>
                <span className="text-[9px] font-black tracking-widest text-white uppercase font-display block mt-0.5">
                  MEDIA ACADEMY
                </span>
              </div>

              {/* Framed Poster Accent on Right */}
              <div className="absolute top-6 right-6 p-2.5 rounded-lg border border-[#FF6B00]/40 bg-black/80 backdrop-blur-md text-[9px] font-mono leading-tight tracking-wider text-right shadow-md">
                <span className="text-[#A0A0A0] block">WHERE</span>
                <span className="text-[#FF6B00] font-black block">PASSION</span>
                <span className="text-white block">MEETS</span>
                <span className="text-[#FF6B00] font-black block">PURPOSE.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & STORY (3 CARDS) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Our Mission */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4 hover:border-[#FF6B00]/40 transition-all shadow-md group">
            <span className="text-xs font-bold text-[#FF6B00] tracking-wider uppercase block font-display">
              OUR MISSION
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
              <Target className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed">
              To deliver world-class broadcast and media training that equips individuals with practical skills, confidence and values needed to excel in the media industry and build sustainable careers.
            </p>
          </div>

          {/* Our Vision */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4 hover:border-[#FF6B00]/40 transition-all shadow-md group">
            <span className="text-xs font-bold text-[#FF6B00] tracking-wider uppercase block font-display">
              OUR VISION
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
              <Eye className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed">
              To be Africa's most respected media academy, empowering creatives and communicators to influence culture, drive innovation and transform communities through media.
            </p>
          </div>

          {/* Our Story */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] space-y-4 hover:border-[#FF6B00]/40 transition-all shadow-md group">
            <span className="text-xs font-bold text-[#FF6B00] tracking-wider uppercase block font-display">
              OUR STORY
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00]">
              <BookOpen className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-[13px] text-[#A0A0A0] leading-relaxed">
              Born out of the desire to bridge the skills gap in the media industry, CMA was established to provide high-quality, practical and relevant media education. Today, we continue to raise a new generation of broadcast professionals, content creators and media entrepreneurs who are making impact across the world.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE CMA & OUR CORE VALUES */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Why Choose City Media Academy? (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider font-display">
                WHY CHOOSE CMA
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Why City Media Academy?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 hover:border-[#FF6B00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Live Studio Training
                </h4>
                <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                  Train in real radio studios with professional mixing consoles and microphones.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 hover:border-[#FF6B00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Industry Mentors
                </h4>
                <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                  Learn directly from experienced on-air personalities and media professionals.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 hover:border-[#FF6B00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Guaranteed Internship
                </h4>
                <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                  3-week hands-on internship at City 105.1 FM for practical industry experience.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 hover:border-[#FF6B00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Recognized Certificate
                </h4>
                <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                  Earn a verified certificate valued across the Nigerian broadcast industry.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 hover:border-[#FF6B00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Small Class Sizes
                </h4>
                <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                  Limited slots per cohort to ensure personalized attention and maximum studio time.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] space-y-2 hover:border-[#FF6B00]/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                  Career Support
                </h4>
                <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                  Audition preparation, demo tape production and media job placement guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Our Core Values (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider font-display">
                WHAT DRIVES US
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Our Core Values
              </h3>
            </div>

            <div className="space-y-4">
              {/* Value 1 */}
              <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">Excellence</h4>
                  <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-snug">
                    We maintain the highest standards in broadcast training, curriculum and delivery.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">Integrity</h4>
                  <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-snug">
                    We instill strong journalistic ethics, authenticity and professional conduct.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">Innovation</h4>
                  <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-snug">
                    We embrace digital media trends, new broadcasting tools and modern formats.
                  </p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="p-3.5 rounded-xl bg-[#0F0F0F] border border-[#1A1A1A] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-display">Impact</h4>
                  <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-snug">
                    We exist to raise media professionals who create meaningful impact in society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POWERED BY CITY FM BANNER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="rounded-3xl bg-[#0A0A0A] border border-[#1A1A1A] p-6 sm:p-8 lg:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Studio Image + Badge */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/60 border border-[#1A1A1A]">
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
              alt="City 105.1 FM Studio"
              className="w-full h-full object-cover grayscale-[20%] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* City 105.1 FM Badge */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#FF6B00] text-black font-black flex flex-col items-center justify-center border-2 border-white/30 shadow-lg">
              <span className="text-[8px] text-white font-extrabold leading-none">CITY</span>
              <span className="text-[10px] text-black bg-white px-1 rounded-[2px] leading-none mt-0.5 font-black">
                105.1 FM
              </span>
            </div>
          </div>

          {/* Right Copy & 4 Badges */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider font-display">
              POWERED BY CITY FM
            </span>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-white leading-tight">
              Learn at the Home of Urban<br />
              Contemporary Radio
            </h3>

            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
              As the training arm of City 105.1 FM, students at CMA benefit from access to state-of-the-art studios, industry-standard equipment and real broadcast environments. Our strong industry connection opens doors to opportunities that go beyond the classroom.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-white">
                <Trophy className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs">Live Broadcast Experience</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-white">
                <Building className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs">Professional Facilities</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-white">
                <Users className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs">Industry Network</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-white">
                <Target className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs">Real Projects & Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATS BAR (5 METRICS) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 py-10">
        <div className="rounded-2xl bg-[#0A0A0A] border border-[#1A1A1A] grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1A1A1A] p-4 sm:p-6 shadow-xl text-center">
          <div className="p-4 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-display">5000+</div>
            <div className="text-xs text-[#A0A0A0]">Students Trained</div>
          </div>

          <div className="p-4 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-display">35+</div>
            <div className="text-xs text-[#A0A0A0]">Courses Offered</div>
          </div>

          <div className="p-4 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-display">25+</div>
            <div className="text-xs text-[#A0A0A0]">Industry Mentors</div>
          </div>

          <div className="p-4 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-display">10+</div>
            <div className="text-xs text-[#A0A0A0]">Years of Excellence</div>
          </div>

          <div className="p-4 space-y-1 col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-display">94%</div>
            <div className="text-xs text-[#A0A0A0]">Placement Success</div>
          </div>
        </div>
      </section>

      {/* 7. RICH FOOTER - Matching reference */}
      <CmaFooter />
    </div>
  );
};

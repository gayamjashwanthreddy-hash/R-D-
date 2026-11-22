'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, SkipForward } from 'lucide-react';
import MvsrLogo from '../navigation/MvsrLogo';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RDBlockEntryProps {
  onComplete?: () => void;
}

export default function RDBlockEntryExperience({ onComplete }: RDBlockEntryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const landingUiRef = useRef<HTMLDivElement>(null);
  const doorRevealRef = useRef<HTMLDivElement>(null);
  const interiorRevealRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isSkipped, setIsSkipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setIsSkipped(true);
      const headerEl = document.getElementById('institutional-header');
      if (headerEl) {
        gsap.set(headerEl, { y: '0%', opacity: 1, pointerEvents: 'auto' });
      }
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      if (!containerRef.current || !cameraRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2400',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.94) {
              onComplete?.();
            }
          },
        },
      });

      // SCENE 1 -> SCENE 2: Scroll begins, landing UI fades out gracefully
      tl.to(
        landingUiRef.current,
        {
          opacity: 0,
          y: -30,
          ease: 'power2.inOut',
          duration: 1,
        },
        0
      );

      // Camera smoothly approaches the central entrance (transform-origin focused on the entrance doors at 50% 58%)
      // Kept at a natural, non-distorting 2.35x scale to preserve building proportions without pixelation
      tl.to(
        cameraRef.current,
        {
          scale: 2.35,
          x: 0,
          y: '-14%',
          ease: 'power1.inOut',
          duration: 5,
        },
        0
      );

      // SCENE 3: Approaching the entrance doors threshold
      tl.to(
        doorRevealRef.current,
        {
          opacity: 1,
          scale: 1.05,
          ease: 'power2.inOut',
          duration: 1.8,
        },
        3.2
      );

      // SCENE 4: Entering the portal - Architectural foyer transition
      tl.to(
        interiorRevealRef.current,
        {
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          duration: 2.2,
        },
        4.0
      );

      // Final smooth dissolution into clean white institutional portal
      tl.to(
        overlayRef.current,
        {
          opacity: 1,
          ease: 'power2.inOut',
          duration: 1.2,
        },
        4.8
      );

      // STATE 3: Reveal Institutional Header into view only as the visitor enters the building
      const headerEl = document.getElementById('institutional-header');
      if (headerEl) {
        tl.fromTo(
          headerEl,
          { y: '-100%', opacity: 0, pointerEvents: 'none' },
          {
            y: '0%',
            opacity: 1,
            pointerEvents: 'auto',
            ease: 'power2.out',
            duration: 1.0,
          },
          4.7
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    localStorage.setItem('mvsr_seen_rd_intro', 'true');
    const headerEl = document.getElementById('institutional-header');
    if (headerEl) {
      gsap.to(headerEl, {
        y: '0%',
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
    // Scroll directly to homepage content
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop + 2600,
        behavior: 'smooth',
      });
    }
    onComplete?.();
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen h-[100dvh] overflow-hidden select-none bg-[#001530]"
      id="architectural-walkthrough"
    >
      {/* SKIP INTRO CONTROL (INSTITUTIONAL NAVY & NEUTRAL STYLING) */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-40">
        <button
          onClick={handleSkip}
          type="button"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 bg-[#002147] hover:bg-[#001530] text-white rounded border border-white/20 shadow-md backdrop-blur-sm"
          aria-label="Skip walkthrough to institutional website"
        >
          <SkipForward className="w-3.5 h-3.5 text-white/90" />
          <span>Skip Experience</span>
        </button>
      </div>

      {/* CAMERA STAGE: ACTUAL R&D BLOCK PHOTOGRAPH */}
      <div
        ref={cameraRef}
        className="absolute inset-0 w-full h-full transform-gpu"
        style={{ transformOrigin: '50% 58%' }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/rd-block.jpg"
            alt="Maturi Venkata Subba Rao Engineering College Institutional Research & Development Block"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />

          {/* SUBTLE CONTRAST OVERLAY: Clean architectural gradient ensuring contrast for text without obscuring the building */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35 pointer-events-none" />
        </div>
      </div>

      {/* SCENE 1: INITIAL LANDING HERO OVERLAY (OFFICIAL INSTITUTIONAL BRANDING) */}
      <div
        ref={landingUiRef}
        className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 md:p-16 pointer-events-none"
      >
        {/* TOP BRANDING: OFFICIAL EMBLEM & INSTITUTIONAL TITLES */}
        <div className="flex items-center gap-4 pt-1 sm:pt-0 max-w-4xl">
          {/* OFFICIAL EMBLEM WITHOUT DECORATIVE CONTAINERS */}
          <div className="flex-shrink-0">
            <MvsrLogo size={68} className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px]" />
          </div>

          <div className="text-left space-y-0.5">
            <p className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase text-white drop-shadow-md">
              MATURI VENKATA SUBBA RAO ENGINEERING COLLEGE
            </p>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 font-medium tracking-wide drop-shadow">
              Autonomous Institution &bull; Affiliated to Osmania University &bull; Established 1981
            </p>
          </div>
        </div>

        {/* CENTER R&D IDENTITY */}
        <div className="max-w-4xl text-left my-auto space-y-3 pt-6 pb-4">
          <div className="inline-block px-3 py-1 rounded bg-[#002147]/90 border border-white/20 text-[11px] font-bold tracking-wider uppercase text-white shadow">
            Institutional Research &amp; Development
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight">
            Research &amp; Development Centre
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-normal max-w-2xl leading-relaxed drop-shadow">
            M-MARTIC — Multidisciplinary Advanced Research &amp; Technology Innovation Centre
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-200">
            <span className="bg-black/50 px-3 py-1.5 rounded backdrop-blur-xs border border-white/10 font-medium">
              <strong className="text-white">4,000+ sq. ft.</strong> Dedicated Facility
            </span>
            <span className="bg-black/50 px-3 py-1.5 rounded backdrop-blur-xs border border-white/10 font-medium">
              <strong className="text-white">3</strong> OU Ph.D. Research Centers
            </span>
            <span className="bg-black/50 px-3 py-1.5 rounded backdrop-blur-xs border border-white/10 font-medium">
              <strong className="text-white">DRDO &amp; GHMC</strong> Empanelled
            </span>
          </div>
        </div>

        {/* BOTTOM SCROLL PROMPT */}
        <div className="flex items-center justify-between border-t border-white/15 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-white">
                Scroll to Enter R&amp;D Block
              </p>
              <p className="text-[11px] text-gray-300">
                Approaching main entrance &bull; Central Research Hub
              </p>
            </div>
          </div>
          <p className="hidden md:block text-xs text-gray-300/80 font-medium">
            M-MARTIC Pavilion &bull; Nadergul Campus
          </p>
        </div>
      </div>

      {/* SCENE 3: ENTRANCE APPROACH INDICATOR */}
      <div
        ref={doorRevealRef}
        className="pointer-events-none absolute inset-0 z-30 opacity-0 flex items-center justify-center"
      >
        <div className="px-6 py-4 rounded bg-[#002147]/85 border border-white/20 text-center shadow-xl backdrop-blur-xs">
          <span className="text-[10px] font-mono tracking-widest text-gray-300 uppercase block">
            Approaching Entrance
          </span>
          <span className="text-base font-bold text-white mt-0.5 block tracking-wide">
            R&amp;D BLOCK MAIN DOORS
          </span>
        </div>
      </div>

      {/* SCENE 4: INTERIOR ATRIUM EXPANSION */}
      <div
        ref={interiorRevealRef}
        className="pointer-events-none absolute inset-0 z-40 opacity-0 flex flex-col items-center justify-center bg-[#001530]/95 text-center p-8 scale-95"
      >
        <div className="max-w-2xl flex flex-col items-center space-y-4">
          <MvsrLogo size={76} />
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-300 block mb-1">
              Institutional Research &amp; Development
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome to MVSR R&amp;D Centre
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed">
            Advancing sponsored defense technologies, doctoral research, intellectual property, and multidisciplinary engineering since 1981.
          </p>
        </div>
      </div>

      {/* FINAL CLEAN WHITE TRANSITION OVERLAY */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-40 bg-white opacity-0 transition-opacity duration-500"
      />
    </section>
  );
}

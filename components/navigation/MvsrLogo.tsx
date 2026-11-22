import React from 'react';
import Image from 'next/image';

interface MvsrLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

/**
 * MvsrLogo Component
 * Renders the official MVSR Engineering College emblem using the actual supplied asset.
 * Maintains exact aspect ratio with object-fit: contain without distortion, cropping, or color alteration.
 */
export default function MvsrLogo({ size = 48, className = '', priority = true }: MvsrLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/mvsr-emblem.png"
        alt="Official Emblem of MVSR Engineering College"
        width={size}
        height={size}
        priority={priority}
        className="w-full h-full object-contain"
        sizes={`${size}px`}
      />
    </div>
  );
}

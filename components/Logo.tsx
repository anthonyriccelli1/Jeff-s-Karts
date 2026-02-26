import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 180, height: 60 },
    lg: { width: 280, height: 90 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      viewBox="0 0 280 90"
      width={width}
      height={height}
      className={className}
      aria-label="Jeff's Karts Logo"
    >
      {/* Golf Cart Silhouette */}
      <g transform="translate(5, 15)">
        {/* Cart body */}
        <path
          d="M10 35 L10 20 C10 15 15 10 25 10 L55 10 C60 10 65 12 67 18 L70 25 L70 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary-500"
        />
        {/* Roof */}
        <path
          d="M15 10 L15 2 C15 0 17 0 20 0 L50 0 C53 0 55 0 55 2 L55 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-primary-500"
        />
        {/* Roof supports */}
        <line x1="18" y1="0" x2="18" y2="10" stroke="currentColor" strokeWidth="2" className="text-primary-400" />
        <line x1="52" y1="0" x2="52" y2="10" stroke="currentColor" strokeWidth="2" className="text-primary-400" />
        
        {/* Seat */}
        <path
          d="M25 18 L25 28 L45 28 L45 18"
          fill="currentColor"
          className="text-accent-500"
        />
        
        {/* Wheels */}
        <circle cx="18" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary-600" />
        <circle cx="18" cy="40" r="3" fill="currentColor" className="text-accent-500" />
        <circle cx="58" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary-600" />
        <circle cx="58" cy="40" r="3" fill="currentColor" className="text-accent-500" />
        
        {/* Steering wheel hint */}
        <circle cx="30" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-400" />
        
        {/* Front detail / headlight */}
        <rect x="68" y="20" width="4" height="6" rx="1" fill="currentColor" className="text-accent-400" />
      </g>

      {showText && (
        <>
          {/* JEFF'S text */}
          <text
            x="90"
            y="38"
            fontFamily="var(--font-outfit), system-ui, sans-serif"
            fontSize="28"
            fontWeight="800"
            letterSpacing="1"
            fill="currentColor"
            className="text-white"
          >
            JEFF&apos;S
          </text>
          
          {/* KARTS text */}
          <text
            x="90"
            y="70"
            fontFamily="var(--font-outfit), system-ui, sans-serif"
            fontSize="36"
            fontWeight="900"
            letterSpacing="3"
            fill="currentColor"
            className="text-primary-500"
          >
            KARTS
          </text>
          
          {/* Accent line */}
          <rect
            x="90"
            y="75"
            width="100"
            height="3"
            rx="1.5"
            fill="currentColor"
            className="text-accent-500"
          />
          
          {/* Melbourne FL tagline */}
          <text
            x="195"
            y="70"
            fontFamily="var(--font-outfit), system-ui, sans-serif"
            fontSize="10"
            fontWeight="500"
            letterSpacing="2"
            fill="currentColor"
            className="text-primary-400"
          >
            MELBOURNE, FL
          </text>
        </>
      )}
    </svg>
  );
}

// Compact version for mobile/favicon
export function LogoIcon({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      aria-label="Jeff's Karts"
    >
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" fill="currentColor" className="text-slate-800" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500" />
      
      {/* Simplified cart */}
      <g transform="translate(8, 12)">
        {/* Body */}
        <path
          d="M5 18 L5 10 C5 7 8 5 14 5 L28 5 C30 5 32 6 33 9 L34 13 L34 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary-400"
        />
        {/* Roof */}
        <path
          d="M8 5 L8 2 L26 2 L26 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary-500"
        />
        {/* Wheels */}
        <circle cx="10" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500" />
        <circle cx="10" cy="20" r="1.5" fill="currentColor" className="text-accent-500" />
        <circle cx="28" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500" />
        <circle cx="28" cy="20" r="1.5" fill="currentColor" className="text-accent-500" />
      </g>
      
      {/* J letter accent */}
      <text
        x="24"
        y="30"
        fontFamily="system-ui, sans-serif"
        fontSize="12"
        fontWeight="900"
        textAnchor="middle"
        fill="currentColor"
        className="text-accent-500"
      >
        JK
      </text>
    </svg>
  );
}

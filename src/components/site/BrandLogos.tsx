import React from "react";

// Official vector logos for the 12 AC brands

export function GreeLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Gree logo">
      {/* Official Gree wordmark */}
      <text
        x="80"
        y="34"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontSize="34"
        fontWeight="900"
        letterSpacing="2"
        fill="#005bac"
      >
        GREE
      </text>
    </svg>
  );
}

export function MideaLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Midea logo">
      {/* Official Midea arc/dot accent + lettering */}
      <path
        d="M26 12 C34 6, 48 8, 52 14"
        stroke="#0083ca"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="27" cy="13" r="2.5" fill="#f8b300" />
      <text
        x="80"
        y="33"
        textAnchor="middle"
        fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="1"
        fill="#0083ca"
      >
        Midea
      </text>
    </svg>
  );
}

export function LgLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="LG logo">
      {/* LG Smile Emblem */}
      <g transform="translate(32, 4)">
        <circle cx="20" cy="20" r="19" fill="#A50034" />
        {/* L and G in white */}
        <path
          d="M20 9 A11 11 0 1 0 31 20 L22 20 M20 13 L20 25 L26 25"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Wink dot */}
        <circle cx="15" cy="16" r="2" fill="#ffffff" />
      </g>
      {/* LG text */}
      <text
        x="98"
        y="32"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="1.5"
        fill="#555555"
      >
        LG
      </text>
    </svg>
  );
}

export function SamsungLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Samsung logo">
      {/* Samsung signature typography */}
      <text
        x="80"
        y="33"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontSize="25"
        fontWeight="900"
        letterSpacing="2.5"
        fill="#1428A0"
      >
        SAMSUNG
      </text>
    </svg>
  );
}

export function DaikinLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Daikin logo">
      {/* Daikin triangle mark */}
      <polygon points="16,34 32,10 44,22" fill="#0097E0" />
      {/* DAIKIN typography */}
      <text
        x="102"
        y="32"
        textAnchor="middle"
        fontFamily="'Trebuchet MS', 'Arial Black', sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="1.5"
        fill="#0097E0"
      >
        DAIKIN
      </text>
    </svg>
  );
}

export function CarrierLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Carrier logo">
      {/* Carrier classic blue oval */}
      <ellipse cx="80" cy="24" rx="72" ry="20" fill="#003882" />
      <text
        x="80"
        y="31"
        textAnchor="middle"
        fontFamily="'Brush Script MT', 'Palatino', Georgia, serif"
        fontStyle="italic"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="1"
        fill="#ffffff"
      >
        Carrier
      </text>
    </svg>
  );
}

export function OGeneralLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="O General logo">
      {/* Fujitsu General Red emblem */}
      <rect x="8" y="10" width="28" height="28" rx="4" fill="#ED1C24" />
      <text
        x="22"
        y="31"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="20"
        fontWeight="900"
        fill="#ffffff"
      >
        O
      </text>
      <text
        x="98"
        y="31"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Trebuchet MS', sans-serif"
        fontSize="20"
        fontWeight="900"
        letterSpacing="0.8"
        fill="#222222"
      >
        GENERAL
      </text>
    </svg>
  );
}

export function YorkLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="York logo">
      {/* York Blue Triangle */}
      <polygon points="20,10 40,36 10,36" fill="#006BB6" />
      <text
        x="100"
        y="34"
        textAnchor="middle"
        fontFamily="'Arial Black', Impact, sans-serif"
        fontSize="29"
        fontWeight="900"
        letterSpacing="2"
        fill="#112244"
      >
        YORK
      </text>
    </svg>
  );
}

export function MitsubishiLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 48"
      fill="none"
      className={className}
      aria-label="Mitsubishi Electric logo"
    >
      {/* Three Red Diamonds */}
      <g transform="translate(10, 8) scale(0.65)">
        {/* Top diamond */}
        <polygon points="24,0 36,20.8 24,41.6 12,20.8" fill="#ED1C24" />
        {/* Bottom right diamond */}
        <polygon points="48,41.6 36,20.8 24,41.6 36,62.4" fill="#ED1C24" />
        {/* Bottom left diamond */}
        <polygon points="0,41.6 12,20.8 24,41.6 12,62.4" fill="#ED1C24" />
      </g>
      <text
        x="98"
        y="24"
        textAnchor="middle"
        fontFamily="'Arial Black', sans-serif"
        fontSize="13"
        fontWeight="900"
        letterSpacing="0.5"
        fill="#ED1C24"
      >
        MITSUBISHI
      </text>
      <text
        x="98"
        y="38"
        textAnchor="middle"
        fontFamily="'Arial', sans-serif"
        fontSize="11"
        fontWeight="800"
        letterSpacing="1"
        fill="#222222"
      >
        ELECTRIC
      </text>
    </svg>
  );
}

export function HisenseLogo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Hisense logo">
      <text
        x="80"
        y="33"
        textAnchor="middle"
        fontFamily="'Trebuchet MS', 'Arial', sans-serif"
        fontSize="27"
        fontWeight="800"
        letterSpacing="1.5"
        fill="#009A97"
      >
        Hisense
      </text>
    </svg>
  );
}

export function TclLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="TCL logo">
      <text
        x="80"
        y="35"
        textAnchor="middle"
        fontFamily="'Arial Black', sans-serif"
        fontSize="34"
        fontWeight="900"
        letterSpacing="2"
        fill="#E2001A"
      >
        TCL
      </text>
    </svg>
  );
}

export function SuperGeneralLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Super General logo">
      <text
        x="80"
        y="22"
        textAnchor="middle"
        fontFamily="'Arial Black', sans-serif"
        fontStyle="italic"
        fontSize="14"
        fontWeight="900"
        letterSpacing="1"
        fill="#00539B"
      >
        SUPER
      </text>
      <text
        x="80"
        y="38"
        textAnchor="middle"
        fontFamily="'Arial Black', sans-serif"
        fontStyle="italic"
        fontSize="17"
        fontWeight="900"
        letterSpacing="1.2"
        fill="#00539B"
      >
        GENERAL
      </text>
    </svg>
  );
}

export const brandLogoMap: Record<string, React.FC<{ className?: string }>> = {
  Gree: GreeLogo,
  Midea: MideaLogo,
  LG: LgLogo,
  Samsung: SamsungLogo,
  Daikin: DaikinLogo,
  Carrier: CarrierLogo,
  "O General": OGeneralLogo,
  York: YorkLogo,
  "Mitsubishi Electric": MitsubishiLogo,
  Hisense: HisenseLogo,
  TCL: TclLogo,
  "Super General": SuperGeneralLogo,
};

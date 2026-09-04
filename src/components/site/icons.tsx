export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.594 4.462 1.723 6.404L3.2 28.8l6.56-1.708a12.74 12.74 0 0 0 6.243 1.62h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053a12.71 12.71 0 0 0-9.055-3.66Zm0 23.2h-.004a10.63 10.63 0 0 1-5.417-1.483l-.389-.23-4.03 1.05 1.075-3.93-.253-.403a10.6 10.6 0 0 1-1.626-5.664c0-5.868 4.776-10.643 10.648-10.643 2.844 0 5.517 1.109 7.527 3.121a10.57 10.57 0 0 1 3.117 7.53c-.003 5.87-4.778 10.652-10.648 10.652Zm5.84-7.976c-.32-.16-1.894-.934-2.187-1.04-.293-.107-.507-.16-.72.16s-.827 1.04-1.014 1.253c-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.588-.952-.849-1.594-1.897-1.781-2.217-.187-.32-.02-.494.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.736-.987-2.376-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.67 0 1.575 1.147 3.097 1.307 3.31.16.213 2.257 3.446 5.468 4.833.764.33 1.36.527 1.825.674.767.244 1.464.21 2.016.128.615-.092 1.894-.774 2.161-1.522.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
    </svg>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="4" y="10" width="16" height="32" rx="2" className="fill-primary" />
      <rect x="22" y="4" width="22" height="38" rx="2" className="fill-navy" />
      <g className="fill-background">
        <rect x="8" y="16" width="3" height="3" />
        <rect x="13" y="16" width="3" height="3" />
        <rect x="8" y="22" width="3" height="3" />
        <rect x="13" y="22" width="3" height="3" />
        <rect x="8" y="28" width="3" height="3" />
        <rect x="13" y="28" width="3" height="3" />
        <rect x="27" y="11" width="4" height="3" />
        <rect x="34" y="11" width="4" height="3" />
        <rect x="27" y="18" width="4" height="3" />
        <rect x="34" y="18" width="4" height="3" />
        <rect x="27" y="25" width="4" height="3" />
        <rect x="34" y="25" width="4" height="3" />
      </g>
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex min-w-0 flex-col leading-none">
      <span
        className={`text-[10px] font-medium tracking-wide ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        dir="rtl"
      >
        الشركة الصيفية للحلول الفنية
      </span>
      <span
        className={`text-lg font-extrabold tracking-tight ${light ? "text-primary-foreground" : "text-navy"}`}
      >
        SUMMER TECH
      </span>
      <span
        className={`text-[9px] tracking-wide ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}
      >
        Maintenance solutions W.L.C
      </span>
    </span>
  );
}

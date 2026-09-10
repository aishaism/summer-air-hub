import React from "react";
import { WhatsAppIcon } from "@/components/site/icons";
import { cn } from "@/lib/utils";

export interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
}

export const WhatsAppButton = React.forwardRef<HTMLAnchorElement, WhatsAppButtonProps>(
  (
    { href, children, className, size = "md", iconPosition = "left", iconOnly = false, ...props },
    ref,
  ) => {
    const sizeClasses = {
      sm: "h-9 px-3.5 text-xs font-semibold gap-2 rounded-lg",
      md: "h-11 px-5 text-sm font-semibold gap-2.5 rounded-xl",
      lg: "h-12 px-6 text-base font-semibold gap-2.5 rounded-xl",
    };

    const iconSizes = {
      sm: "h-4 w-4 shrink-0 text-white",
      md: "h-4.5 w-4.5 shrink-0 text-white",
      lg: "h-5 w-5 shrink-0 text-white",
    };

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center font-medium bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-[#25D366]/25 transition-all duration-200 cursor-pointer select-none",
          sizeClasses[size],
          iconOnly && "w-10 h-10 p-0 rounded-full",
          className,
        )}
        {...props}
      >
        {iconPosition === "left" && <WhatsAppIcon className={iconSizes[size]} />}
        {children && <span>{children}</span>}
        {iconPosition === "right" && <WhatsAppIcon className={iconSizes[size]} />}
      </a>
    );
  },
);

WhatsAppButton.displayName = "WhatsAppButton";

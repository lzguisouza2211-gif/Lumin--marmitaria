import { LucideIcon, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export function PlaceholderImage({
  icon: Icon = UtensilsCrossed,
  className,
}: {
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-accent to-secondary",
        className
      )}
    >
      <Icon className="h-8 w-8 text-primary/60" strokeWidth={1.5} />
    </div>
  );
}

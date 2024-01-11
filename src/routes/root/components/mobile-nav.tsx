import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

interface MobileNavProps {
  links: {
    href: string;
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
  }[];
}

export function MobileNav({ links }: MobileNavProps) {
  return (
    <nav className="grid grid-cols-5 gap-4 border-t px-2">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "px-2 py-4 flex flex-col items-center justify-center gap-1",
            link.variant === "default" && "text-green-600"
          )}
        >
          <link.icon className="w-6 h-6" />
          <span className="text-xs">{link.title}</span>
        </Link>
      ))}
    </nav>
  );
}

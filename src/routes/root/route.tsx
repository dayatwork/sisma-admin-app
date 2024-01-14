import { useMemo, useState } from "react";
import {
  LoaderFunctionArgs,
  Outlet,
  json,
  // redirect,
  useLocation,
} from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "usehooks-ts";
import {
  ArrowLeftToLine,
  Bell,
  Building2,
  LayoutDashboard,
  LucideIcon,
  Search,
  Settings,
  Users2,
} from "lucide-react";

// import { queryClient } from "@/main";
// import { getLoggedInUser } from "@/services/auth/me";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Nav } from "./components/nav";
import { Logo } from "./components/logo";
import { UserNav } from "./components/user-nav";
import { MobileNav } from "./components/mobile-nav";
import { Button } from "../../components/ui/button";

export async function loader({ request }: LoaderFunctionArgs) {
  // try {
  //   const accessToken = isMobile ? localStorage.get("accessToken") : undefined;
  //   const response = await getLoggedInUser(request.signal, accessToken);
  //   return queryClient.fetchQuery({
  //     queryKey: ["me"],
  //     queryFn: () => response,
  //   });
  // } catch (error) {
  //   return redirect("/login");
  // }
  console.log(request.body);
  return json({ message: "OK" });
}

export default function Root() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const collapsible = useMediaQuery("(min-width: 1025px)");

  const mini = isCollapsed || !collapsible;

  const links = useMemo(
    () =>
      [
        {
          href: "/dashboard",
          title: "Dashboard",
          // label: "128",
          icon: LayoutDashboard,
          variant: pathname.startsWith("/dashboard") ? "default" : "ghost",
        },
        {
          href: "/organizations",
          title: "Organizations",
          // label: "128",
          icon: Building2,
          variant: pathname.startsWith("/organizations") ? "default" : "ghost",
        },
        {
          href: "/users",
          title: "Users",
          // label: "128",
          icon: Users2,
          variant: pathname.startsWith("/users") ? "default" : "ghost",
        },
        {
          href: "/notifications",
          title: "Notifications",
          // label: "128",
          icon: Bell,
          variant: pathname.startsWith("/notifications") ? "default" : "ghost",
        },
        {
          href: "/settings",
          title: "Settings",
          // label: "128",
          icon: Settings,
          variant: pathname.startsWith("/settings") ? "default" : "ghost",
        },
      ] as {
        href: string;
        title: string;
        label?: string;
        icon: LucideIcon;
        variant: "default" | "ghost";
      }[],
    [pathname]
  );

  if (isMobile) {
    return (
      <div className="h-[calc(100dvh)] overflow-auto flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <MobileNav links={links} />
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-full min-h-screen items-stretch flex">
        <div
          className={cn(
            "border-r w-[220px] transition-all",
            mini && "w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <Logo isCollapsed={mini} />
          {collapsible && (
            <div className="px-2 py-2 border-b">
              <Button
                variant="secondary"
                className={cn(
                  "w-full flex",
                  mini ? "justify-center" : "justify-start"
                )}
                onClick={() => setIsCollapsed((prev) => !prev)}
                size={mini ? "icon" : "default"}
              >
                <ArrowLeftToLine
                  className={cn("w-5 h-5 mr-2", mini ? "rotate-180" : "mr-2")}
                />
                {!mini && <span>Collapse</span>}
              </Button>
            </div>
          )}
          <Nav isCollapsed={mini} links={links} />
        </div>

        <div className="flex-1">
          <div className="h-16 border-b flex justify-between gap-6 items-center px-6">
            <form className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-8 lg:w-[400px] w-full"
                />
              </div>
            </form>
            <UserNav />
          </div>
          <Outlet />
        </div>
      </div>
    </TooltipProvider>
  );
}

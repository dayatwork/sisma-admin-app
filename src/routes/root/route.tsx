import { Outlet, redirect } from "react-router-dom";

import { getLoggedInUser } from "@/services/auth/me";
import { queryClient } from "@/main";
import { TooltipProvider } from "../../components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable";
import { cn } from "../../lib/utils";
import { Nav } from "./components/nav";
import {
  Bell,
  Building2,
  LayoutDashboard,
  Search,
  Settings,
  Users2,
} from "lucide-react";
import { useState } from "react";
import { Logo } from "./components/logo";
import { Input } from "../../components/ui/input";
import { UserNav } from "./components/user-nav";

export async function loader() {
  try {
    const response = await getLoggedInUser();
    return queryClient.fetchQuery({
      queryKey: ["me"],
      queryFn: () => response,
    });
  } catch (error) {
    return redirect("/login");
  }
}

export default function Root() {
  // const [isCollapsed, setIsCollapsed] = useLocalStorage("collapsed", true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full min-h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={12}
          // collapsedSize={4}
          collapsible={true}
          minSize={10}
          maxSize={14}
          onCollapse={() => {
            setIsCollapsed(true);
          }}
          onResize={(size) => {
            if (isCollapsed && size > 10) {
              setIsCollapsed(false);
            }
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <Logo isCollapsed={isCollapsed} />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                // label: "128",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Organizations",
                // label: "128",
                icon: Building2,
                variant: "ghost",
              },
              {
                title: "Users",
                // label: "128",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Notifications",
                // label: "128",
                icon: Bell,
                variant: "ghost",
              },
              {
                title: "Settings",
                // label: "128",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={30}>
          <div className="h-16 border-b flex justify-between items-center px-6">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-8 w-[400px]"
                />
              </div>
            </form>
            <UserNav />
          </div>
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}

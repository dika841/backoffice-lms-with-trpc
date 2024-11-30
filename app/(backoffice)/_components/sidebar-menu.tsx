"use client";
import { Calendar, Home, Users, BookOpen, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Menu items for LMS based on the schema
const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Courses", url: "/dashboard/courses", icon: BookOpen },
  { title: "Instructors", url: "/instructors", icon: User },
  { title: "Students", url: "/dashboard/students", icon: Users },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="bg-secondary-foreground text-white">
        <SidebarGroup className="space-y-12 pt-4">
          <SidebarGroupLabel className="text-lg font-semibold text-gray-200">
            LMS Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(
                    " transition-all duration-300 ease-in-out rounded-md",
                    {
                      "bg-white text-gray-600": pathname === item.url,
                    }
                  )}
                >
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center space-x-3 p-3 rounded-md ${
                        pathname === item.url ? "font-semibold" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-md">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

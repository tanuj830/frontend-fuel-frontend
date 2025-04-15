import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
  
  export function AppSidebar() {
    const items = [
        {
          title: "Home",
          url: "#",
          icon: Home,
        },
        {
          title: "Inbox",
          url: "#",
          icon: Inbox,
        },
        {
          title: "Calendar",
          url: "#",
          icon: Calendar,
        },
        {
          title: "Search",
          url: "#",
          icon: Search,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
      ]

    return (
      <Sidebar className="">
        <SidebarHeader className="">Frontend Fuel</SidebarHeader>
        <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  
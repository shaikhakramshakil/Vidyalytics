
import Link from 'next/link';
import {
  Bell,
  Building,
  Search,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { NavLinks } from '@/components/nav-links';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userAvatar = PlaceHolderImages.find(
    (img) => img.id === 'user-avatar-1'
  );

  return (
    <SidebarProvider>
      {/* Prototype Warning Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-100 border-b border-amber-300 text-amber-800 text-center py-1.5 px-2 sm:px-4 text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="hidden sm:inline">This is a prototype for demonstration purposes only — not an actual product</span>
        <span className="sm:hidden">Prototype — Demo Only</span>
      </div>
      
      <Sidebar className="border-r border-border mt-8 sm:mt-9">
        <SidebarHeader className="p-5 pb-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Building className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">VidyaLytics</span>
          </Link>
        </SidebarHeader>
        
        {/* School Selector */}
        <div className="px-4 pb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between h-9 px-3 text-sm font-normal"
              >
                <span>VidyaLytics High</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuItem>VidyaLytics High</DropdownMenuItem>
              <DropdownMenuItem>VidyaLytics Middle</DropdownMenuItem>
              <DropdownMenuItem>VidyaLytics Elementary</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <SidebarContent className="px-3 custom-scrollbar">
          <NavLinks />
        </SidebarContent>
        
        <SidebarFooter className="p-4">
          <Separator className="mb-4" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 px-2 h-auto py-2"
              >
                <Avatar className="h-8 w-8">
                  {userAvatar && (
                    <AvatarImage
                      src={userAvatar.imageUrl}
                      alt="User Avatar"
                    />
                  )}
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">AD</AvatarFallback>
                </Avatar>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Administrator</p>
                  <p className="text-xs text-muted-foreground truncate">
                    admin@vidyalytics.edu
                  </p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="top" align="start">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Administrator</p>
                  <p className="text-xs text-muted-foreground">
                    admin@vidyalytics.edu
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>
      
      <SidebarInset className="flex flex-col mt-8 sm:mt-9">
        <header className="flex h-12 sm:h-14 items-center gap-2 sm:gap-4 border-b bg-background px-3 sm:px-6 sticky top-8 sm:top-9 z-30">
          <SidebarTrigger />
          
          <div className="flex-1" />
          
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search - Mobile icon only, Desktop full input */}
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:hidden">
              <Search className="h-4 w-4" />
            </Button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[160px] md:w-[200px] lg:w-[280px] h-9"
              />
            </div>
            
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-9 sm:w-9">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-2 h-2 rounded-full bg-primary" />
            </Button>
          </div>
        </header>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

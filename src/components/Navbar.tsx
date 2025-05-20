
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="mr-2 h-4 w-4" /> },
    { name: 'Leads', path: '/leads', icon: <FileText className="mr-2 h-4 w-4" /> },
    { name: 'Clients', path: '/clients', icon: <Users className="mr-2 h-4 w-4" /> },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SBI Sales Advisor</span>
          </Link>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
              >
                <Button
                  variant={currentPath === item.path ? "secondary" : "ghost"}
                  className={cn(
                    "text-primary-foreground hover:bg-primary/90",
                    currentPath === item.path ? "bg-secondary" : ""
                  )}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="bg-secondary text-secondary-foreground h-8 w-8 rounded-full flex items-center justify-center">
                <span className="font-medium text-sm">SA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:hidden border-t border-primary/20">
        <div className="grid grid-cols-3 divide-x divide-primary/20">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                "flex flex-col items-center py-2 text-xs",
                currentPath === item.path ? "bg-primary/80" : ""
              )}
            >
              <span className="mb-1">{React.cloneElement(item.icon, { className: "h-5 w-5" })}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

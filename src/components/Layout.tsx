
import React from 'react';
import Navbar from './Navbar';
import { useToast } from '@/components/ui/use-toast';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto text-center text-sm">
          <p>© 2025 SBI Sales Advisor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, Users, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Welcome to SBI Sales Advisor
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Your all-in-one platform for managing sales activities, tracking leads, and achieving your targets.
          </p>
          <Link to="/dashboard">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in your sales role and deliver outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Dashboard</h3>
              <p className="text-muted-foreground mb-4">
                Real-time metrics and insights to track your progress towards sales targets.
              </p>
              <Link to="/dashboard" className="mt-auto">
                <Button variant="outline">
                  View Dashboard
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="bg-secondary/10 p-3 rounded-full mb-4">
                <FileText className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lead Management</h3>
              <p className="text-muted-foreground mb-4">
                Organize and prioritize your sales leads for maximum conversion efficiency.
              </p>
              <Link to="/leads" className="mt-auto">
                <Button variant="outline">
                  View Leads
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="bg-accent/20 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Profiles</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive client information and interaction history at your fingertips.
              </p>
              <Link to="/clients" className="mt-auto">
                <Button variant="outline">
                  View Clients
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

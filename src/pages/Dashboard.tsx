
import React from 'react';
import Layout from '@/components/Layout';
import StatCard from '@/components/Dashboard/StatCard';
import PerformanceChart from '@/components/Dashboard/PerformanceChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Indian, LineChart, Users, Target, Percent, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your sales performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Sales" 
            value="₹32.5L" 
            change={12} 
            icon={<Indian className="h-5 w-5 text-primary" />} 
          />
          <StatCard 
            title="Conversion Rate" 
            value="24.8%" 
            change={-2.5} 
            icon={<Percent className="h-5 w-5 text-primary" />} 
          />
          <StatCard 
            title="New Leads" 
            value="48" 
            change={8.7} 
            icon={<Users className="h-5 w-5 text-primary" />} 
          />
          <StatCard 
            title="Target Completion" 
            value="67%" 
            icon={<Target className="h-5 w-5 text-primary" />} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <PerformanceChart />
          
          <Card className="col-span-4 md:col-span-1">
            <CardHeader>
              <CardTitle>Sales Targets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Personal Loans</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Home Loans</span>
                    <span className="text-sm font-medium">62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Credit Cards</span>
                    <span className="text-sm font-medium">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">SME Loans</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Closed deal with Raj Sharma</p>
                    <p className="text-sm text-muted-foreground">Personal Loan - ₹15L</p>
                    <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">New lead assigned</p>
                    <p className="text-sm text-muted-foreground">Priya Patel - Home Loan Inquiry</p>
                    <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <LineChart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Monthly target updated</p>
                    <p className="text-sm text-muted-foreground">New target: ₹45L</p>
                    <p className="text-xs text-muted-foreground">May 18, 2025</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Premium Home Loan</span>
                    <span className="text-sm font-medium">₹1.2Cr</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Business Loan</span>
                    <span className="text-sm font-medium">₹85L</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Personal Loan Plus</span>
                    <span className="text-sm font-medium">₹65L</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Platinum Credit Card</span>
                    <span className="text-sm font-medium">₹45L</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

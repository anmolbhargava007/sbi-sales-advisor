
import React from 'react';
import Layout from '@/components/Layout';
import LeadTable from '@/components/Leads/LeadTable';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusCircle, Search, Filter, ArrowDownUp } from 'lucide-react';

const Leads = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Leads Management</h1>
            <p className="text-muted-foreground">
              Manage and track your sales leads
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Lead
          </Button>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-4">
          <Tabs defaultValue="all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <TabsList className="bg-muted">
                <TabsTrigger value="all">All Leads</TabsTrigger>
                <TabsTrigger value="hot">
                  Hot
                  <Badge className="ml-2 bg-rose-500">12</Badge>
                </TabsTrigger>
                <TabsTrigger value="warm">
                  Warm
                  <Badge className="ml-2 bg-amber-500">24</Badge>
                </TabsTrigger>
                <TabsTrigger value="cold">
                  Cold
                  <Badge className="ml-2 bg-blue-500">36</Badge>
                </TabsTrigger>
              </TabsList>

              <div className="flex flex-wrap gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search leads..."
                    className="pl-8"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="exhibition">Exhibition</SelectItem>
                    <SelectItem value="digital">Digital Ad</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <ArrowDownUp className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <LeadTable />
            </TabsContent>
            <TabsContent value="hot" className="mt-0">
              <LeadTable />
            </TabsContent>
            <TabsContent value="warm" className="mt-0">
              <LeadTable />
            </TabsContent>
            <TabsContent value="cold" className="mt-0">
              <LeadTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Leads;

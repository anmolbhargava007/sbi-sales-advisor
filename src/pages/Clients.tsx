
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Download, Star, Phone, Mail, Clock, PlusCircle } from 'lucide-react';

const clients = [
  {
    id: "1",
    name: "Rajesh Kumar",
    products: ["Home Loan", "Savings Account"],
    totalValue: "₹65L",
    status: "Active",
    lastContact: "2 days ago"
  },
  {
    id: "2",
    name: "Priya Sharma",
    products: ["Personal Loan", "Credit Card"],
    totalValue: "₹12L",
    status: "Active",
    lastContact: "1 week ago"
  },
  {
    id: "3",
    name: "Amit Patel",
    products: ["Business Loan"],
    totalValue: "₹35L",
    status: "Active",
    lastContact: "3 days ago"
  },
  {
    id: "4",
    name: "Sunita Reddy",
    products: ["Fixed Deposit", "Mutual Funds"],
    totalValue: "₹28L",
    status: "Inactive",
    lastContact: "1 month ago"
  },
  {
    id: "5",
    name: "Vinod Gupta",
    products: ["Home Loan", "Car Loan", "Savings Account"],
    totalValue: "₹95L",
    status: "Active",
    lastContact: "5 days ago"
  }
];

const ClientCard = ({ client }) => {
  const initials = client.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{client.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground space-x-2">
                <Clock className="h-3 w-3" />
                <span>{client.lastContact}</span>
              </div>
            </div>
          </div>
          <div>
            <Badge className={client.status === "Active" ? "bg-emerald-500" : "bg-gray-400"}>
              {client.status}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm font-medium">Products</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {client.products.map((product, index) => (
              <Badge key={index} variant="outline" className="bg-secondary/10">
                {product}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Total Value</p>
            <p className="font-bold">{client.totalValue}</p>
          </div>
          <div className="flex space-x-2">
            <Button size="icon" variant="outline">
              <Phone className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Clients = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Client Management</h1>
            <p className="text-muted-foreground">
              View and manage your client relationships
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Client
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle>Your Clients</CardTitle>
              <div className="flex flex-wrap gap-2">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search clients..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="grid">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clients.map((client) => (
                    <ClientCard key={client.id} client={client} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="table" className="mt-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Contact</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id}>
                          <TableCell className="font-medium">{client.name}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {client.products.map((product, index) => (
                                <Badge key={index} variant="outline" className="bg-secondary/10">
                                  {product}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>{client.totalValue}</TableCell>
                          <TableCell>
                            <Badge className={client.status === "Active" ? "bg-emerald-500" : "bg-gray-400"}>
                              {client.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{client.lastContact}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Star className="mr-1 h-3 w-3" />
                                Details
                              </Button>
                              <Button size="sm" variant="outline">
                                <Phone className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Clients;

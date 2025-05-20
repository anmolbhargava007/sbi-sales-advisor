
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown, PhoneCall, Mail } from "lucide-react";

const leads = [
  {
    id: "1",
    name: "Raj Sharma",
    company: "Tech Solutions Ltd",
    email: "raj.sharma@techsol.com",
    phone: "+91 98765 43210",
    status: "Hot",
    source: "Referral",
    lastContact: "2025-05-18"
  },
  {
    id: "2",
    name: "Priya Patel",
    company: "Global Innovations",
    email: "priya@globalinnovations.com",
    phone: "+91 87654 32109",
    status: "Warm",
    source: "Website",
    lastContact: "2025-05-15"
  },
  {
    id: "3",
    name: "Anil Kumar",
    company: "Stellar Corp",
    email: "anil@stellarcorp.com",
    phone: "+91 76543 21098",
    status: "Cold",
    source: "Exhibition",
    lastContact: "2025-05-10"
  },
  {
    id: "4",
    name: "Meera Reddy",
    company: "First Finance",
    email: "meera@firstfinance.com",
    phone: "+91 65432 10987",
    status: "Hot",
    source: "Digital Ad",
    lastContact: "2025-05-19"
  },
  {
    id: "5",
    name: "Vikram Singh",
    company: "Pinnacle Industries",
    email: "vikram@pinnacle.com",
    phone: "+91 54321 09876",
    status: "Warm",
    source: "Conference",
    lastContact: "2025-05-12"
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const variants: Record<string, string> = {
    Hot: "bg-rose-500 hover:bg-rose-500",
    Warm: "bg-amber-500 hover:bg-amber-500",
    Cold: "bg-blue-500 hover:bg-blue-500",
  };

  return (
    <Badge className={variants[status]}>
      {status}
    </Badge>
  );
};

const LeadTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center">
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Last Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{lead.name}</div>
                  <div className="text-sm text-muted-foreground">{lead.email}</div>
                </div>
              </TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>
                <StatusBadge status={lead.status} />
              </TableCell>
              <TableCell>{lead.source}</TableCell>
              <TableCell>{new Date(lead.lastContact).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" title="Call">
                    <PhoneCall className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Email">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="More">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeadTable;


import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, change, icon, className }: StatCardProps) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {change !== undefined && (
              <div className="flex items-center mt-1">
                {isPositive && (
                  <ArrowUpIcon className="h-4 w-4 text-emerald-500 mr-1" />
                )}
                {isNegative && (
                  <ArrowDownIcon className="h-4 w-4 text-rose-500 mr-1" />
                )}
                <span 
                  className={cn(
                    "text-xs font-medium",
                    isPositive ? "text-emerald-500" : "",
                    isNegative ? "text-rose-500" : "",
                    !isPositive && !isNegative ? "text-muted-foreground" : ""
                  )}
                >
                  {Math.abs(change)}% from last month
                </span>
              </div>
            )}
          </div>

          <div className="rounded-full p-2 bg-muted">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

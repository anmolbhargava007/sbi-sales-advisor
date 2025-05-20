
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Jan', sales: 4000, target: 2400 },
  { name: 'Feb', sales: 3000, target: 2400 },
  { name: 'Mar', sales: 2000, target: 2400 },
  { name: 'Apr', sales: 2780, target: 2400 },
  { name: 'May', sales: 1890, target: 2400 },
  { name: 'Jun', sales: 2390, target: 2400 },
  { name: 'Jul', sales: 3490, target: 2400 },
];

const PerformanceChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" />
              <Area type="monotone" dataKey="target" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary) / 0.1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;

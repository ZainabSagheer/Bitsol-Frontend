"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  BarChart3, 
  Briefcase, 
  GraduationCap, 
  MessageSquare,
  TrendingUp,
  Search,
  Bell,
  LogOut
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "User Management" },
  { icon: Briefcase, label: "Leads & CRM" },
  { icon: GraduationCap, label: "Course Manager" },
  { icon: FileText, label: "Blog & Content" },
  { icon: TrendingUp, label: "Finance" },
  { icon: MessageSquare, label: "Support" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { label: "Total Revenue", value: "$124,500", growth: "+12.5%" },
  { label: "Active Clients", value: "142", growth: "+4.2%" },
  { label: "Total Leads", value: "2,840", growth: "+18.3%" },
  { label: "Course Enrolls", value: "4,120", growth: "+7.1%" },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-[#050816] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A]/50 backdrop-blur-xl border-r border-white/5 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center font-bold text-brand-dark">B</div>
          <span className="text-2xl font-bold">ADMIN<span className="text-brand-cyan">.</span></span>
        </div>

        <nav className="flex-grow space-y-2">
          {sidebarLinks.map((link, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                link.active ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20" : "text-brand-muted hover:bg-white/5 hover:text-white"
              }`}
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-brand-muted hover:bg-destructive/10 hover:text-destructive transition-all mt-auto">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto p-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-1">System Overview</h1>
            <p className="text-brand-muted">Welcome back, Super Admin.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
              <input 
                placeholder="Search analytics..." 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-6 py-2 text-sm focus:outline-none focus:border-brand-cyan transition-all w-64"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center relative hover:bg-white/10 transition-all">
              <Bell className="w-5 h-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-brand-cyan rounded-full" />
            </button>
            <div className="w-12 h-12 rounded-full border-2 border-brand-cyan p-1">
              <img src="https://ui-avatars.com/api/?name=Admin&background=00D9FF&color=050816" className="w-full h-full rounded-full" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="bg-[#0F172A]/50 backdrop-blur-md border-white/5 border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-brand-muted">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-xs text-brand-cyan font-bold">{stat.growth} vs last month</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Charts Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 bg-[#0F172A]/50 backdrop-blur-md border-white/5 border h-[400px]">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-full pb-20">
               {/* Visual Mockup for Chart */}
               <div className="w-full flex items-end gap-3 px-10 h-full">
                  {[30, 45, 25, 60, 80, 55, 90, 70, 40, 85, 100, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className="flex-1 bg-gradient-to-t from-brand-cyan/20 to-brand-cyan rounded-t-lg"
                    />
                  ))}
               </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/5 border h-[400px]">
             <CardHeader>
                <CardTitle>Traffic Distribution</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-col gap-6 pt-10">
                {[
                  { label: "Search Engine", value: 45, color: "bg-brand-cyan" },
                  { label: "Social Media", value: 30, color: "bg-brand-purple" },
                  { label: "Direct", value: 25, color: "bg-brand-muted" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{item.label}</span>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
             </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-[#0F172A]/50 backdrop-blur-md border-white/5 border">
          <CardHeader>
            <CardTitle>Recent Project Activity</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan font-bold">P{i}</div>
                      <div>
                        <div className="font-bold">Project Neo-Sync v2.{i}</div>
                        <div className="text-xs text-brand-muted">Client: Cyber Systems Ltd. • Updated 2h ago</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-brand-cyan/20 text-brand-cyan border-0">In Progress</Badge>
                      <Button variant="ghost" size="sm">Details</Button>
                    </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

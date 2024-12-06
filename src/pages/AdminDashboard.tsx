import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Settings, FileText, Mail, Globe, Heart, 
  DollarSign, Calendar, BarChart3
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import ContentManager from "@/components/admin/ContentManager";
import DonationsManager from "@/components/admin/DonationsManager";
import VolunteersManager from "@/components/admin/VolunteersManager";
import { supabase } from "@/lib/supabase";

const AdminDashboard = () => {
  // Fetch dashboard stats
  const { data: dashboardStats = {
    totalDonations: 0,
    activeVolunteers: 0,
    totalProjects: 0,
    totalMessages: 0
  }, isLoading } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: async () => {
      try {
        // Fetch donations total - handle if table doesn't exist
        const donations = await supabase.from('donations').select('amount');
        const totalDonations = donations.data?.reduce((sum, d) => sum + d.amount, 0) || 0;

        // Count active volunteers - handle if table doesn't exist
        const volunteers = await supabase
          .from('volunteers')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'Active');
        const activeVolunteers = volunteers.count || 0;

        // Count total projects - handle if table doesn't exist
        const projects = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true });
        const totalProjects = projects.count || 0;

        // Count total messages - handle if table doesn't exist
        const messages = await supabase
          .from('messages')
          .select('*', { count: 'exact', head: true });
        const totalMessages = messages.count || 0;

        console.log('Dashboard stats fetched:', {
          totalDonations,
          activeVolunteers,
          totalProjects,
          totalMessages
        });

        return {
          totalDonations,
          activeVolunteers,
          totalProjects,
          totalMessages
        };
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        // Return default values if there's an error
        return {
          totalDonations: 0,
          activeVolunteers: 0,
          totalProjects: 0,
          totalMessages: 0
        };
      }
    }
  });

  const stats = [
    { 
      label: "Total Donations", 
      value: `$${dashboardStats.totalDonations.toLocaleString()}`, 
      icon: DollarSign, 
      color: "text-emerald-500" 
    },
    { 
      label: "Active Volunteers", 
      value: dashboardStats.activeVolunteers.toString(), 
      icon: Users, 
      color: "text-blue-500" 
    },
    { 
      label: "Projects", 
      value: dashboardStats.totalProjects.toString(), 
      icon: FileText, 
      color: "text-purple-500" 
    },
    { 
      label: "Messages", 
      value: dashboardStats.totalMessages.toString(), 
      icon: Mail, 
      color: "text-amber-500" 
    }
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-secondary/70">Manage your organization's content and operations</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary/70">{stat.label}</p>
                    <p className="text-2xl font-bold">{isLoading ? "..." : stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="content" className="space-y-4">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 h-auto gap-4">
            <TabsTrigger value="content" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FileText className="w-4 h-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="donations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <DollarSign className="w-4 h-4 mr-2" />
              Donations
            </TabsTrigger>
            <TabsTrigger value="volunteers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4 mr-2" />
              Volunteers
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            <ContentManager />
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            <DonationsManager />
          </TabsContent>

          <TabsContent value="volunteers" className="space-y-4">
            <VolunteersManager />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
              <p className="text-secondary/70">Analytics features coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <p className="text-secondary/70">Settings panel coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
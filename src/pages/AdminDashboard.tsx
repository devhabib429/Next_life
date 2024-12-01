import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Settings, FileText, Mail, Globe, Heart, 
  DollarSign, Calendar, BarChart3
} from "lucide-react";
import ContentManager from "@/components/admin/ContentManager";
import DonationsManager from "@/components/admin/DonationsManager";
import VolunteersManager from "@/components/admin/VolunteersManager";

const AdminDashboard = () => {
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
          {[
            { label: "Total Donations", value: "$25,430", icon: DollarSign, color: "text-emerald-500" },
            { label: "Active Volunteers", value: "142", icon: Users, color: "text-blue-500" },
            { label: "Projects", value: "23", icon: FileText, color: "text-purple-500" },
            { label: "Messages", value: "89", icon: Mail, color: "text-amber-500" }
          ].map((stat, index) => (
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
                    <p className="text-2xl font-bold">{stat.value}</p>
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
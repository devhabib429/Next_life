import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ioptegmxiynkjpxczyak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcHRlZ214aXlua2pweGN6eWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMzM2MDgsImV4cCI6MjA0ODcwOTYwOH0.KKENn8nZHPy5FaUBq0LT_5cCbMcdZWoZ2OgVtdvjvGs';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Volunteers
export async function fetchVolunteers() {
  const { data, error } = await supabase
    .from('volunteers')
    .select('*')
    .order('id');
  
  if (error) {
    console.error('Error fetching volunteers:', error);
    throw error;
  }
  return data;
}

export async function addVolunteer(volunteer: {
  name: string;
  email: string;
  role: string;
  status: string;
  phone: string;
  skills: string[];
  join_date: string;  // Changed from joinDate to join_date
}) {
  const { data, error } = await supabase
    .from('volunteers')
    .insert([{
      ...volunteer,
      join_date: volunteer.join_date  // Changed from joinDate to join_date
    }])
    .select();

  if (error) {
    console.error('Error adding volunteer:', error);
    throw error;
  }
  return data[0];
}

export async function updateVolunteerStatus(id: number, status: string) {
  const { error } = await supabase
    .from('volunteers')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Error updating volunteer status:', error);
    throw error;
  }
}

// Team Members
export async function fetchTeamMembers() {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('id');
  
  if (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
  return data;
}

export async function addTeamMember(member: { name: string; role: string; experience: string }) {
  console.log('Adding team member:', member);
  
  const { data, error } = await supabase
    .from('team_members')
    .insert([member])
    .select();

  if (error) {
    console.error('Error adding team member:', error);
    throw error;
  }
  return data[0];
}

export async function deleteTeamMember(id: number) {
  const { error } = await supabase
    .from('team_members')
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error('Error deleting team member:', error);
    throw error;
  }
}

// Project Stats
export async function fetchProjectStats() {
  const { data, error } = await supabase
    .from('project_stats')
    .select('*')
    .order('id');
  if (error) throw error;
  return data;
}

export async function updateProjectStat(id: number, stat: { label: string; value: string }) {
  const { data, error } = await supabase
    .from('project_stats')
    .update(stat)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data[0];
}

export async function addProjectStat(stat: { label: string; value: string }) {
  const { data, error } = await supabase
    .from('project_stats')
    .insert([stat])
    .select();
  if (error) throw error;
  return data[0];
}

export async function deleteProjectStat(id: number) {
  const { error } = await supabase
    .from('project_stats')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Projects
export async function fetchProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id');
  if (error) throw error;
  return data;
}

export async function addProject(project: {
  title: string;
  location: string;
  date: string;
  participants: string;
  description: string;
}) {
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select();
  if (error) throw error;
  return data[0];
}

export async function deleteProject(id: number) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Donor Stats
export async function fetchDonorStats() {
  const { data, error } = await supabase
    .from('donor_stats')
    .select('*')
    .order('id');
  if (error) throw error;
  return data;
}

export async function updateDonorStat(id: number, stat: { label: string; value: string }) {
  const { data, error } = await supabase
    .from('donor_stats')
    .update(stat)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data[0];
}

export async function addDonorStat(stat: { label: string; value: string }) {
  const { data, error } = await supabase
    .from('donor_stats')
    .insert([stat])
    .select();
  if (error) throw error;
  return data[0];
}

export async function deleteDonorStat(id: number) {
  const { error } = await supabase
    .from('donor_stats')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Addresses
export async function fetchAddresses() {
  const { data, error } = await supabase
    .from('addresses')
    .select('*')
    .order('id');
  if (error) throw error;
  return data;
}

export async function addAddress(address: { title: string; details: string[] }) {
  const { data, error } = await supabase
    .from('addresses')
    .insert([address])
    .select();
  if (error) throw error;
  return data[0];
}

export async function deleteAddress(id: number) {
  const { error } = await supabase
    .from('addresses')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Dashboard Stats
export async function fetchDashboardStats() {
  const [donations, volunteers, projects, messages] = await Promise.all([
    supabase.from('donations').select('amount'),
    supabase.from('volunteers').select('*', { count: 'exact', head: true }).eq('status', 'Active'),
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('messages').select('*', { count: 'exact', head: true })
  ]);

  return {
    totalDonations: donations.data?.reduce((sum, d) => sum + d.amount, 0) || 0,
    activeVolunteers: volunteers.count || 0,
    totalProjects: projects.count || 0,
    totalMessages: messages.count || 0
  };
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ioptegmxiynkjpxczyak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcHRlZ214aXlua2pweGN6eWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxMzM2MDgsImV4cCI6MjA0ODcwOTYwOH0.KKENn8nZHPy5FaUBq0LT_5cCbMcdZWoZ2OgVtdvjvGs';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Team Members
export async function fetchTeamMembers() {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('id');
  if (error) throw error;
  return data;
}

export async function addTeamMember(member: { name: string; role: string; experience: string }) {
  // Add console.log to debug the input data
  console.log('Adding team member:', member);
  
  const { data, error } = await supabase
    .from('team_members')
    .insert([{
      name: member.name,
      role: member.role,
      experience: member.experience
    }])
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
  if (error) throw error;
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


import { supabase } from '../supabase';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('id');
  
  if (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
  return data || [];
}

export async function addTeamMember(member: Omit<TeamMember, 'id'>): Promise<TeamMember> {
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

export async function deleteTeamMember(id: number): Promise<void> {
  const { error } = await supabase
    .from('team_members')
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error('Error deleting team member:', error);
    throw error;
  }
}
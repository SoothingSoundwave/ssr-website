// database.types.ts
// Path: /src/types/database.types.ts

/**
 * Database type definitions for Supabase
 * These types will be auto-generated once Supabase is set up
 * For now, we'll define the basic structure manually
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          subject: string | null
          message: string
          status: 'new' | 'read' | 'replied'
          ip_address: string | null
          user_agent: string | null
          submitted_at: string
          read_at: string | null
          replied_at: string | null
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject?: string | null
          message: string
          status?: 'new' | 'read' | 'replied'
          ip_address?: string | null
          user_agent?: string | null
          submitted_at?: string
          read_at?: string | null
          replied_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string | null
          message?: string
          status?: 'new' | 'read' | 'replied'
          ip_address?: string | null
          user_agent?: string | null
          submitted_at?: string
          read_at?: string | null
          replied_at?: string | null
        }
      }
      newsletter_signups: {
        Row: {
          id: string
          email: string
          name: string | null
          status: 'active' | 'unsubscribed'
          source: string | null
          ip_address: string | null
          signed_up_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          status?: 'active' | 'unsubscribed'
          source?: string | null
          ip_address?: string | null
          signed_up_at?: string
          unsubscribed_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          status?: 'active' | 'unsubscribed'
          source?: string | null
          ip_address?: string | null
          signed_up_at?: string
          unsubscribed_at?: string | null
        }
      }
      vinyl_orders: {
        Row: {
          id: string
          order_number: string
          customer_name: string
          customer_email: string
          customer_phone: string | null
          shipping_address: Json | null
          vinyl_size: '7"' | '10"' | '12"'
          vinyl_color: string | null
          vinyl_speed: string | null
          tracks: Json
          total_duration: number | null
          artwork_url: string | null
          artwork_type: string | null
          template_id: string | null
          base_price: number | null
          shipping_cost: number | null
          total_price: number | null
          status: 'pending' | 'review' | 'approved' | 'payment_received' | 'processing' | 'shipped' | 'completed' | 'cancelled'
          customer_notes: string | null
          admin_notes: string | null
          elastic_stage_order_id: string | null
          tracking_number: string | null
          created_at: string
          approved_at: string | null
          shipped_at: string | null
          completed_at: string | null
        }
        Insert: {
          id?: string
          order_number?: string
          customer_name: string
          customer_email: string
          customer_phone?: string | null
          shipping_address?: Json | null
          vinyl_size: '7"' | '10"' | '12"'
          vinyl_color?: string | null
          vinyl_speed?: string | null
          tracks: Json
          total_duration?: number | null
          artwork_url?: string | null
          artwork_type?: string | null
          template_id?: string | null
          base_price?: number | null
          shipping_cost?: number | null
          total_price?: number | null
          status?: 'pending' | 'review' | 'approved' | 'payment_received' | 'processing' | 'shipped' | 'completed' | 'cancelled'
          customer_notes?: string | null
          admin_notes?: string | null
          elastic_stage_order_id?: string | null
          tracking_number?: string | null
          created_at?: string
          approved_at?: string | null
          shipped_at?: string | null
          completed_at?: string | null
        }
        Update: {
          id?: string
          order_number?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string | null
          shipping_address?: Json | null
          vinyl_size?: '7"' | '10"' | '12"'
          vinyl_color?: string | null
          vinyl_speed?: string | null
          tracks?: Json
          total_duration?: number | null
          artwork_url?: string | null
          artwork_type?: string | null
          template_id?: string | null
          base_price?: number | null
          shipping_cost?: number | null
          total_price?: number | null
          status?: 'pending' | 'review' | 'approved' | 'payment_received' | 'processing' | 'shipped' | 'completed' | 'cancelled'
          customer_notes?: string | null
          admin_notes?: string | null
          elastic_stage_order_id?: string | null
          tracking_number?: string | null
          created_at?: string
          approved_at?: string | null
          shipped_at?: string | null
          completed_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
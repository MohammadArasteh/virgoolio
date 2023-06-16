export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          comment_id: number
          created_at: string | null
          created_by: string | null
          text: string | null
        }
        Insert: {
          comment_id?: number
          created_at?: string | null
          created_by?: string | null
          text?: string | null
        }
        Update: {
          comment_id?: number
          created_at?: string | null
          created_by?: string | null
          text?: string | null
        }
        Relationships: []
      }
      followings: {
        Row: {
          created_at: string | null
          from: number | null
          id: number
          to: number | null
        }
        Insert: {
          created_at?: string | null
          from?: number | null
          id?: number
          to?: number | null
        }
        Update: {
          created_at?: string | null
          from?: number | null
          id?: number
          to?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "followings_from_fkey"
            columns: ["from"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "followings_to_fkey"
            columns: ["to"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      post_instances: {
        Row: {
          instance_id: number
          is_liked: boolean | null
          is_saved: boolean | null
          post_id: number | null
          user_id: number | null
        }
        Insert: {
          instance_id?: number
          is_liked?: boolean | null
          is_saved?: boolean | null
          post_id?: number | null
          user_id?: number | null
        }
        Update: {
          instance_id?: number
          is_liked?: boolean | null
          is_saved?: boolean | null
          post_id?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          body: string | null
          comment_ids: string[] | null
          created_at: string | null
          created_by: string
          edited_at: string | null
          liked_by: string[] | null
          post_id: number
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          topic: string
        }
        Insert: {
          body?: string | null
          comment_ids?: string[] | null
          created_at?: string | null
          created_by: string
          edited_at?: string | null
          liked_by?: string[] | null
          post_id?: number
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          topic: string
        }
        Update: {
          body?: string | null
          comment_ids?: string[] | null
          created_at?: string | null
          created_by?: string
          edited_at?: string | null
          liked_by?: string[] | null
          post_id?: number
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          topic?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          description: string | null
          first_name: string | null
          last_name: string | null
          password: string
          profile_url: string | null
          user_id: number
          user_name: string | null
        }
        Insert: {
          description?: string | null
          first_name?: string | null
          last_name?: string | null
          password: string
          profile_url?: string | null
          user_id?: number
          user_name?: string | null
        }
        Update: {
          description?: string | null
          first_name?: string | null
          last_name?: string | null
          password?: string
          profile_url?: string | null
          user_id?: number
          user_name?: string | null
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

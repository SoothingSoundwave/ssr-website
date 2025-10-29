// server.ts
// Path: /src/lib/supabase/server.ts

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '@/types/database.types'

/**
 * Supabase client for use in Server Components and API Routes
 * This client runs on the server and can access user session via cookies
 * 
 * @example
 * import { createServerSupabaseClient } from '@/lib/supabase/server'
 * 
 * const supabase = createServerSupabaseClient()
 * const { data, error } = await supabase
 *   .from('contact_submissions')
 *   .select('*')
 */
export function createServerSupabaseClient() {
  return createServerComponentClient<Database>({
    cookies,
  })
}
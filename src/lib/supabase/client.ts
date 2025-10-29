// client.ts
// Path: /src/lib/supabase/client.ts

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/types/database.types'

/**
 * Supabase client for use in Client Components
 * This client runs in the browser and has access to user session
 * 
 * @example
 * import { supabase } from '@/lib/supabase/client'
 * 
 * const { data, error } = await supabase
 *   .from('newsletter_signups')
 *   .select('*')
 */
export const supabase = createClientComponentClient<Database>()
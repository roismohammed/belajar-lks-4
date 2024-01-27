
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://samercrvtjuyyejobmln.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbWVyY3J2dGp1eXllam9ibWxuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTQwNTgxMiwiZXhwIjoyMDIwOTgxODEyfQ.B3SnCimCpSEJcG8FuneMvVcl4zstrI4ZpCEPkexvL6U'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
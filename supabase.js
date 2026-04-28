// utils/supabase.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;https://ttnllyjrjgdyllylpjts.supabase.co
const supabaseKey = process.env.SUPABASE_KEY;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bmxseWpyamdkeWxseWxwanRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1Mjk1ODEsImV4cCI6MjA5MjEwNTU4MX0.48N---TSkIFiOcqUGqvY_NV7vGjqpMivPCvGPzYM0XQ
const supabase = createClient(supabaseUrl, supabaseKey

module.exports = supabase;

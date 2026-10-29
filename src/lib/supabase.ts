import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase para uso EXCLUSIVO en el servidor (API routes).
 * Usa la SERVICE ROLE KEY, que nunca debe exponerse al navegador.
 *
 * Variables de entorno necesarias (configurar en Vercel):
 *   - SUPABASE_URL
 *   - SUPABASE_SERVICE_ROLE_KEY
 */
let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Si aún no se configuran las llaves, devolvemos null para degradar
  // con elegancia en vez de romper el build o el request.
  if (!url || !serviceKey) return null;

  if (cached) return cached;

  cached = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

/**
 * Notificación de lead nuevo por correo, usando Resend (https://resend.com).
 *
 * Variables de entorno (configurar en Vercel cuando se quiera activar):
 *   - RESEND_API_KEY     → API key de Resend (empieza con "re_")
 *   - LEAD_NOTIFY_EMAIL  → correo que RECIBE el aviso (el del abogado)
 *   - LEAD_FROM_EMAIL    → remitente (opcional). Debe ser un dominio verificado
 *                          en Resend. Por defecto usa el de pruebas de Resend.
 *
 * Si falta RESEND_API_KEY o LEAD_NOTIFY_EMAIL, la función no hace nada
 * (la captura del lead sigue funcionando igual).
 */

const currency = (v?: number | null) =>
  typeof v === "number"
    ? new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(v)
    : "-";

export type LeadNotification = {
  nombre: string;
  telefono: string;
  email?: string | null;
  motivo?: string | null;
  montoEstimado?: number | null;
  salarioMensual?: number | null;
  antiguedadAnios?: number | null;
  origen?: string | null;
};

export async function sendLeadNotification(lead: LeadNotification): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "Cuatecontzi Leads <onboarding@resend.dev>";

  if (!apiKey || !to) return; // notificación no configurada todavía

  const waLink = `https://wa.me/${lead.telefono.replace(/\D/g, "")}`;
  const subject = `🔔 Nuevo lead: ${lead.nombre} (${currency(lead.montoEstimado)})`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
      <div style="background:#002B5C;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
        <h2 style="margin:0;font-size:18px">Nuevo lead desde el sitio</h2>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 8px 8px">
        <p style="margin:0 0 16px"><strong>${lead.nombre}</strong> acaba de dejar sus datos en la calculadora.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 0;color:#64748b">Teléfono</td><td style="padding:6px 0;text-align:right"><a href="tel:${lead.telefono}">${lead.telefono}</a></td></tr>
          <tr><td style="padding:6px 0;color:#64748b">Correo</td><td style="padding:6px 0;text-align:right">${lead.email || "-"}</td></tr>
          <tr><td style="padding:6px 0;color:#64748b">Motivo</td><td style="padding:6px 0;text-align:right">${lead.motivo || "-"}</td></tr>
          <tr><td style="padding:6px 0;color:#64748b">Salario mensual</td><td style="padding:6px 0;text-align:right">${currency(lead.salarioMensual)}</td></tr>
          <tr><td style="padding:6px 0;color:#64748b">Antigüedad</td><td style="padding:6px 0;text-align:right">${lead.antiguedadAnios ?? "-"} años</td></tr>
          <tr><td style="padding:6px 0;color:#64748b">Finiquito estimado</td><td style="padding:6px 0;text-align:right;font-weight:bold;color:#E31937">${currency(lead.montoEstimado)}</td></tr>
        </table>
        <a href="${waLink}" style="display:inline-block;margin-top:20px;background:#25D366;color:#fff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold">Escribir por WhatsApp</a>
      </div>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });
    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      console.error("[LEAD] Error al enviar notificación por correo:", res.status, msg);
    }
  } catch (err) {
    console.error("[LEAD] Fallo de red al notificar:", err instanceof Error ? err.message : err);
  }
}

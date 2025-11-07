// Static build fix:
// Diese API wird aktuell nicht benötigt (Kontakt läuft extern).
// Markieren als Edge-Runtime und hart deaktivieren, damit der Build nicht blockiert.
export const runtime = 'edge';

export async function POST() {
  return new Response(
    JSON.stringify({ ok: false, error: 'sendMail API is currently disabled' }),
    { status: 410, headers: { 'content-type': 'application/json; charset=utf-8' } }
  );
}

/* ORIGINAL-IMPLEMENTIERUNG BLEIBT UNTEN AUSKOMMENTIERT ODER WIRD SPÄTER DURCH EDGE-KOMPATIBLES MAILING ERSETZT.
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: body.name?.toString().trim() ?? "",
      email: body.email?.toString().trim() ?? "",
      phone: body.phone?.toString().trim() ?? "",
      message: body.message?.toString().trim() ?? "",
      honeypot: body.honeypot?.toString().trim(),
    };

    if (payload.honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      return new Response(
        JSON.stringify({ error: "required_fields_missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!isValidEmail(payload.email)) {
      return new Response(JSON.stringify({ error: "invalid_email" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.SMTP_FROM || "no-reply@blooddiamond-tattoo.de";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return new Response(JSON.stringify({ error: "configuration_error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: ["pforzheim@blooddiamond-tattoo.de"],
        subject: "Neue Termin-Anfrage – Blood Diamond Tattoo Ink. Pforzheim",
        text: `Name: ${payload.name}\nE-Mail: ${payload.email}\nTelefon: ${payload.phone}\n\nNachricht:\n${payload.message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error", errorText);
      return new Response(JSON.stringify({ error: "send_failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Unhandled sendMail error", error);
    return new Response(JSON.stringify({ error: "unexpected_error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
*/
// ... ggf. vorhandener Code hier entfernen/auskommentieren ...

import { NextRequest, NextResponse } from "next/server";

const CALLBACK_URL = process.env.CALLBACK_URL;

export async function POST(request: NextRequest) {
  if (!CALLBACK_URL) {
    return NextResponse.json(
      { error: "CALLBACK_URL not configured" },
      { status: 500 }
    );
  }
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip')
  try {
    const requestBody = await request.json();
    const { message, sessionId } = requestBody;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const from = sessionId || "anonymous";
    const now = new Date().toISOString();
    const webhookHeaders = {
      host: "n8n.zeedu.dev",
      baggage: "",
      traceparent: "",
      via: "2.0 Caddy",
      "x-forwarded-for": ip,
      "x-forwarded-host": "n8n.zeedu.dev",
      "x-forwarded-proto": "https",
      "x-webhook-endpoint-id": "id",
      "ycloud-signature": "",
    };

    const webhookBody = {
      id: "",
      type: "whatsapp.inbound_message.received",
      apiVersion: "v2",
      createTime: now,
      whatsappInboundMessage: {
        id: "",
        wamid: "",
        wabaId: "",
        from: from,
        customerProfile: {
          name: "Test",
        },
        to: "test",
        sendTime: now,
        type: "text",
        text: {
          body: message,
        },
        context: {
          from: from,
        },
      },
    };
    console.log(CALLBACK_URL, webhookBody, webhookHeaders)

    const callbackResponse = await fetch(CALLBACK_URL, {
      method: "POST",
      headers: { ...webhookHeaders, ...request.headers, "content-type": "application/json" },
      body: JSON.stringify(webhookBody),
    });

    const responseData = await callbackResponse.json();

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}




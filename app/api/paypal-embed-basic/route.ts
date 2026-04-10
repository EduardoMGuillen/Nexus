import { NextResponse } from "next/server";

const DEFAULT_CLIENT_ID =
  "BAAATCJKuMqq47cJXnjjNUDzmyHN_jjlGZfpA4JeTjFq0zNKTG4Iw6ZwLT48w13UIcbb31lRTZdTfcd2Vw";
const DEFAULT_BUTTON_ID = "46XFEZ7X22HD8";
const CONTAINER_ID = "paypal-container-46XFEZ7X22HD8";

/**
 * Página mínima para PayPal Hosted Buttons (otro client-id que el de suscripciones).
 * Pensada para cargarse en un iframe desde /paginas-web.
 */
export async function GET() {
  const clientId =
    process.env.NEXT_PUBLIC_PAYPAL_HOSTED_CLIENT_ID ?? DEFAULT_CLIENT_ID;
  const buttonId =
    process.env.NEXT_PUBLIC_PAYPAL_HOSTED_BUTTON_ID ?? DEFAULT_BUTTON_ID;

  const sdkUrl = new URL("https://www.paypal.com/sdk/js");
  sdkUrl.searchParams.set("client-id", clientId);
  sdkUrl.searchParams.set("components", "hosted-buttons");
  sdkUrl.searchParams.set("disable-funding", "venmo");
  sdkUrl.searchParams.set("currency", "USD");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>PayPal</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 12px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0f172a;
    }
    #${CONTAINER_ID} { width: 100%; max-width: 400px; }
  </style>
</head>
<body>
  <div id="${CONTAINER_ID}"></div>
  <script>
    (function () {
      var s = document.createElement("script");
      s.src = ${JSON.stringify(sdkUrl.toString())};
      s.crossOrigin = "anonymous";
      s.async = true;
      s.onload = function () {
        if (window.paypal && window.paypal.HostedButtons) {
          window.paypal.HostedButtons({ hostedButtonId: ${JSON.stringify(buttonId)} })
            .render("#${CONTAINER_ID}");
        }
      };
      s.onerror = function () {
        document.getElementById("${CONTAINER_ID}").innerHTML =
          "<p style=color:#f87171;font-family:system-ui,sans-serif;font-size:14px;text-align:center>Could not load PayPal.</p>";
      };
      document.body.appendChild(s);
    })();
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Frame-Options": "SAMEORIGIN",
      "Cache-Control": "no-store",
    },
  });
}

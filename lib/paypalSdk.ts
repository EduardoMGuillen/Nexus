/** Client ID público (mismo que suscripciones en /paginas-web). */
export const PAYPAL_CLIENT_ID =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ??
  "AT7NZ1UbTDfNe_QyHkzIncEcsKARjMSEnPCFwFKMvAyiWDX3w5wrBtWlDFMn7nWTEXAsvdJBUFnYTBw7";

/**
 * Una sola carga del SDK: checkout (pago único) + suscripciones en la misma vista.
 * currency + vault; sin intent fijo en la URL para permitir ambos flujos.
 */
export const PAYPAL_SDK_SRC = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
  PAYPAL_CLIENT_ID
)}&currency=USD&vault=true`;

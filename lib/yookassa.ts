export function getYooKassaAuth() {
  const shopId = process.env.YOOKASSA_SHOP_ID
  const secretKey = process.env.YOOKASSA_SECRET_KEY

  if (!shopId || !secretKey) {
    throw new Error('YooKassa credentials are not configured')
  }

  return { username: shopId, password: secretKey }
}

export function getPaymentReturnUrl() {
  return (
    process.env.PAYMENT_RETURN_URL ??
    `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/payment-success`
  )
}

import axios from 'axios'
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { getAuthRouteData } from '@/lib/utils/api-routes'
import { getPaymentReturnUrl, getYooKassaAuth } from '@/lib/yookassa'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { validatedTokenResult, reqBody } = await getAuthRouteData(
      clientPromise,
      req
    )

    if (validatedTokenResult.status !== 200) {
      return NextResponse.json(validatedTokenResult)
    }

    const { data } = await axios({
      method: 'post',
      url: 'https://api.yookassa.ru/v3/payments',
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': Date.now(),
      },
      auth: getYooKassaAuth(),
      data: {
        amount: {
          value: reqBody.amount,
          currency: 'RUB',
        },
        confirmation: {
          type: 'redirect',
          return_url: getPaymentReturnUrl(),
        },
        capture: true,
        description: reqBody.description,
        metadata: reqBody.metadata,
      },
    })

    return NextResponse.json({ result: data })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

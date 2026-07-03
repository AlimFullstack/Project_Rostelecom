import axios from 'axios'
import { NextResponse } from 'next/server'
import { getYooKassaAuth } from '@/lib/yookassa'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()

    const { data } = await axios({
      method: 'get',
      url: `https://api.yookassa.ru/v3/payments/${reqBody.paymentId}`,
      auth: getYooKassaAuth(),
    })

    return NextResponse.json({ result: data })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

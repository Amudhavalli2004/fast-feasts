import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { orderId } = params

  const order = await prisma.orders.findUnique({
    where: {
      id: orderId,
    },
  })

  if (order) {

    await prisma.orders.update({
      where: {
        id: orderId,
      },
      data: { status:"paid" },
    })

    return new NextResponse(
      JSON.stringify({message:'Payment successful'}),
      { status: 200 }
    )
  }
  return new NextResponse(JSON.stringify({ message: 'Order not found!' }), {
    status: 404,
  })
}

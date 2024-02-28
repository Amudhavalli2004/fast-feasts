import { prisma } from '@/utils/connect'
import { NextResponse } from 'next/server'

export const PUT = async ({ params }: { params: { orderId: string } }) => {
  const { orderId } = params

  try {
    await prisma.orders.update({
      where: {
        id:orderId,
      },
      data: { status: 'Being prepared!' },
    })
    return new NextResponse(
      JSON.stringify({ message: 'Order has been updated' }),
      { status: 200 }
    )
  } catch (err) {
    console.log(err)
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    )
  }
}

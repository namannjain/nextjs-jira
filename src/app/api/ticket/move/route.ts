import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
		const body = await request.json();

		const { boardId, position, boardColumnId, ticketId } = body;

		const ticketData = await prisma.boardTicket.update({
			where: {
				id: ticketId
			},
			data: {
				boardId,
				position,
				boardColumnId
			}
		})

		return Response.json(
			{ data: ticketData },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: { message: "Something went wrong" } },
      { status: 500 }
    );
  }
}

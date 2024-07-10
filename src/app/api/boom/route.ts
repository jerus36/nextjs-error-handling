import { Postpone } from "next/dist/server/app-render/dynamic-rendering"

export async function POST(req:Request, res:Response) {
    const {message} = await req.json()
    throw new Error(`Boom! ${message}`)
}
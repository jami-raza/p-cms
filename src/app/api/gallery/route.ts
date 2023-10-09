import { Resource, cloudinaryImages } from "@/app/lib/cloudinaryResources";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const res = await cloudinaryImages()
    const data = await res.json()

    if (res?.ok) {
        console.log(data, "DATA")
        return Response.json({ data })
    } else {
        return new NextResponse(JSON.stringify(data), {
            status: res.status,
            headers: { "Content-Type": "application/json" },
        });
    }
}
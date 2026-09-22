import { NextResponse } from "next/server";

const API_URL = process.env.PLANCITY_API_URL ?? "http://localhost:3001";

export async function GET()
    const res = await fetch(
import { NextResponse } from 'next/server';
import { db } from '@/libs/db';

export async function POST(request) {
    const data = await request.json();  
     

    return NextResponse.json("Login success");
}  
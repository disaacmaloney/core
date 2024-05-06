import { NextResponse } from 'next/server';
import { connectionDb } from '@/libs/db';

export async function POST(request) { 
    try{
        const data = await request.json(); 
        const pool = await connectionDb();

        const result = await pool.request()
            .query('SELECT * FROM ROL_ROLE');

        console.log(result.recordset);

        await pool.close();
    }
    catch(err){
        console.log(err);
    }
     

    
    
}  
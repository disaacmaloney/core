//LIBREARIA
import { NextResponse } from 'next/server';

//COMPONENTS
import { connectionDb } from '../../../../libs/db';

export async function POST(request) { 
    try{
        const data = await request.json();
        const pool = await connectionDb();
        var query = `UPDATE USE_USERS 
        SET USE_STATE = IIF(USE_STATE = '1', 2, 1)
        WHERE USER_ID = '${data.user_Id}' 

        SELECT 'TRUE' responseResult`;

        const result = await pool.request()
            .query(query);

        let responseResult = result.recordset

        await pool.close();
        return NextResponse.json(responseResult);
    }
    catch(err){
        console.log(err);
    }      
}  
//LIBREARIA
import { NextResponse } from 'next/server';

//COMPONENTS
import { connectionDb } from '../../../../libs/db';

export async function POST(request) { 
    try{
        const data = await request.json();
        const pool = await connectionDb();
        var query = `UPDATE ROL_ROLE 
        SET ROL_STATE = IIF(ROL_STATE = '1', 2, 1)
        WHERE ROLE_ID = '${data.rol_Id}'

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
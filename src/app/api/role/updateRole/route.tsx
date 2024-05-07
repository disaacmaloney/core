//LIBREARIA
import { NextResponse } from 'next/server';

//COMPONENTS
import { connectionDb } from '../../../../libs/db';

export async function POST(request) { 
    try{
        const data = await request.json();
        const pool = await connectionDb();
        var query = `IF (SELECT COUNT(*) FROM ROL_ROLE WHERE ROL_NAME = UPPER(TRIM('${data.rol_Name}'))) = 0
        BEGIN 
            UPDATE ROL_ROLE 
            SET ROL_NAME = UPPER('${data.rol_Name}') 
            WHERE ROLE_ID = ${data.rol_Id}
            SELECT 'TRUE' responseResult
        END
        ELSE
        BEGIN 
            SELECT 'FLASE' responseResult
        END`;
        console.log(query);

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
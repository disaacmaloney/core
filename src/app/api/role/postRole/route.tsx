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
            INSERT INTO ROL_ROLE (ROL_NAME)
            SELECT UPPER('${data.rol_Name}') 
            SELECT 'TRUE' responseResult
        END
        ELSE
        BEGIN 
            SELECT 'FLASE' responseResult
        END`;

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
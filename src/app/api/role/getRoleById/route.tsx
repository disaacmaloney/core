//LIBREARIA
import { NextResponse } from 'next/server';

//COMPONENTS
import { connectionDb } from '../../../../libs/db';

//MODELS
import { Role } from '../../../../models/role';
import { Status } from '../../../../models/general';

export async function POST(request) { 
    try{
        const data = await request.json();
        const pool = await connectionDb();
        var query = `SELECT ROLE_ID, ROL_NAME, ROL_STATE ROL_STATE_ID, IIF(ROL_STATE = '1', 'ACTIVO', 'SUSPENDIDO') ROL_STATE_NAME FROM ROL_ROLE WHERE 1=1`;

        if (!isNaN(parseInt(data.rol_Id))) 
            query += ` AND ROLE_ID = ${data.rol_Id} `;
        else if (data.rol_Name.trim() )
            query += ` AND ROL_NAME = '${data.rol_Name}' `;
        else if (!isNaN(parseInt(data.rol_State.id)))
            query += ` AND ROL_STATE = ${data.rol_State.id} `;

        const result = await pool.request()
            .query(query);

        let rolesLst: Role[] = [];

        if(result.recordset){
            rolesLst = result.recordset.map((items) => {
                let status: Status = {
                    id: items.ROL_STATE_ID,
                    name: items.ROL_STATE_NAME
                }

                let role: Role = {
                    rol_Id: items.ROLE_ID,
                    rol_Name: items.ROL_NAME,
                    rol_State: status
                }
                return role;               
            });
        }

        await pool.close();
        return NextResponse.json(rolesLst);
    }
    catch(err){
        console.log(err);
    }      
}  
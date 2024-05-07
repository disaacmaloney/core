//LIBREARIA
import { NextResponse } from 'next/server';

//COMPONENTS
import { connectionDb } from '../../../../libs/db';

//MODELS
import { Role } from '../../../../models/role';
import { Status } from '../../../../models/general';

export async function POST() { 
    try{
        const pool = await connectionDb();

        const result = await pool.request()
            .query("SELECT ROLE_ID, ROL_NAME, ROL_STATE ROL_STATE_ID, IIF(ROL_STATE = '1', 'ACTIVO', 'SUSPENDIDO') ROL_STATE_NAME FROM ROL_ROLE");

        let rolesLst: Role[] = [];

        if(result.recordset){
            rolesLst = result.recordset.map((items) => {
                let status: Status = {
                    id: items.ROL_STATE_ID,
                    name: items.ROL_STATE_NAME
                }

                const role: Role = {
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
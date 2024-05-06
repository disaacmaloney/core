import { NextResponse } from 'next/server';
import { connectionDb } from './../../../libs/db';
import { user } from './../../../models/user';
import { hashPassword } from './../../../components/login/login';

export async function POST(request) {
    try{
        console.log(request)
        const data = await request.json(); 
        const pool = await connectionDb();

        const result = await pool.request()
            .input('USE_USERNAME', data.username)
            .input('USE_PASSWORD', await hashPassword(data.password))
            .query('SELECT USER_ID FROM USE_USERS US WHERE US.USE_USERNAME = @USE_USERNAME AND USE_PASSWORD = @USE_PASSWORD AND USE_STATE = 1');
        
        console.log('hashPassword', await hashPassword(data.password));
        console.log('hashPassword', data.password);

        for(const row of result.recordset){
            console.log(row.USER_ID);            
        }

        console.log(result.recordset);

        await pool.close();
        
        return NextResponse.json(result.recordset);
    }
    catch(err){
        console.log(err);
    }
}  

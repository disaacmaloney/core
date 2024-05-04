"use client";
import  { useForm } from 'react-hook-form';

function LoginPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return(  
        <div className='flex h-screen justify-center items-center'>
            <div
                className='grid gap-6 mb-6 grid-cols-1 p-4 border-2 sm:w-5/6 md:w-2/4 lg:w-5/6 xl:w-1/3 bg-gray-50 dark:bg-gray-800 border-white dark:border-gray-700 shadow-md rounded-md'>
                <h2
                    className='text-center text-2xl font-bold'>Iniciar sesión</h2>
                <form action="" onSubmit={onSubmit}>
                    <div className='pb-4'>
                        <label htmlFor="form_username"
                            className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Usuario</label>
                        <input 
                            type="text" 
                            placeholder="Usuario"
                            id='form_username'
                            className='block bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder-gray-400 text-md rounded-lg w-full p-2.5 focus:ring-2 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500  focus:border-blue-500  dark:focus:border-blue-500'  
                            {...register("username",{ 
                                require: true
                            })}
                        />
                    </div>
                    <div className='pb-4'>
                        <label htmlFor="form_password"
                            className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Contraseña</label>
                        <input 
                            type="password" 
                            id='form_password'
                            placeholder="Contraseña"
                            className='block bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:placeholder-gray-400 text-md rounded-lg w-full p-2.5 focus:ring-2 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-500  focus:border-blue-500  dark:focus:border-blue-500'                        
                            {...register("password",{ 
                                require: true
                            })}
                        />
                    </div>
                    <div className="flex items-start mb-6 pb-4">
                        <label for="remember" className="ms-2 text-md font-medium text-gray-900 dark:text-white pr-2">Recordar usuario</label>
                        <div className="flex items-center h-5">
                            <input id="remember" 
                                type="checkbox" 
                                {...register("check",{ 
                                    require: true
                                })}
                                value="" 
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                    </div>
                    <div className='pb-4'>
                        <button type="submit"
                            className="border-2 text-blue-600 dark:text-white hover:text-white hover:bg-blue-600 border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-center w-full font-bold py-2.5" >
                        Ingresar</button>  
                    </div>          
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
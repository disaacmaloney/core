"use client";
import  { useForm } from 'react-hook-form';
import { alertError } from '@/components/alert';

export default function LoginPage() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border-t-8 border-blue-700 rounded-lg">
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Iniciar sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="form_username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                <input 
                                    type="text" 
                                    name="form_username" id="form_username" 
                                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:outline-none focus:border-blue-600  dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500  text-gray-900 dark:text-white sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" 
                                    placeholder="Usuario"
                                    {...register("username",{ 
                                        required: {
                                            value: true,
                                            message: 'El usuario es requerido'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'El usuario debe tener al menos 5 caracteres'
                                        }                                
                                    })} />
                                { errors.username ? alertError(errors.username.message): null }
                            </div>
                            <div>
                                <label 
                                    htmlFor="form_password" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password" name="form_password" id="form_password" placeholder="Contraseña" className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:outline-none focus:border-blue-600  dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500  text-gray-900 dark:text-white sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" 
                                {...register("password",{ 
                                    required: {
                                        value: true,
                                        message: 'La contraseña es requerida'
                                    },                            
                                    minLength: {
                                        value: 8,
                                        message: 'La contraseña debe tener al menos 8 caracteres'
                                    }
                                })} />
                                { errors.password ? alertError(errors.password.message): null }
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                        {...register("check")}>

                                        </input>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordar usuario</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="border-2 border-blue-600 text-blue-600 dark:text-white hover:text-white  w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingresar</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
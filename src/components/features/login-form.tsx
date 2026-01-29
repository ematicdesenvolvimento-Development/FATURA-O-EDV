'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from "react-router";

import { loginSchema, type LoginFormData } from '../../schemas/login-schemas';

//import img
import LogoImg from "../../assets/img/logo-1.png"

export function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            nome: "",
            senha: "",
            lembrar: false,
        }
    });

    const onSubmit = async (data: LoginFormData) => {
        console.log(data)
    };

    return (
        <div className="w-full max-w-lg rounded-xl bg-white p-12 shadow-sm">
            <div className="mb-12">
                <img src={LogoImg} alt="logo +Faturas" className='w-36' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="nome" className="label-input">
                        Nome
                    </label>
                    <input
                        id="nome"
                        type="text"
                        placeholder=""
                        {...register('nome')}
                        className="input"
                    />
                    {errors.nome && (
                        <p className="mt-2 text-sm text-red-600">{errors.nome.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="senha" className="label-input">
                        Senha
                    </label>
                    <input
                        id="senha"
                        type="password"
                        placeholder=""
                        {...register('senha')}
                        className="input"
                    />
                    {errors.senha && (
                        <p className="mt-2 text-sm text-red-600">{errors.senha.message}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-1.5">
                        <input
                            type="checkbox"
                            {...register('lembrar')}
                            className="checkbox"
                        />
                        <span className="text-gray-700">Lembrar</span>
                    </label>
                    <Link
                        to="/forgot-password"
                        className="text-secondary hover:text-primary hover:underline"  
                    >
                        Esqueceu sua senha?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="button-default"
                >
                    ENTRAR
                </button>
            </form>
        </div>

    );
}

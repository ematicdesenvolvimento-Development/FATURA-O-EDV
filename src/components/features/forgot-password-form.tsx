'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { forgotPasswordSchema, type ForgotPasswordFormData } from '../../schemas/forgot-password-schemas';

//import img
import LogoImg from "../../assets/img/logo-1.png"

export function ForgotPasswordForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            nome: "", 
        }
    });

    const onSubmit = async (data: ForgotPasswordFormData) => {
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

                <div className="flex flex-col gap-2 w-full">
                    <button
                        type="submit"
                        className="button-default"
                    >
                        ENTRAR
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="button-secondary"
                    >
                        VOLTAR
                    </button>
                </div>
            </form>
        </div>

    );
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";

import { lojaCaixaSchema, type LojaCaixaFormData } from '../../schemas/loja-caixa-schemas';

export function LojaCaixaForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LojaCaixaFormData>({
        resolver: zodResolver(lojaCaixaSchema),
        defaultValues: {
            nome: "",
            descricao: "", 
            e_ativo: true,
        }
    });

    const onSubmit = async (data: LojaCaixaFormData) => {
        console.log(data)
    };

    return (
        <div className="w-full rounded-md bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="nome" className="label-input">
                            Nome
                        </label>
                        <input
                            id="nome"
                            type="text"
                            placeholder="Nome do caixa"
                            {...register('nome')}
                            className="input"
                        />
                        {errors.nome && (
                            <p className="mt-2 text-sm text-red-600">{errors.nome.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="descricao" className="label-input">
                            Descrição (Opcional)
                        </label>
                        <input
                            id="descricao"
                            type="text"
                            placeholder="Descrição do caixa"
                            {...register('descricao')}
                            className="input"
                        />
                        {errors.descricao && (
                            <p className="mt-2 text-sm text-red-600">{errors.descricao.message}</p>
                        )}
                    </div>
                </div>
 
                <label className="flex cursor-pointer items-center gap-1.5">
                    <input
                        type="checkbox"
                        {...register('e_ativo')}
                        className="checkbox"
                    />
                    <span className="text-gray-700">Marcar como caixa Ativo</span>
                </label>

                <div className="w-full flex gap-3.5 justify-end">
                    <button onClick={() => navigate(-1)} type='button' className="button-secondary-sm">
                        CANSELAR
                    </button>

                    <button
                        type="submit"
                        className="button-default-sm"
                    >
                        GUARDAR
                    </button>
                </div>
            </form>
        </div>
    )
}
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";

import { lojaSchema, type LojaFormData } from '../../schemas/loja-schemas';

export function LojaForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LojaFormData>({
        resolver: zodResolver(lojaSchema),
        defaultValues: {
            nome: "",
            localizacao: "",
            e_principal: false,
            e_ativo: true,
        }
    });

    const onSubmit = async (data: LojaFormData) => {
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
                            placeholder="Nome da loja"
                            {...register('nome')}
                            className="input"
                        />
                        {errors.nome && (
                            <p className="mt-2 text-sm text-red-600">{errors.nome.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="localizacao" className="label-input">
                            Localização
                        </label>
                        <input
                            id="localizacao"
                            type="text"
                            placeholder="Localização da loja"
                            {...register('localizacao')}
                            className="input"
                        />
                        {errors.localizacao && (
                            <p className="mt-2 text-sm text-red-600">{errors.localizacao.message}</p>
                        )}
                    </div>
                </div>

                <label className="flex cursor-pointer items-center gap-1.5">
                    <input
                        type="checkbox"
                        {...register('e_principal')}
                        className="checkbox"
                    />
                    <span className="text-gray-700">Marcar como loja principal</span>
                </label>

                <label className="flex cursor-pointer items-center gap-1.5">
                    <input
                        type="checkbox"
                        {...register('e_ativo')}
                        className="checkbox"
                    />
                    <span className="text-gray-700">Marcar como loja Ativa</span>
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
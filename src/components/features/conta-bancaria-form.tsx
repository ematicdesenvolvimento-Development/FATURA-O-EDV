'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
 
import { contaBancariaSchema, type ContaBancariaFormData } from '../../schemas/conta-bancaria-schemas';

export function ContaBancariaForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContaBancariaFormData>({
        resolver: zodResolver(contaBancariaSchema),
        defaultValues: {
            banco: "",
            conta: "", 
            iban: "",
            e_ativo: true,
        }
    });

    const onSubmit = async (data: ContaBancariaFormData) => {
        console.log(data)
    };

    return (
        <div className="w-full rounded-md bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="banco" className="label-input">
                            Banco
                        </label>
                        <input
                            id="banco"
                            type="text"
                            placeholder="Nome do banco"
                            {...register('banco')}
                            className="input"
                        />
                        {errors.banco && (
                            <p className="mt-2 text-sm text-red-600">{errors.banco.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="conta" className="label-input">
                            Conta
                        </label>
                        <input
                            id="conta"
                            type="text"
                            placeholder="Número da conta"
                            {...register('conta')}
                            className="input"
                        />
                        {errors.conta && (
                            <p className="mt-2 text-sm text-red-600">{errors.conta.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="iban" className="label-input">
                            IBAN
                        </label>
                        <input
                            id="iban"
                            type="text"
                            placeholder="Número do IBAN"
                            {...register('iban')}
                            className="input"
                        />
                        {errors.iban && (
                            <p className="mt-2 text-sm text-red-600">{errors.iban.message}</p>
                        )}
                    </div>
                </div>
 
                <label className="flex cursor-pointer items-center gap-1.5">
                    <input
                        type="checkbox"
                        {...register('e_ativo')}
                        className="checkbox"
                    />
                    <span className="text-gray-700">Marcar como conta Ativa</span>
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
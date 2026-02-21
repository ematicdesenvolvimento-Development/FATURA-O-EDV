'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";

import { cartaoConsumoSchema, type CartaoConsumoFormData } from "../../schemas/cartao-consumo-schemas";

export function CartaoConsumoForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CartaoConsumoFormData>({
        resolver: zodResolver(cartaoConsumoSchema),
        defaultValues: {
            cliente: "",
            numero: "",
            montante: 0
        }
    });

    const onSubmit = async (data: CartaoConsumoFormData) => {
        console.log(data)
    };

    return (
        <div className="w-full rounded-md bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="numero" className="label-input">
                            Número
                        </label>
                        <input
                            id="nome"
                            type="text"
                            placeholder="972479927"
                            {...register('numero')}
                            className="input"
                        />
                        {errors.numero && (
                            <p className="mt-2 text-sm text-red-600">{errors.numero.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="cliente" className="label-input">
                            Cliente
                        </label>
                        <input
                            id="cliente"
                            type="text"
                            placeholder="Cliente"
                            {...register('cliente')}
                            className="input"
                        />
                        {errors.cliente && (
                            <p className="mt-2 text-sm text-red-600">{errors.cliente.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="montante" className="label-input">Montante</label>
                    <div className="relative h-11">
                        <input
                            id="montante"
                            type="number"
                            placeholder="0,00"
                            {...register('montante')}
                            className="input absolute"
                        />
                        <div className="bg-gray-200 rounded-lg flex items-center justify-center font-medium text-sm text-gray-700 absolute h-10.5 w-12 right-0">
                            KZ
                        </div>
                    </div>
                    {errors.montante && (
                        <p className="mt-2 text-sm text-red-600">{errors.montante.message}</p>
                    )}
                </div>

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
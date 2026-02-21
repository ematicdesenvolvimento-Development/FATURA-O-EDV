import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Edit2 } from "lucide-react";

import Seo from "../../../../components/common/seo";

export default function DetalhesConta() {
    const navigate = useNavigate();
    const { id } = useParams();

    const account = {
        id,
        banco: 'Banco BAI',
        conta: '00404500000478',
        iban: 'A006.000.00.000',
        ativo: true,
    };

    return (
        <>
            <Seo
                title="Detalhes da Conta Bancária"
                description="Gestão e integração com AGT no +Faturas. Configure parâmetros fiscais e cumpra as obrigações tributárias com segurança."
            />

            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Conta Bancária / {id}</h1>
                    <div className="flex gap-2.5">
                        <button
                            onClick={() => navigate(`/dashboard/contas/contas-editar/${id}`)}
                            className="button-default-sm"
                        >
                            <Edit2 size={14} />
                            Editar
                        </button>
                        <button onClick={() => navigate(-1)} type="button" className="button-secondary-sm">
                            <ArrowLeft size={14} /> Voltar
                        </button>
                    </div>
                </div>

                <div className="w-full rounded-md bg-white p-8 shadow-sm  grid grid-cols-4 gap-6">
                    <div>
                        <p className="text-sm text-gray-600">Banco</p>
                        <p className="font-semibold">{account.banco}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600">Conta</p>
                        <p className="font-semibold">{account.conta}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600">IBAN</p>
                        <p className="font-semibold">{account.iban}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span
                            className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${account.ativo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                        >
                            {account.ativo ? 'Ativo' : 'Inativo'}
                        </span>
                    </div>
                </div>
            </div>

        </>
    );
}

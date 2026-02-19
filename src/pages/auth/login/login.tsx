import Seo from "../../../components/common/seo";
import { LoginForm } from "../../../components/features/login-form";

export default function Login() {
    return (
        <>
            <Seo
                title="Login"
                description="Aceda ao +Faturas, o sistema de facturação moderno para gestão empresarial, emissão de faturas e controlo financeiro."
            />

            <LoginForm />
        </>
    )
}
import Seo from "../../../components/common/seo";
import { ForgotPasswordForm } from "../../../components/features/forgot-password-form"; 

export default function ForgotPassword() {
    return (
        <>
            <Seo
                title="Recuperar Palavra-passe"
                description="Recupere o acesso à sua conta no +Faturas de forma rápida e segura."
            />

            <ForgotPasswordForm />
        </>

    )
}
import * as yup from 'yup';

export const LoginValidateSchema = yup.object({
    email: yup
        .string()
        .required('Insira o Email ou CPF'),

    password: yup
        .string()
        .min(1, 'Mínimo de 8 caracteres')
        .required('Senha obrigatória'),
});
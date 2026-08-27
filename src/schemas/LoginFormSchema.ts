import * as yup from 'yup';

export const userLoginSchema = yup.object({
    email: yup
        .string()
        .email('Email inválido')
        .required('Email obrigatório'),

    password: yup
        .string()
        .min(1, 'Mínimo de 6 caracteres')
        .required('Senha obrigatória'),
});
import * as yup from 'yup'
import { setLocale } from 'yup';

setLocale({
    number: {
        min: 'Must be at least ${min}',
        max: 'Cannot be more than ${max}',
    },
    mixed: {
        notType: 'Apenas números', // Sobreescrevendo a mensagem de validação NaN
    },
});

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

export const RegisterValidateSchema = yup.object({
    name: yup
        .string()
        .required('Este campo é obrigatório'),

    cpf: yup
        .number()
        .required('Este campo é obrigatório'),

    email: yup
        .string()
        .email()
        .required('Este campo é obrigatório'),

    password: yup
        .string()
        .min(1, 'Mínimo de 8 caracteres')
        .required('Senha obrigatória'),

    phone1: yup
        .number()
        .required('Este campo é obrigatório'),

    phone2: yup
        .number()
        .nullable()
        .optional(),


    avatar: yup
        .mixed<FileList>()
        .optional()
        .test(
            'fileType',
            'Formato de arquivo inválido',
            (files) => {
                if (!files || files.length === 0) {
                    return true;
                }

                return SUPPORTED_FORMATS.includes(files[0].type);
            }
        )
        .test(
            'fileSize',
            'O arquivo excede o limite de 2MB de tamanho',
            (files) => {
                if (!files || files.length === 0) {
                    return true;
                }

                return files[0].size <= MAX_FILE_SIZE;
            }
        )

});
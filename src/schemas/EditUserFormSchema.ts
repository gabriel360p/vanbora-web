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

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 8MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

export const EditUserFormSchema = yup.object({
    name: yup
        .string()
        .notRequired()
    ,

    cpf: yup
        .string()
        .test('isEmpty', 'Este campo aceita apenas números', (value) => {
            //ele deve considerar se tiver alguma coisa no campo, se tiver ele faz a validação
            if (value?.length > 0)
                if (Number(isNaN(value))) return false
                else return true
            else return true
        })
        .notRequired()
    ,

    email: yup
        .string()
        // .nullable()
        .email()
        .notRequired()
    ,

    password: yup
        .string()
        // .min(1, 'Mínimo de 8 caracteres')
        // .nullable()
        .notRequired()
        .test('isEmpty', 'Mínimo de 8 caracteres', (value) => {
            //ele deve considerar se tiver alguma coisa no campo, se tiver ele faz a validação
            if (value?.length > 0)
                if (value?.length < 8) return false
                else return true
            else return true
        })
    ,

    phone1: yup
        .string()
        .test('isEmpty', 'Este campo aceita apenas números', (value) => {
            //ele deve considerar se tiver alguma coisa no campo, se tiver ele faz a validação
            if (value?.length > 0)
                if (Number(isNaN(value))) return false
                else return true
            else return true
        })
        .notRequired()
    ,

    phone2: yup
        .string()
        .test('isEmpty', 'Este campo aceita apenas números', (value) => {
            //ele deve considerar se tiver alguma coisa no campo, se tiver ele faz a validação
            if (value?.length > 0)
                if (Number(isNaN(value))) return false
                else return true
            else return true
        })
        .notRequired(),


    avatar: yup
        .mixed<FileList>()
        .notRequired()
        .test(
            'fileType',
            'Formato de arquivo inválido',
            (file) => {
                if (file?.length > 0) {
                    console.log(file)
                    return SUPPORTED_FORMATS.includes(file[0].type);
                }
                else return true
            }
        )
        .test(
            'fileSize',
            'O arquivo excede o limite de 2MB de tamanho',
            (file) => {
                if (file?.length > 0) {
                    return file[0].size <= MAX_FILE_SIZE;
                }
                else return true
            }
        )

});
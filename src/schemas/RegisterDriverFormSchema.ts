import * as yup from 'yup';

const filesTypes = [
    'image/jpeg', 'image/png', 'image/jpg'
];

export const RegisterDriverValidateSchema = yup.object({
    model: yup.string().required("Este campo é obrigatório").max(10),
    plate: yup.string().required("Este campo é obrigatório").max(10),
    color: yup.string().required("Este campo é obrigatório").max(100),
    capacity: yup.number().typeError('Digite um número válido').required("Este campo é obrigatório").max(200),
    aditional: yup.string().max(256),
    vehicle_photo: yup.mixed<FileList>()
        .test("required", "Selecione ao menos uma foto do veículo",
            (arquivo) => {
                if (arquivo?.length === 0) return false;
                return true;
            }
        )
        .test("fileType", "Tipo de arquivo não suportado, use 'jpeg' ou 'png' ou'jpg'",
            (arquivo) => {
                if (!arquivo) {
                    return true;
                }

                return Array.from(arquivo).every((file) =>
                    filesTypes.includes(file.type),
                );
            }
        )
        .test('fileSize', 'O tamanho máximo de arquivo é de 2 megabytes',
            (arquivo) => {
                if (!arquivo) {
                    return true;
                }
                return Array.from(arquivo).every((file) => {
                    return file.size <= 2 * 1024 * 1024;
                });
            }
        )
        .required()
});
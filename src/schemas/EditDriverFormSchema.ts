import * as yup from 'yup';

const filesTypes = [
    'image/jpeg', 'image/png', 'image/jpg'
];

export const EditDriverFormSchema = yup.object({
    model: yup.string().notRequired().max(100),
    plate: yup.string().notRequired().max(10),
    color: yup.string().notRequired().max(100),
    capacity:
        yup
            .string()
            .test("TypeTest", "Insira apenas valores numéricos", (value) => {
                const capacityVehicle: number = Number(value?.trim);
                if (value) {
                    if (typeof capacityVehicle === "number") {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return true;
                    // console.log("vazio")
                }
            }),
    aditional: yup.string().max(256),
    vehicle_photo: yup.mixed<FileList>()
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
});
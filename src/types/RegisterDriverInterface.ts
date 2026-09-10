// import * as yup from 'yup';

// export const RegisterDriverValidateSchema = yup.object({
//     model: yup.string().required().max(10),
//     license_plate: yup.string().required().max(10),
//     color: yup.string().required().max(10),
//     passenger_capacity: yup.number().required().max(10),
//     aditional: yup.string().max(256),
// });

export interface RegisterDriverInterface {
    model: string,
    license_plate: string,
    color: string,
    passenger_capacity: number,
    vehicle_photo: FileList,
    aditional?: string,
}
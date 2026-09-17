export default interface EditUserFormInterface {
    name?: string | null,
    email?: string | null,
    cpf?: number | null,
    password?: string | null,
    phone1?: number | null,
    phone2?: number | null,
    avatar?: File | null,
}
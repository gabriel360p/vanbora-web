export default interface RegisterInterface {
    name: string,
    email: string,
    cpf: number,
    password: string,
    phone1: number,
    phone2: number,
    avatar?: File,
}
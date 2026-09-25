export default interface Vehicle {
    id: number,
    user_id: number,
    photos_path: string[],
    plate: string,
    color: string,
    model: string,
    capacity: number,
    aditional?: string,
    status?: boolean,
    // created_at:' ,
    // updated_at'

}
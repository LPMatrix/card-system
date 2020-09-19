export interface Agent {
    _id? : string,
    name : string,
    email : string,
    password? : string,
    branch?: string,
    image : File | string,
    updatedAt? : Date,
    is_active? : boolean,
    __v? : any
}
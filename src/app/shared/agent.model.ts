export interface Agent {
    _id? : string,
    name : string,
    email : string,
    password : string,
    image : File | string,
    updatedAt? : Date,
    __v? : any
}
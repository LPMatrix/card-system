
export interface User {
    _id? : string,
    firstname : string,
    middlename : string,
    lastname : string,
    email : string,
    gender : string,
    dob : string,
    zone : string,
    unit : string,
    phone_no : string,
    state : string,
    vehicle_no? : string,
    uniqueId : string,
    password : string,
    updatedAt? : Date,
    agentId? : any,
    image : File,
    fingerprint_thumb : string,
    fingerprint_index : string,
    approve? : boolean,
    __v? : any
}
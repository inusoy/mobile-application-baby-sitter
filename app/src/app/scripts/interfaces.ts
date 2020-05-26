// Appery.io models
//
export interface SignupServiceResponse {
    "_updatedAt": string,
    "_createdAt": string,
    "username": string,
    "_id": string,
    "sessionToken": string
}
//
interface __UserDB_UserProfile_list_serviceResponse_sub_003 {
    "write": boolean,
    "read": boolean
}
interface __UserDB_UserProfile_list_serviceResponse_sub_002 {
    "*": __UserDB_UserProfile_list_serviceResponse_sub_003
}
interface __UserDB_UserProfile_list_serviceResponse_sub_001 {
    "email": string,
    "_createdAt": string,
    "_id": string,
    "acl": __UserDB_UserProfile_list_serviceResponse_sub_002,
    "_updatedAt": string,
    "country": string
}
export interface UserDB_UserProfile_list_serviceResponse extends Array < __UserDB_UserProfile_list_serviceResponse_sub_001 > {}
//
export interface UserDB_UserProfile_create_serviceResponse {
    "_id": string,
    "_createdAt": string
}
//
export interface greetingScript_serviceResponse {
    "requestParams": string,
    "requestBody": string
}
//
export interface LoginServiceResponse {
    "_id": string,
    "sessionToken": string
}
//
export interface UserDB_UserProfile_delete_serviceResponse {}
//
export interface LogoutServiceResponse {}
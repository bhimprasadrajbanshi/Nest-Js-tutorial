import {IsInt, IsString} from "class-validator" ;

export class CreateStudentDTO{
    @IsString()
    fullname: string

    @IsString()
    id:string

    @IsString()
    address:string

    @IsString()
    contact:string

}

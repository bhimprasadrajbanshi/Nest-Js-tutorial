import {IsInt, IsString} from "class-validator" ;

export class CreateStudentDTO{
    @IsString()
    fullname: string

    @IsInt()
    id:number

    @IsString()
    address:string

    @IsString()
    contact:string

}

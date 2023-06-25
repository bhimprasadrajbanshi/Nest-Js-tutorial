import { Controller,Body,Post, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDTO } from 'src/Dtos/student.dto';

@Controller('student')
export class StudentController {
    
    studentService:StudentService

    constructor(){
        this.studentService = new StudentService();
    }
@Get(':id')
studentById(@Param('id') id:string){
    return this.studentService.findOne(id)
}
   
@Get()
studentAll(){
    return this.studentService.findAll();
}

    
@Post()
createAStudent(@Body() student:CreateStudentDTO){
    return this.studentService.create(student);
}

}

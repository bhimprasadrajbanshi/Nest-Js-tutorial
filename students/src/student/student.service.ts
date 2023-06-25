import { CreateStudentDTO } from "src/Dtos/student.dto";
import { StudentRepository } from "./student.repository";

export class StudentService{
    studentRepo: StudentRepository;

    constructor(){
        this.studentRepo = new StudentRepository;
    
  }
  
findOne(id: string){
    return this.studentRepo.findOne(id);
}

findAll(){
    return this.studentRepo.findAll();
}
create(student:CreateStudentDTO){
    return this.studentRepo.create(student);

}
}
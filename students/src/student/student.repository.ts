import { readFile, writeFile } from "fs/promises";
import { CreateStudentDTO } from "src/Dtos/student.dto";
export class StudentRepository{
    async findOne(id:string){
       const contents= await readFile('students.json', 'utf-8');
       const student = JSON.parse(contents);
       return student[id];
    }

    async findAll(){
        const contents =await readFile('students.json', 'utf-8');
        const student = JSON.parse(contents);
        return student ;
     }

     async create(student: CreateStudentDTO){
        const studentFile= await readFile('students.json', 'utf-8');
        const students = JSON.parse(studentFile); 
        students[student.id] = {fullname: student.fullname, id:student.id, address:student.address, contact:student.contact};
        await writeFile('students.json', JSON.stringify(students));
     }
}

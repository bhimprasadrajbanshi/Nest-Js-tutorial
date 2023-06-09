import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('StudentInfo')
export class StudentContoller{
 
    //add stutudent information
    @Post('/add')
    addStudentInfo(): string {
        return 'add StudentInfo';
    }
    //delete stutudent information
    @Delete('/delete')
    deletestutudent(): string{
        return 'delete stutudent information';
    }
    //update stutudent information
    @Put('/update')
    updatestutudent(): string{
        return ' update stutudent information';
    }
    @Get('/get')
    findallstutudent(): string{
        return ' find all stutudent information';
    }
}
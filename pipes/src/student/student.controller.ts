import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    listallstudent(){
        console.log("all info student")
    }


    @Get('/:id')
    studentbyid(@Param('id') id:string){
        console.log(id, typeof(id))
    }

    @Post('update')
    updatestudent(@Body() body:any){
    console.log(body)
    }


}

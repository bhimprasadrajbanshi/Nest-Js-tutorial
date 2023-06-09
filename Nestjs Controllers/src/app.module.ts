import { Module } from '@nestjs/common';
import { log } from 'console';
import { StudentContoller } from './app.controller';


@Module({
  imports: [],
  controllers: [StudentContoller,],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log("Root Module");
  }
  
}

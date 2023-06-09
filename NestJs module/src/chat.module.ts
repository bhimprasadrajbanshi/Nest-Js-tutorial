import { Module } from '@nestjs/common';
import { log } from 'console';

@Module({
    imports: [],
    controllers: [],
    providers: [],
  })
  export class ChatModule {
    constructor(){
      console.log("ChatModule");
    }
    
  }
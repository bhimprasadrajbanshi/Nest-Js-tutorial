import { Module } from '@nestjs/common';
import { log } from 'console';

@Module({
    imports: [],
    controllers: [],
    providers: [],
  })
  export class OrdersModule {
    constructor(){
      console.log("OrdersModule");
    }
    
  }
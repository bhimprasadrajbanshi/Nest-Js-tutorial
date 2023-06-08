import { Module } from '@nestjs/common';
import { log } from 'console';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';


@Module({
  imports: [UsersModule,OrdersModule,ChatModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("Root Module");
  }
  
}

## Modules
A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

<img src="https://docs.nestjs.com/assets/Modules_1.png">

### Code
- Root module
```nestjs
 @Module({
  imports: [UsersModule,OrdersModule,ChatModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("Root Module");
  }
```
- ChatModule (Sub module)
```nestjs
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
```
- OrdersModule (Sub module)
```nestjs
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
```
- UsersModule(Sub module)
```nestjs
   @Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class UsersModule {
  constructor(){
    console.log("UsersModule");
  }
  
}
```

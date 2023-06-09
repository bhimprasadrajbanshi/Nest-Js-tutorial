## Modules
A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

<img src="https://docs.nestjs.com/assets/Modules_1.png">

```Nestjs
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

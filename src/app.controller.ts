import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post()
  // createUser(@Body() createUserRequest: CreateUserRequest) {
  //   this.appService.createUser(createUserRequest);
  // }

  @Get('products')
  getAnalytics() {
    return this.appService.getProducts();
  }
}
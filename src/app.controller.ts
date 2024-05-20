import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

// import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('products')
  createProduct(@Body() createProductRequest: any) {
    // Forwarding the incoming request to the products service via messaging
    this.appService.createProduct(createProductRequest);
  }

  @Get('products')
  getAnalytics() {
    return this.appService.getProducts();
  }

  @Get('products/:id')
  getProduct(@Param() id: number) {
    return this.appService.getProduct(id);
  }
}

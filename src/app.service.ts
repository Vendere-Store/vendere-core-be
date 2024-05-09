import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
// import { CreateUserRequest } from './create-user-request.dto';
// import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('PRODUCTS') private readonly productsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createProduct(createProductRequest: any) {
    try {
      console.log('Sending product from gateway');
      return firstValueFrom(
        this.productsClient.send('createProduct', createProductRequest),
      );
    } catch (error) {
      console.error('Error sending product creation request:', error);

      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  getProducts() {
    return this.productsClient.send('findAllProducts', {});
  }

  getProduct(id: number) {
    return this.productsClient.send('findOneProduct', id);
  }
}

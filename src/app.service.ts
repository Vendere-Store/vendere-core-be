import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
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

  // createUser(createUserRequest: CreateUserRequest) {
  //   this.users.push(createUserRequest);
  //   this.communicationClient.emit(
  //       'user_created',
  //       new CreateUserEvent(createUserRequest.email),
  //   );
  //   this.analyticsClient.emit(
  //       'user_created',
  //       new CreateUserEvent(createUserRequest.email),
  //   );
  // }

  getProducts() {
    return this.productsClient.send('findAllProducts', {});
  }
}

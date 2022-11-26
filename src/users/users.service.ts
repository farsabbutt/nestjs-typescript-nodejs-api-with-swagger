import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { ResponseOperationSuccess } from "../common/entities/response-operation-success";

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return createUserDto
  }

  findAll() {
    return [
      {
        name: "James",
        email: "james@yahoo.com",
        age: 20
      },
      {
        name: "James",
        email: "james@yahoo.com",
        age: 20
      },
      {
        name: "James",
        email: "james@yahoo.com",
        age: 20
      }
    ];
  }

  findOne(id: number): User | null {
    if (id == 1){
      return {
        name: "James",
        email: "james@yahoo.com",
        age: 20
      }
    }
    return null
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return UpdateUserDto
  }

  remove(id: number) {
    const response: ResponseOperationSuccess = {
      code: 2,
      message: "User deleted successfully!",
      type: "success"
    }
    return response
  }
}

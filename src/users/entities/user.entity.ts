import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({ example: "james@gmail.com", description: 'The email of the user' })
  email: string;

  @ApiProperty({
    example: 'James Dime',
    description: 'The name of the user',
  })
  name: string;

  @ApiProperty({
    example: 20,
    description: 'The age of the user',
  })
  age: number

}

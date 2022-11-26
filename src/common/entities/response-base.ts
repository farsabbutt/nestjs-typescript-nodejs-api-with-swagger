import { ApiProperty } from "@nestjs/swagger";

export class ResponseBase<T> {
  @ApiProperty({ example: 1, description: 'The error code of response' })
  code: number
  @ApiProperty({ example: "error", description: 'The type of response' })
  type: T
  @ApiProperty({ example: "Data not found", description: 'The reason for error' })
  message: string
}

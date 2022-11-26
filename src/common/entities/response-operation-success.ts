import { ResponseBase } from "./response-base";
import { ApiProperty } from "@nestjs/swagger";

type ResponseSuccess = "success"

export class ResponseOperationSuccess extends ResponseBase<ResponseSuccess> {
  @ApiProperty({ example: "success", description: 'The type of response' })
  type: ResponseSuccess
  @ApiProperty({ example: "Record successfully deleted", description: 'The reason for operation' })
  message: string
}

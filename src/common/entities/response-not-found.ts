import { ResponseBase } from "./response-base";

type ResponseTypeError = "error"

export class ResponseNotFound extends ResponseBase<ResponseTypeError> {

}

import { GetStaticData } from "./get"
import { Untransulate } from "./unt"

export * from "./get"
export * from "./unt"

export type RequestData = GetStaticData | Untransulate

export interface OkData {
    status: "Ok"
}

export class ErrorData {
    status: "Error" = "Error"
    message: string
    constructor(message: string) {
        this.message = message
    }
}
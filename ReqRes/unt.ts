import { LangCode, ListCode } from "../LangData"
import { ErrorData, OkData } from "./mod"

// request

export type Untransulate = ListUntransulate /* | OnceUntransulate */ | SplitUntransulate | AutoUntransulate
export type ListUntransulate = {
    type: "Untransulate"
    mode: "list"
    str: string
    langList: ListCode[]
}
// export type OnceUntransulate = {
//     type: "Untransulate"
//     mode: "once"
//     str: string
//     source: ListCode
//     target: LangCode
// }
export type SplitUntransulate = {
    type: "Untransulate"
    mode: "split"
    str: string
    splitSize: number
    langList: ListCode[]
}
export type AutoUntransulate = {
    type: "Untransulate"
    mode: "auto"
    str: string
    langList: ListCode[]
}

// responce

export type RListUntransulate = OkListUntransulate | ErrorData
export class OkListUntransulate implements OkData{
    status: "Ok" = "Ok"
    str: string
    constructor(str: string) {
        this.str = str
    }
}

// export type ROnceUntransulate = OkOnceUntransulate | ErrorData
// export class OkOnceUntransulate implements OkData {
//     status: "Ok" = "Ok"
//     str: string
//     constructor(str: string) {
//         this.str = str
//     }
// }

export type RSplitUntransulate = OkSplitUntransulate | ErrorData
export class OkSplitUntransulate implements OkData {
    status: "Ok" = "Ok"
    finish: boolean
    str: string
    splitSize: number
    langList: LangCode[]
    constructor(finish: boolean, str: string, splitSize: number,langList: LangCode[]){
        this.finish = finish
        this.str = str
        this.splitSize = splitSize
        this.langList = langList
    }
}

export type RAutoUntransulate = OkAutoUntransulate | ErrorData
export class OkAutoUntransulate implements OkData {
    status: "Ok" = "Ok"
    finish: boolean
    str: string
    langList: LangCode[]
    constructor(finish: boolean, str: string, langList: LangCode[]){
        this.finish = finish
        this.str = str
        this.langList = langList
    }
}
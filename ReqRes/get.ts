import { LangListType } from "../LangData"
import { ErrorData, OkData } from "./mod"

// request

export type GetStaticData = GetLangList | GetCodeToName
export type GetLangList = {
    type: "Get"
    mode: "LangList"
}
export type GetCodeToName = {
    type: "Get"
    mode: "CodeToName"
    code: string
}

// responce

export type RGetLangList = OkGetLangList | ErrorData
export class OkGetLangList implements OkData{
    status: "Ok" = "Ok"
    list: LangListType
    constructor(list: LangListType) {
        this.list = list
    }
}

export type RGetCodeToName = OkGetCodeToName | ErrorData
export class OkGetCodeToName implements OkData {
    status: "Ok" = "Ok"
    exist: boolean
    name: string
    constructor(exist: boolean,name: string) {
        this.exist = exist
        this.name = name
    }
}
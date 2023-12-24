import { langList, langDic } from "./LangData"
import type { ListCode } from "./LangData"
import { ErrorData, OkData, OkGetCodeToName, OkGetLangList, OkListUntransulate, RGetCodeToName, RGetLangList, RequestData } from "./ReqRes/mod"

export function doGet(e: GoogleAppsScript.Events.DoGet) {
    if (e.parameter.data === undefined) return returnData(new ErrorData("data is undefined"))
    
    const data = JSON.parse(e.parameter.data) as RequestData

    if (data === undefined) return returnData(new ErrorData("data is undefined"))
    

    if (data.type === "Get") {
        if (data.mode === "LangList") {
            return returnData(new OkGetLangList(langList) as RGetLangList)
        } else if (data.mode === "CodeToName") {
            if(langDic[data.code]){
                return returnData(new OkGetCodeToName(true, langDic[data.code]) as RGetCodeToName)
            } else {
                return returnData(new OkGetCodeToName(false, "") as RGetCodeToName)
            }
        } else {
            //@ts-ignore
            return returnData(new ErrorData(`data.mode is ${data.mode}`))
        }
    } else if (data.type === "Untransulate"){
        switch (data.mode) {
            // case "once":
            //     try {
            //         const ret = LanguageApp.translate(data.str, data.source, data.target)
            //         return returnData(new OkOnceUntransulate(ret) as ROnceUntransulate)
            //     } catch (error) {
            //         return returnData(new ErrorData(String(error)) as ROnceUntransulate)
            //     }
            case "list":
                let [ok, err] = listCheck(data.langList)
                if(!ok) {
                    return returnData(new ErrorData(`listCheck said: "${err}"`))
                }

                let ret = data.str
                let list = data.langList

                while (true) {
                    if (list.length <= 1) {
                        break
                    }
                    const sourceLang = list[0]
                    const targetLang = list[1]

                    try {
                        ret = LanguageApp.translate(ret, sourceLang, targetLang)
                    } catch (error) {
                        return returnData(new ErrorData(`LanguageApp.translate error: "${error}" when source: ${sourceLang} target: ${targetLang}`))
                    }
                    
                    list.shift()
                }
                return returnData(new OkListUntransulate(ret))
            case "split":
                if (data.splitSize <= 0) { return returnData(new ErrorData(`data.splitSize <= 0`)) }
                
            default:
                return returnData(new ErrorData(`data.mode is ${data.mode}`))
        }
    } else {
        //@ts-ignore
        return returnData(new ErrorData(`data.type is ${data.type}`))
    }
}

function listCheck(list:ListCode[]):[boolean, string] {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if(index !== 0 && element === "") {
            return [false, `index ${index} is "". can't use "".`]
        }
    }
    return [true, ""]
}

function returnData(obj: OkData | ErrorData): GoogleAppsScript.Content.TextOutput {
    if (obj.status === "Error") {
        throw JSON.stringify(obj)
    } else {
        return ContentService.createTextOutput(JSON.stringify(obj))
    }
}
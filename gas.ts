//#region LanguageList(from https://cloud.google.com/translate/docs/languages)

const langList = [
    {
        "name": "Afrikaans",
        "code": "af"
    },
    {
        "name": "Albanian",
        "code": "sq"
    },
    {
        "name": "Amharic",
        "code": "am"
    },
    {
        "name": "Arabic",
        "code": "ar"
    },
    {
        "name": "Armenian",
        "code": "hy"
    },
    {
        "name": "Assamese",
        "code": "as"
    },
    {
        "name": "Aymara",
        "code": "ay"
    },
    {
        "name": "Azerbaijani",
        "code": "az"
    },
    {
        "name": "Bambara",
        "code": "bm"
    },
    {
        "name": "Basque",
        "code": "eu"
    },
    {
        "name": "Belarusian",
        "code": "be"
    },
    {
        "name": "Bengali",
        "code": "bn"
    },
    {
        "name": "Bhojpuri",
        "code": "bho"
    },
    {
        "name": "Bosnian",
        "code": "bs"
    },
    {
        "name": "Bulgarian",
        "code": "bg"
    },
    {
        "name": "Catalan",
        "code": "ca"
    },
    {
        "name": "Cebuano",
        "code": "ceb"
    },
    {
        "name": "Chinese (Simplified)",
        "code": "zh-CN"
    },
    {
        "name": "Chinese (Traditional)",
        "code": "zh-TW"
    },
    {
        "name": "Corsican",
        "code": "co"
    },
    {
        "name": "Croatian",
        "code": "hr"
    },
    {
        "name": "Czech",
        "code": "cs"
    },
    {
        "name": "Danish",
        "code": "da"
    },
    {
        "name": "Dhivehi",
        "code": "dv"
    },
    {
        "name": "Dogri",
        "code": "doi"
    },
    {
        "name": "Dutch",
        "code": "nl"
    },
    {
        "name": "English",
        "code": "en"
    },
    {
        "name": "Esperanto",
        "code": "eo"
    },
    {
        "name": "Estonian",
        "code": "et"
    },
    {
        "name": "Ewe",
        "code": "ee"
    },
    {
        "name": "Filipino (Tagalog)",
        "code": "fil"
    },
    {
        "name": "Finnish",
        "code": "fi"
    },
    {
        "name": "French",
        "code": "fr"
    },
    {
        "name": "Frisian",
        "code": "fy"
    },
    {
        "name": "Galician",
        "code": "gl"
    },
    {
        "name": "Georgian",
        "code": "ka"
    },
    {
        "name": "German",
        "code": "de"
    },
    {
        "name": "Greek",
        "code": "el"
    },
    {
        "name": "Guarani",
        "code": "gn"
    },
    {
        "name": "Gujarati",
        "code": "gu"
    },
    {
        "name": "Haitian Creole",
        "code": "ht"
    },
    {
        "name": "Hausa",
        "code": "ha"
    },
    {
        "name": "Hawaiian",
        "code": "haw"
    },
    {
        "name": "Hebrew",
        "code": "he"
    },
    {
        "name": "Hindi",
        "code": "hi"
    },
    {
        "name": "Hmong",
        "code": "hmn"
    },
    {
        "name": "Hungarian",
        "code": "hu"
    },
    {
        "name": "Icelandic",
        "code": "is"
    },
    {
        "name": "Igbo",
        "code": "ig"
    },
    {
        "name": "Ilocano",
        "code": "ilo"
    },
    {
        "name": "Indonesian",
        "code": "id"
    },
    {
        "name": "Irish",
        "code": "ga"
    },
    {
        "name": "Italian",
        "code": "it"
    },
    {
        "name": "Japanese",
        "code": "ja"
    },
    {
        "name": "Javanese",
        "code": "jv"
    },
    {
        "name": "Kannada",
        "code": "kn"
    },
    {
        "name": "Kazakh",
        "code": "kk"
    },
    {
        "name": "Khmer",
        "code": "km"
    },
    {
        "name": "Kinyarwanda",
        "code": "rw"
    },
    {
        "name": "Konkani",
        "code": "gom"
    },
    {
        "name": "Korean",
        "code": "ko"
    },
    {
        "name": "Krio",
        "code": "kri"
    },
    {
        "name": "Kurdish",
        "code": "ku"
    },
    {
        "name": "Kurdish (Sorani)",
        "code": "ckb"
    },
    {
        "name": "Kyrgyz",
        "code": "ky"
    },
    {
        "name": "Lao",
        "code": "lo"
    },
    {
        "name": "Latin",
        "code": "la"
    },
    {
        "name": "Latvian",
        "code": "lv"
    },
    {
        "name": "Lingala",
        "code": "ln"
    },
    {
        "name": "Lithuanian",
        "code": "lt"
    },
    {
        "name": "Luganda",
        "code": "lg"
    },
    {
        "name": "Luxembourgish",
        "code": "lb"
    },
    {
        "name": "Macedonian",
        "code": "mk"
    },
    {
        "name": "Maithili",
        "code": "mai"
    },
    {
        "name": "Malagasy",
        "code": "mg"
    },
    {
        "name": "Malay",
        "code": "ms"
    },
    {
        "name": "Malayalam",
        "code": "ml"
    },
    {
        "name": "Maltese",
        "code": "mt"
    },
    {
        "name": "Maori",
        "code": "mi"
    },
    {
        "name": "Marathi",
        "code": "mr"
    },
    {
        "name": "Meiteilon (Manipuri)",
        "code": "mni-Mtei"
    },
    {
        "name": "Mizo",
        "code": "lus"
    },
    {
        "name": "Mongolian",
        "code": "mn"
    },
    {
        "name": "Myanmar (Burmese)",
        "code": "my"
    },
    {
        "name": "Nepali",
        "code": "ne"
    },
    {
        "name": "Norwegian",
        "code": "no"
    },
    {
        "name": "Nyanja (Chichewa)",
        "code": "ny"
    },
    {
        "name": "Odia (Oriya)",
        "code": "or"
    },
    {
        "name": "Oromo",
        "code": "om"
    },
    {
        "name": "Pashto",
        "code": "ps"
    },
    {
        "name": "Persian",
        "code": "fa"
    },
    {
        "name": "Polish",
        "code": "pl"
    },
    {
        "name": "Portuguese (Portugal, Brazil)",
        "code": "pt"
    },
    {
        "name": "Punjabi",
        "code": "pa"
    },
    {
        "name": "Quechua",
        "code": "qu"
    },
    {
        "name": "Romanian",
        "code": "ro"
    },
    {
        "name": "Russian",
        "code": "ru"
    },
    {
        "name": "Samoan",
        "code": "sm"
    },
    {
        "name": "Sanskrit",
        "code": "sa"
    },
    {
        "name": "Scots Gaelic",
        "code": "gd"
    },
    {
        "name": "Sepedi",
        "code": "nso"
    },
    {
        "name": "Serbian",
        "code": "sr"
    },
    {
        "name": "Sesotho",
        "code": "st"
    },
    {
        "name": "Shona",
        "code": "sn"
    },
    {
        "name": "Sindhi",
        "code": "sd"
    },
    {
        "name": "Sinhala (Sinhalese)",
        "code": "si"
    },
    {
        "name": "Slovak",
        "code": "sk"
    },
    {
        "name": "Slovenian",
        "code": "sl"
    },
    {
        "name": "Somali",
        "code": "so"
    },
    {
        "name": "Spanish",
        "code": "es"
    },
    {
        "name": "Sundanese",
        "code": "su"
    },
    {
        "name": "Swahili",
        "code": "sw"
    },
    {
        "name": "Swedish",
        "code": "sv"
    },
    {
        "name": "Tagalog (Filipino)",
        "code": "tl"
    },
    {
        "name": "Tajik",
        "code": "tg"
    },
    {
        "name": "Tamil",
        "code": "ta"
    },
    {
        "name": "Tatar",
        "code": "tt"
    },
    {
        "name": "Telugu",
        "code": "te"
    },
    {
        "name": "Thai",
        "code": "th"
    },
    {
        "name": "Tigrinya",
        "code": "ti"
    },
    {
        "name": "Tsonga",
        "code": "ts"
    },
    {
        "name": "Turkish",
        "code": "tr"
    },
    {
        "name": "Turkmen",
        "code": "tk"
    },
    {
        "name": "Twi (Akan)",
        "code": "ak"
    },
    {
        "name": "Ukrainian",
        "code": "uk"
    },
    {
        "name": "Urdu",
        "code": "ur"
    },
    {
        "name": "Uyghur",
        "code": "ug"
    },
    {
        "name": "Uzbek",
        "code": "uz"
    },
    {
        "name": "Vietnamese",
        "code": "vi"
    },
    {
        "name": "Welsh",
        "code": "cy"
    },
    {
        "name": "Xhosa",
        "code": "xh"
    },
    {
        "name": "Yiddish",
        "code": "yi"
    },
    {
        "name": "Yoruba",
        "code": "yo"
    },
    {
        "name": "Zulu",
        "code": "zu"
    }
] as const

//#endregion

type LangCode = typeof langList[number]["code"] // string
type ListCode = LangCode | "" // string
type LangListType = typeof langList // {name:string;code:string;}[]

const langDic = (function (): { [code: string]: string } {
    let dic: { [code: string]: string } = {}
    langList.forEach(obj => {
        dic[obj.code] = obj.name
    })
    return dic
})()

//#region Request
type RequestData = GetStaticData | Untransulate

type GetStaticData = GetLangList | GetCodeToName
type GetLangList = {
    type: "Get"
    mode: "LangList"
}
type GetCodeToName = {
    type: "Get"
    mode: "CodeToName"
    code: string
}

type Untransulate = ListUntransulate | OnceUntransulate | SplitUntransulate | AutoUntransulate
type ListUntransulate = {
    type: "Untransulate"
    mode: "list"
    str: string
    langList: ListCode[]
}
type OnceUntransulate = {
    type: "Untransulate"
    mode: "once"
    str: string
    source: ListCode
    target: LangCode
}
type SplitUntransulate = {
    type: "Untransulate"
    mode: "split"
    str: string
    splitSize: number
    langList: ListCode[]
}
type AutoUntransulate = {
    type: "Untransulate"
    mode: "auto"
    str: string
    langList: ListCode[]
}

//#endregion

//#region Responce

interface OkData {
    status: "Ok"
}
class ErrorData {
    status: "Error" = "Error"
    message: string
    constructor(message: string) {
        this.message = message
    }
}

type RGetLangList = OkGetLangList | ErrorData
class OkGetLangList implements OkData{
    status: "Ok" = "Ok"
    list: LangListType
    constructor(list: LangListType) {
        this.list = list
    }
}

type RGetCodeToName = OkGetCodeToName | ErrorData
class OkGetCodeToName implements OkData {
    status: "Ok" = "Ok"
    exist: boolean
    name: string
    constructor(exist: boolean,name: string) {
        this.exist = exist
        this.name = name
    }
}

type RListUntransulate = OkListUntransulate | ErrorData
class OkListUntransulate implements OkData{
    status: "Ok" = "Ok"
    str: string
    constructor(str: string) {
        this.str = str
    }
}

type ROnceUntransulate = OkOnceUntransulate | ErrorData
class OkOnceUntransulate implements OkData {
    status: "Ok" = "Ok"
    str: string
    constructor(str: string) {
        this.str = str
    }
}

type RSplitUntransulate = OkSplitUntransulate | ErrorData
class OkSplitUntransulate implements OkData {
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

type RAutoUntransulate = OkAutoUntransulate | ErrorData
class OkAutoUntransulate implements OkData {
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

//#endregion

function doGet(e: GoogleAppsScript.Events.DoGet) {
    if (e.parameter.data === undefined) return returnData(new ErrorData("data is undefined"))
    
    const data = JSON.parse(e.parameter.data) as RequestData

    if (data === undefined) return returnData(new ErrorData("data is undefined"))
    

    if (data.type === "Get") {
        if (data.mode === "LangList") {
            return returnData(new OkGetLangList(langList) as RGetLangList)
        } else {
            if(langDic[data.code]){
                return returnData(new OkGetCodeToName(true, langDic[data.code]) as RGetCodeToName)
            } else {
                return returnData(new OkGetCodeToName(false, "") as RGetCodeToName)
            }
        }
    } else {
        switch (data.mode) {
            case "once":
                try {
                    const ret = LanguageApp.translate(data.str, data.source, data.target)
                    return returnData(new OkOnceUntransulate(ret) as ROnceUntransulate)
                } catch (error) {
                    return returnData(new ErrorData(String(error)) as ROnceUntransulate)
                }
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
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const getdata = e.parameter as unknown as {text: string, languages: string}
    // const data = {text: getdata.text, languages: JSON.parse(getdata.languages)} as GetRequestData
    
    // for (let i = 0; i < data.languages.length; i++) {
    //     const element = data.languages[i];
    //     if (element === "") {
    //         return JSON.stringify(new ErrorData("not use \"\". use \"auto\"."))
    //     }

    //     if (i !== 0 && element === "auto"){
    //         return JSON.stringify(new ErrorData("not use \"auto\" in this place."))
    //     } else if (i === 0 && element === "auto") {
    //         data.languages[i] = ""
    //     }
    // }

    // const langList = data.languages
    // let str = data.text

    // // eslint-disable-next-line no-constant-condition
    // while (true) {
    //     if (langList.length <= 1) {
    //         break
    //     }
    //     const sourceLang = langList[0]
    //     const targetLang = langList[1]

    //     str = LanguageApp.translate(str, sourceLang, targetLang)
    //     langList.shift()
    // }

    // return JSON.stringify(new OkData(str))
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

function returnData(obj: any): GoogleAppsScript.Content.TextOutput {
    return ContentService.createTextOutput(JSON.stringify(obj))
}
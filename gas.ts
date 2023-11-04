type RequestData = ListRequestData | OnceRequestData | SplitRequestData | AutoRequestData
type ListRequestData = {
    mode: "list"
    languages: Array<string>
}
type OnceRequestData = {
    mode: "once"
}
type SplitRequestData = {
    mode: "split"
}
type AutoRequestData = {
    mode: "auto"
}


function doGet(e: GoogleAppsScript.Events.DoGet) {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
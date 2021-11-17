import qs from 'qs'

/**
 * API 跳轉、錯誤處理、提示等方法放在這裡
 * 
 */

/**
 * 錯誤訊息提示
 * @param {*} mas 
 */
export const tip = mas => {
    console.log('msg :' + mas)
}

// 請求失敗的統一處理
export const errorHandle = (status, msg) => {
    switch(status) {
        // 登入失敗
        case 400:
            console.log('400')
            break
        // backend sessino過期(重登入)
        case 401:
            console.log('401')
            break
        // 權限不足
        case 403:
            console.log('403')
            break
        // 請求失敗
        case 404:
            console.log('404')
            break
        // 跨域或 get/post請求被拒絕
        case 405:
            console.log('405')
            break
        default:
            console.log('其他錯誤' + msg)
    }
}


/**
 * 將資料轉URI
 * @param {string} methodName
 * @param {object} data
 */
 export const getEncodeURIComponent = (methodName, data) => {
    let locale = 'cn'
    let qsData  = `${qs.stringify(data)}&language=${locale}&deviceType=mobile&zzz=`
    return encodeURIComponent(`method=${methodName}&${qsData}`)
}

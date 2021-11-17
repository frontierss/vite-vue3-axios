import originAxios from 'axios'

export default (option) => {
    return new Promise((resolve, reject) => {
        const instance = originAxios.create({
            baseUrl: process.env.NODE_ENV === 'production' ? '' : '../',
            timeout: 60000,
            headers: ''
        })

        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
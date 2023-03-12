import axios from "axios"

export const request = async (config: {
    url: string,
    headers?: any,
    data: any,
    method: string
}) => {
    console.log(config.method == 'GET' ? config.data : {}, "!23")
    const res = await axios({
        url: `http://localhost:5000/v1${config.url}`,
        headers: {
            ...config.headers,
            'Authorization': `Bearer token`
        },
        data: config.data,
        params: config.method == 'GET' ? config.data : {},
        method: config.method
    })

    const data = await res.data

    return data
}
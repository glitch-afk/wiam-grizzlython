import axios from "axios"

export const request = async (config: {
  url: string
  headers?: any
  data: any
  method: string
}) => {
  const res = await axios({
    url: `https://web3-iam-production-0d26.up.railway.app/v1${config.url}`,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
    data: config.data,
    params: config.method == "GET" ? config.data : {},
    method: config.method,
  })

  const data = await res.data

  return data
}

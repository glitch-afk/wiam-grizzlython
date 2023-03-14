import axios from "axios"

export const getTokenPrice = async (mint: string) => {
  const URL = `https://api.unmarshal.com/v1/pricestore/chain/solana/${mint}?timestamp=string&24change=string&alternateChain=string&auth_key=kfzpwdqrQD9FdaMbIdSXm4CTiD2oBzzt9uQ6fleA`

  const res = await axios.get(URL)

  return (await res.data).price
}

export const getTransactionDetails = async (hash: string) => {
  const URL = `https://api.helius.xyz/v0/transactions/?api-key=cf0d04d7-c2ae-4cd3-b039-2eb5258e1539`

  const res = await axios({
    url: URL,
    method: "POST",
    data: {
      transactions: [hash],
    },
  })

  const data = await res.data

  if (!data || data.length <= 0)
    return {
      type: "",
      description: "",
      status: "PENDING",
      source: "",
      tokens: [],
    }

  return {
    type: data[0].type,
    source: data[0].source,
    description: data[0].description,
    status: data[0].transactionError ? "FAILED" : "SUCCESS",
    tokens: data[0].tokenTransfers.map((transfer: any) => ({
      token: transfer.mint,
      amount: transfer.tokenAmount,
    })),
  }
}

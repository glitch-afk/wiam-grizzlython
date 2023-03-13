export type TRANSACTION_STATUS = "PENDING" | "FAILED" | "SUCCESS"

export type AddressData = {
  walletAddress: string
  chain: string
  sessions: number
  transactionVolume: number
  transactionExecuted: number
  details: string
}

export type transactionTableData = {
  data: any
  blockchain: string
  amount: number
  status: TRANSACTION_STATUS | string
  details: string
  type: string
  source: string
  description: string
}

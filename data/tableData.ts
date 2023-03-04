import { faker } from "@faker-js/faker"

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
  walletAddress: string
  transactionId: string
  chain: string
  amount: number
  status: TRANSACTION_STATUS | string
  details: string
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newWalletAddress = (): AddressData => {
  return {
    walletAddress: faker.name.fullName(),
    chain: faker.helpers.shuffle(["Solana", "Ethereum"])[0]!,
    sessions: faker.datatype.number(40),
    transactionVolume: faker.datatype.number(80),
    transactionExecuted: faker.datatype.number(60),
    details: faker.helpers.shuffle([
      "https://explorer.solana.com/",
      "https://etherscan.io/",
    ])[0]!,
  }
}

export function fakeWalletAddressData(len: number) {
  const makeData = (): AddressData[] => {
    return range(len).map((d): AddressData => {
      return {
        ...newWalletAddress(),
      }
    })
  }
  return makeData()
}

const newTransactionData = (): transactionTableData => {
  return {
    walletAddress: faker.name.firstName(),
    transactionId: faker.name.lastName(),
    chain: faker.helpers.shuffle(["Solana", "Ethereum"])[0]!,
    amount: faker.datatype.number(500),
    status: faker.helpers.shuffle(["PENDING", "FAILED", "SUCCESS"])[0]!,
    details: faker.helpers.shuffle([
      "https://explorer.solana.com/",
      "https://etherscan.io/",
    ])[0]!,
  }
}

export function fakeTransactionData(len: number) {
  const makeData = (): transactionTableData[] => {
    return range(len).map((d): transactionTableData => {
      return {
        ...newTransactionData(),
      }
    })
  }
  return makeData()
}

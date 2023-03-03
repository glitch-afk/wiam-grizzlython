import { faker } from "@faker-js/faker"

export type AddressData = {
  walletAddress: string
  chain: string
  sessions: number
  transactionVolume: number
  transactionExecuted: number
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

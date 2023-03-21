import React from "react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

import { useIsMounted } from "@/lib/hooks/useIsMounted"

const WalletConnect = () => {
  const isMounted = useIsMounted()
  if (!isMounted) return null
  return (
    <>
      <WalletMultiButton />
    </>
  )
}

export default WalletConnect

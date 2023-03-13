import { atom, createStore, useAtom } from "jotai"

import { PageViewedEvent, WalletConnectedEvent } from "@/lib/api/events"
import { Project } from "@/lib/api/projects"

export type DRAWER_VIEW =
  | "DASHBOARD_SIDEBAR"
  | "MOBILE_NAV"
  | "PROJECTS_MOBILENAV"
  | "AUTH_NAV"
const drawerAtom = atom({ isOpen: false, view: "DASHBOARD_SIDEBAR" })

export function useDrawer() {
  const [state, setState] = useAtom(drawerAtom)
  const openDrawer = (view: DRAWER_VIEW) => {
    setState({ ...state, isOpen: true, view })
  }
  const closeDrawer = () => setState({ ...state, isOpen: false })
  return {
    ...state,
    openDrawer,
    closeDrawer,
  }
}

// {
//   "id": "7234f9a4-d888-46b0-a260-97260a09c36e",
//   "name": "wallet_connected",
//   "eventId": "",
//   "data": {
//     "id": "7234f9a4-d888-46b0-a260-97260a09c36e",
//     "address": "9cXHkVQXZjzVZfD1ZJE9uneQchpsW6BHg2Q54KohgbRc",
//     "endTime": new Date("2023-03-03T08:22:38.187Z"),
//     "startTime": new Date("2023-03-03T08:21:59.009Z")
//   },
//   "blockchain": "SOLANA",
//   "projectId": "e6fc8190-26c9-43a2-9895-80601d07165a",
//   "iamUserId": "c20a5ff7-eb10-4c78-98c8-889d4cb7f0fd",
//   "createdAt": new Date("2023-03-03T08:21:59.049Z")
// },

export const walletConnectedAtom = atom<WalletConnectedEvent[]>([])

export function useWalletConnectedEvents() {
  const store = createStore()
  store.set(walletConnectedAtom, [])

  return store
}

export const pageViewedAtom = atom<PageViewedEvent[]>([])

export function usePageViewedEvents() {
  const store = createStore()
  store.set(pageViewedAtom, [])

  return store
}

export const transactionAtom = atom<any[]>([])

export function useTransactionEvents() {
  const store = createStore()
  store.set(transactionAtom, [])

  return store
}

const projectAtom = atom<Project[]>([])

export function useProject() {
  const store = createStore()
  store.set(projectAtom, [])

  return store
}

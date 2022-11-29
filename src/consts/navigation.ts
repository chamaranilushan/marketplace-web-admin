import { NavLinkType } from "./types"

export const NAV_MODE_THEMED = 'themed'
export const NAV_MODE_TRANSPARENT = 'transparent'
export const ROOT_URL = '/'
export const NFT_URL = '/'
export const PAYMENT_METHOD_URL = '/'
export const POLICY_WALLET_URL = '/'

export const NAV_LINKS: NavLinkType[] = [
    {
        url: NFT_URL,
        text: 'NFT',
    },
    {
        url: PAYMENT_METHOD_URL,
        text: 'Payment Methods',
    },
    {
        url: POLICY_WALLET_URL,
        text: 'Policy Wallet',
    }
]
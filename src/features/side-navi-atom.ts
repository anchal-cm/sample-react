import { atom } from "recoil";

type SideNavi = "PRODUCT"|"USER"
export const sideNaviState = atom<SideNavi>({
    key:"sideNaviState",
    default:"PRODUCT"
})
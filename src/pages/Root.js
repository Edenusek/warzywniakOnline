import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import ScrollToTop from "../components/ScrollToTop"


function RootLayout() {
    return <>
    <ScrollToTop/>
    <MainNavigation/>
    <Outlet/>
    </>
}

export default RootLayout
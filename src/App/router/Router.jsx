import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Top } from "../../components/Pages/Top"
import { Users } from "../../components/Pages/Users"
import { DefaultLayout } from "../../components/Templates/DefaultLayout"
import { HeaderOnly } from "../../components/Templates/HeaderOnly"

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<DefaultLayout><Top /></DefaultLayout>} />
                    <Route path={'/users'} element={<HeaderOnly><Users /></HeaderOnly>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
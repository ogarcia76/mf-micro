import React from "react"
import { Route, Routes } from "react-router-dom"
import { Base } from "./components/Base"
import { ButtonMicro } from "./components/ButtonMicro"
import { Counter } from "./components/Counter"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Base />} />
            <Route path="bmicro" element={<ButtonMicro />} />
            <Route path="counter" element={<Counter />} />
        </Routes>

    )
}

export default AppRoutes;

import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "./Index"
import '@tabler/core/dist/css/tabler.css'
import '@tabler/core/dist/js/tabler.js'
import Create from "./pages/users/Create"
import Get from "./pages/users/Get"
import Edit from "./pages/users/Edit"
import DetailProduct from "./pages/users/DetailProduct"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/tambah-product" element={<Create/>}/>
        <Route path="/lihat-product" element={<Get/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/detail-product/:id" element={<DetailProduct/>}/>
      </Routes>
    </Fragment>
  )
}

export default App

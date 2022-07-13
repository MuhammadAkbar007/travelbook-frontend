import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import AddTravelBook from "./pages/AddTravelBook"
import UpdateTravelBook from "./pages/UpdateTravelBook"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" exact element={ <Main /> }></Route>
              <Route path="/add" element={ <AddTravelBook /> }></Route>
              <Route path="/update/:id" element={ <UpdateTravelBook /> }></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </>
}

export default App
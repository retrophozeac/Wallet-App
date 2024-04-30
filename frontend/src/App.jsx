
import { Signin } from "./finalComponents/Signin"
import { Signup } from "./finalComponents/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./finalComponents/Dashboard"

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/send" element={<SendMoney />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Signup></Signup>
      <Signin></Signin> */}
    </>
  )
}

export default App

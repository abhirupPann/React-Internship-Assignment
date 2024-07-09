import { Navigate, Route, Routes } from "react-router-dom"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import { useEffect, useState } from "react"
import  { Toaster } from "react-hot-toast"

interface UserDetails {

  name: string;
  email: string;

}
function App() {
  const [userData, setUserData] = useState<UserDetails | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user-details");
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData) as UserDetails);
    }
  }, []);
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/" element={!userData ? <Page1/> : <Navigate to="/page2"/>}/>
      <Route path="/page2" element={userData ? <Page2/> : <Navigate to="/"/>}/>
      <Route path="/page3" element={<Page3/>}/>
    </Routes>
    </>
  )
}

export default App

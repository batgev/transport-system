
import LandingPage from './pages/LandingPage'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import PickAService from "./components/LandingPageComponents/PickAService"
const App = () => {
    const router = createHashRouter([
        {
            path:"/",
            element:<LandingPage/>
        },
      {
        path:"/booking",
        element:<PickAService />
      }])
  return (
    <div  className="font-poppins">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

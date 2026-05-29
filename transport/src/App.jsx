
import LandingPage from './pages/LandingPage'
import {createHashRouter,RouterProvider} from 'react-router-dom'

const App = () => {
    const router = createHashRouter([
        {
            path:"/",
            element:<LandingPage/>
        }])
  return (
    <div  className="font-poppins">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

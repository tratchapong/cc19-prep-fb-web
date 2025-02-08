import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import App from '../App'

const guestRouter = createBrowserRouter([
  { path : '/', element : <>Login Page</>},
  { path : '*', element : <Navigate to='/' />},
])

const userRouter = createBrowserRouter([
  { path : '/', element : <App />, 
    children : [
      {index: true, element : <p>SidebarMenu, PostArea, SidebarContact</p>},
      {path : 'friends', element: <>friends page</>},
      {path : '*', element: <Navigate to='/' /> }
    ]
  },
])

export default function AppRouter() {
  const user =  ''
  const finalRouter = user ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />  
  )
}

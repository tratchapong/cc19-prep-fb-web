import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import useUserStore from '../stores/userStore'
import App from '../App'
import Login from '../pages/Login'
import SidebarMenu from '../components/SidebarMenu'
import PostContainer from '../components/PostContainer'
import SidebarContact from '../components/SidebarContact'


const guestRouter = createBrowserRouter([
  { path : '/', element : <Login />},
  { path : '*', element : <Navigate to='/' />},
])

const userRouter = createBrowserRouter([
  { path : '/', element : <App />, 
    children : [
      {index: true, element : <>
        <SidebarMenu />
        <PostContainer/>
        <SidebarContact/>
      </>},
      {path : 'friends', element: <>friends page</>},
      {path : '*', element: <Navigate to='/' /> }
    ]
  },
])

export default function AppRouter() {
  const user =  useUserStore(state => state.user)
  // console.log('user :', user)
  const finalRouter = user ? userRouter : guestRouter
  return (
    <RouterProvider key={user?.id} router={finalRouter} />  
  )
}

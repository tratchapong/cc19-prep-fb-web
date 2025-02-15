import { Outlet } from "react-router";
import useUserStore from "./stores/userStore";
import Header from "./components/Header";


function App() {
  const logout = useUserStore(state=>state.logout)
  const user = useUserStore(state=>state.user)
  return (
    <div className="min-h-screen bg-yellow-100">
        <Header />
      <main className="relative flex bg-gray-100 border pt-14">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

import { Outlet } from "react-router";
import useUserStore from "./stores/userStore";


function App() {
  const logout = useUserStore(state=>state.logout)
  return (
    <div className="min-h-screen bg-yellow-100">
      <p className="text-2xl">Header Menu</p>
      <button onClick={logout} className="btn btn-accent">Logout</button>
      <main className="relative flex bg-gray-100 border pt-14">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

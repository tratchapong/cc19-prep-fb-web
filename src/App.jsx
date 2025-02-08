import { Outlet } from "react-router";


function App() {

  return (
    <div className="min-h-screen bg-yellow-100">
      <p className="text-2xl">Header Menu</p>
      <main className="relative flex bg-gray-100 border pt-14">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

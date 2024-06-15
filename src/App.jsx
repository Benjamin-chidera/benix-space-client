import "./App";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <main className="overflow-hidden text-[#242d49] bg-[#f3f3f3] p-4 h-screen">
      <div className=" absolute w-[22rem] h-[14rem] rounded-[50%] bg-[#a6ddf0] blur top-[-18%] right-0"></div>
      <div className=" absolute w-[22rem] h-[14rem] rounded-[50%] bg-[#a6ddf0] blur top-[36%] left-[-8rem]"></div>
      {/* <Home /> */}
      <Profile />
      {/* <SignUp /> */}
      {/* <Login/> */}
    </main>
  );
}

export default App;

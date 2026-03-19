import Image from "next/image";
import Search from "./components/search/page"
import HomeBut from "./components/Home/page"
import ICON from "./components/Icon/page"
import Login from "./components/Buttons/Login/page"
import Signup from "./components/Buttons/Signup/page"



export default function Home() {
  return (
    <>
    <div className="flex flex-row p-3 justify-between">
      <ICON/>
    <div className="flex p-6 gap-2 items-center justify-center">
      <HomeBut/>
      <Search/>
    </div>
    <div className="flex flex-row items-center">
      <Login/>
      <Signup/>
    </div>
    </div>
    </>
  );
}

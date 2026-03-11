import Image from "next/image";
import Search from "./components/search/page"
import HomeBut from "./components/Home/page"
import ICON from "./components/Icon/page"


export default function Home() {
  return (
    <>
          <ICON/>
    <div className="flex p-6 gap-2 items-center justify-center">
      <HomeBut/>
      <Search/>
    </div>
    </>
  );
}

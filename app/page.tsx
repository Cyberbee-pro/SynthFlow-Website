import Image from "next/image";
import Search from "./components/search/page"

export default function Home() {
  return (
    <>
    <div className="flex align-middle justify-center">
      <Search/>
    </div>
    </>
  );
}

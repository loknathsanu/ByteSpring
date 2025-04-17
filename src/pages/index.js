import Navabar from "@/component/Navabar/Navabar";
import Header from "@/component/Header/Header";
import Ourwork from "@/component/Ourwork/Ourwork";
import WhatWedo from "@/component/WhatWedo/WhatWedo";
import Whoweare from "@/component/Whoweare/Whoweare";
import Ourworkmiddle from "@/component/Ourwork/Ourworkmiddle";
import Ourworklast from "@/component/Ourwork/Ourworklast";

export default function Home() {
  return (
    <>
      <Navabar />
      <Header />
      <Ourwork />
      <Ourworkmiddle />
      <Ourworklast />
      <WhatWedo />
      <Whoweare />
      <WhatWedo />
    </>
  );
}

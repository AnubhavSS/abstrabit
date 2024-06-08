import Answers from "@/components/Answers";
import Charts from "@/components/Charts";
import Finance from "@/components/Finance";
import Header from "@/components/Header";
import KYC from "@/components/KYC";
import Image from "next/image";

export default function Home() {
  return (
   
<>
<Header/>
<div className="w-full flex flex-col justify-center items-center h-full">
<Charts/>

<div className="flex gap-5">
  <div >
<Finance/>
<Answers/>
</div>
<KYC/></div>
</div>
</>
  );
}

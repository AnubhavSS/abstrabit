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
<Charts/>
<div className="flex flex-row flex-1">
  <div >
<Finance/>
<Answers/>
</div>
<KYC/>
</div>
</>
  );
}

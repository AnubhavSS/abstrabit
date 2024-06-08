import Image from "next/image";
import forward from '../../public/forward.png'
import backward from '../../public/backward.png'
const Answers = () => {
  return (
    <div className="ml-10 my-6 w-[822px]">

        {/* Get Answer text */}
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-[24px] text-left font-medium text-[#1A1B1E]">
            Get Answer
          </h1>
          <p className="text-[16px] text-left font-bold text-[#1A1B1E]">
            to all your questions
          </p>
        </div>
        <div className=" flex justify-center items-center gap-4 mr-5 ">
        <Image src={backward} alt="backward" width={14} height={44}/>
         <Image src={forward} alt="forward" width={14} height={44}/>
        </div>
      </div>

<div className="flex items-center justify-start gap-8 mt-6 mr-5">
    <div className="w-[257px] h-[194px] bg-white border border-[#EBEBEB] rounded-[5px]">
<h1 className="text-[20px] font-bold w-[125px] h-[63px] text-[#1A1B1E] mx-4 mt-3">How FDs are taxed</h1>
<p className="font-normal text-left text-[14px] text-[#1A1B1E] mx-4 mt-1 w-[215px] h-[62px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   <p className="text-left text-[14px] font-normal text-[#3B39D9] underline mx-4 mt-3">Read more...</p>
    </div>

    <div className="w-[257px] h-[194px] bg-white border border-[#EBEBEB] rounded-[5px]">
<h1 className="text-[20px] font-bold w-[125px] h-[63px] text-[#1A1B1E] mx-4 mt-3">How FDs are taxed</h1>
<p className="font-normal text-left text-[14px] text-[#1A1B1E] mx-4 mt-1 w-[215px] h-[62px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   <p className="text-left text-[14px] font-normal text-[#3B39D9] underline mx-4 mt-3">Read more...</p>
    </div>

    <div className="w-[257px] h-[194px] bg-white border border-[#EBEBEB] rounded-[5px]">
<h1 className="text-[20px] font-bold w-[125px] h-[63px] text-[#1A1B1E] mx-4 mt-3">How FDs are taxed</h1>
<p className="font-normal text-left text-[14px] text-[#1A1B1E] mx-4 mt-1 w-[215px] h-[62px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   <p className="text-left text-[14px] font-normal text-[#3B39D9] underline mx-4 mt-3">Read more...</p>
    </div>
</div>

    </div>
  );
};

export default Answers;

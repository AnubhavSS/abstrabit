import Image from "next/image";
import utkarsh from "../../public/utkarsh.png";
import bajaj from "../../public/bajaj.png";
import shriram from "../../public/shriram.png";
import mahindra from "../../public/mahindra.png";

const Finance = () => {
  return (
    <div className="ml-10 my-5">
    <div className=" w-[65vw]  grid grid-cols-2  gap-4">

        {/* Utkarsh Finance */}
      <div className="w-[398px] h-[202px] border-4 border-white bg-[#F8F0FF] rounded-[5px] ">
        <div className="flex justify-start m-4 items-center gap-5">
          <Image src={utkarsh} alt="utkarsh" width={49} height={48} />
          <p className="text-left font-bold text-[16px] text-[#1A1B1E]">
            Utkarsh Small Finance Bank
          </p>
        </div>

        <div className="flex item center justify-center gap-2">
          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#EFDDFF] flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#520b8d"
              />
            </svg>
            <p className="text-[14px] text-left font-normal text-[#1A1B1E]">Highest Interest Rate</p>
          </div>

          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#EFDDFF] flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#520b8d"
              />
            </svg>
            <p className="text-[14px] text-left font-normal text-[#1A1B1E]">RBI Insured</p>
          </div>

        </div>

<div className="flex items-center justify-between m-4">
    <div>
        <p className="text-left text-[14px] font-medium text-[#1A1B1E]">Interest Upto</p>
        <p className="text-left text-[14px] font-bold text-[#1A1B1E]">9.10% p.a</p>
    </div>
    <button className="w-[133px] h-[42px] bg-[#520B8D] rounded-[5px] text-white text-center text-[16px] font-medium">Book Now</button>
</div>

      </div>


{/* Bajaj Finserv */}
      <div className="w-[398px] h-[202px] border-4 border-white bg-[#EFF6FF] rounded-[5px] ">
        <div className="flex justify-start m-4 items-center gap-5">
          <Image src={bajaj} alt="utkarsh" width={49} height={48} />
          <p className="text-left font-bold text-[16px] text-[#1A1B1E]">
          Bajaj Finserv
          </p>
        </div>

        <div className="flex item center justify-center gap-2">
          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#0072BB]/10 flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#0072BB"
              />
            </svg>
            <p className="text-[14px] text-left font-normal text-[#1A1B1E]">Crisil AAA Rated</p>
          </div>

          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#0072BB]/10 flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#0072BB"
              />
            </svg>
            <p className="text-[13px] text-left font-normal text-[#1A1B1E]">No Video KYC required</p>
          </div>

        </div>

<div className="flex items-center justify-between m-4">
    <div>
        <p className="text-left text-[14px] font-medium text-[#1A1B1E]">Interest Upto</p>
        <p className="text-left text-[14px] font-bold text-[#1A1B1E]">8.80% p.a</p>
    </div>
    <button className="w-[133px] h-[42px] bg-[#0072BB] rounded-[5px] text-white text-center text-[16px] font-medium">Book Now</button>
</div>

      </div>

      {/* Shriram Finance*/}
      <div className="w-[398px] h-[202px] border-4 border-white bg-[#F4F4F4] rounded-[5px] ">
        <div className="flex justify-start m-4 items-center gap-5">
          <Image src={shriram} alt="shriram" width={49} height={48} />
          <p className="text-left font-bold text-[16px] text-[#1A1B1E]">
          Shriram Finance
          </p>
        </div>

        <div className="flex item center justify-center gap-2">
          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#1A1B1E]/10 flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#1A1B1E"
              />
            </svg>
            <p className="text-[14px] text-left font-normal text-[#1A1B1E]">Crisil AAA Rated</p>
          </div>

          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#1A1B1E]/10 flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#1A1B1E"
              />
            </svg>
            <p className="text-[13px] text-left font-normal text-[#1A1B1E]">No Video KYC required</p>
          </div>

        </div>

<div className="flex items-center justify-between m-4">
    <div>
        <p className="text-left text-[14px] font-medium text-[#1A1B1E]">Interest Upto</p>
        <p className="text-left text-[14px] font-bold text-[#1A1B1E]">8.80% p.a</p>
    </div>
    <button className="w-[133px] h-[42px] bg-[#010101] rounded-[5px] text-white text-center text-[16px] font-medium">Book Now</button>
</div>

      </div>


            {/* Mahindra Finance*/}
            <div className="w-[398px] h-[202px] border-4 border-white bg-[#FFEFEF] rounded-[5px] ">
        <div className="flex justify-start m-4 items-center gap-5">
          <Image src={mahindra} alt="mahindra" width={49} height={48} />
          <p className="text-left font-bold text-[16px] text-[#1A1B1E]">
          Mahindra Finance
          </p>
        </div>

        <div className="flex item center justify-center gap-2">
          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#FF0000]/10 flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#FF0000"
              />
            </svg>
            <p className="text-[14px] text-left font-normal text-[#1A1B1E]">Crisil AAA Rated</p>
          </div>

          <div className="w-[172px] h-[35px] rounded-[5px] bg-[#FF0000]/10 flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                id="Icon_awesome-check-circle"
                data-name="Icon awesome-check-circle"
                d="M16.562,8.562a8,8,0,1,1-8-8A8,8,0,0,1,16.562,8.562ZM7.637,12.8l5.935-5.935a.516.516,0,0,0,0-.73l-.73-.73a.516.516,0,0,0-.73,0L7.272,10.244l-2.26-2.26a.516.516,0,0,0-.73,0l-.73.73a.516.516,0,0,0,0,.73L6.907,12.8a.516.516,0,0,0,.73,0Z"
                transform="translate(-0.563 -0.563)"
                fill="#FF0000"
              />
            </svg>
            <p className="text-[13px] text-left font-normal text-[#1A1B1E]">No Video KYC required</p>
          </div>

        </div>

<div className="flex items-center justify-between m-4">
    <div>
        <p className="text-left text-[14px] font-medium text-[#1A1B1E]">Interest Upto</p>
        <p className="text-left text-[14px] font-bold text-[#1A1B1E]">8.80% p.a</p>
    </div>
    <button className="w-[133px] h-[42px] bg-[#FF0000] rounded-[5px] text-white text-center text-[16px] font-medium">Book Now</button>
</div>

      </div>

    </div></div>
  );
};

export default Finance;

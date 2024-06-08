"use client"
import { PieChart ,pieArcLabelClasses} from '@mui/x-charts/PieChart';
import Image from 'next/image';
import timeline from '../../public/timeline.png'
const Charts = () => {
  const pieParams = { height: 200,  }
  const data = [
    {  value: 25000, color: '#6C63FF' },
    { value: 20000, color: '#FA9D17' },
    { value: 15000, color: '#B9C606' },
    { value: 40000, color: '#59CBD3' },
  ];

  return (
    <div className='ml-20'>

<h1 className='font-medium text-[24px] text-[#1A1B1E] my-5 mx-10'>Welcome, Johan Paul</h1>
<div className="flex flex-row items-center w-[1366px]">
 
<div className='w-[398px] h-[286px] bg-white border border-[#EBEBEB] rounded-[5px] my-5 mx-10'>
  <h1 className="font-bold text-[16px] text-[#1A1B1E] m-5">Your FD Portfolio</h1>
  <div className='flex items-center justify-center'>
  <PieChart
          series={[
            { data: data ,arcLabel: (item) => `${item.value} (${(item.value/100000)*100}%)`, arcLabelMinAngle: 45},
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'medium',
              fontSize:'10px'
            },
          }}
          {...pieParams}
        />
        <div className='flex flex-col items-start '>

<div className='flex justify-center items-center gap-4'>
  <div className='w-[8px] h-[8px] rounded-full bg-[#6C63FF]'/>
  <p className='text-[14px] font-normal text-left text-[#1A1B1E]'>Bajaj Finserv</p>
</div>

<div className='flex justify-center items-center gap-4'>
  <div className='w-[8px] h-[8px] rounded-full bg-[#FA9D17]'/>
  <p className='text-[14px] font-normal text-left text-[#1A1B1E]'>Shriram Finance</p>
</div>

<div className='flex justify-center items-center gap-4'>
  <div className='w-[8px] h-[8px] rounded-full bg-[#B9C606]'/>
  <p className='text-[14px] font-normal text-left text-[#1A1B1E]'>Mahindra Finance</p>
</div>

<div className='flex justify-center items-center gap-4'>
  <div className='w-[8px] h-[8px] rounded-full bg-[#59CBD3]'/>
  <p className='text-[14px] font-normal text-left text-[#1A1B1E]'>Utkarsh Small Finance Bank</p>
</div>
</div>
        </div>
</div>

{/* Timeline chart */}
<div className="w-[822px] h-[286px] bg-white border border-[#EBEBEB] -ml-3">
<h1 className="font-bold text-[16px] text-[#1A1B1E] m-5">FD Maturity Timeline</h1>
<Image src={timeline} alt='timeline' width={729} height={169} className='mx-auto'/>
</div>
</div>
    </div>
  )
}

export default Charts
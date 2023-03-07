import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
function Downlaod() {
    // TO DOWNLOAD FULL PAGE
    // const handleCaptureClick = async () => {
    //     const canvas = await html2canvas(document.body);
    //     const dataURL = canvas.toDataURL('image/png');
    //     downloadjs(dataURL, 'download.png', 'image/png');
    // };

    const handleCaptureClick = async () => {
        const pricingTableElmt =
            document.querySelector('.download-image');
        if (!pricingTableElmt) return;

        const canvas = await html2canvas(pricingTableElmt);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
    };
    return (
        <>
            <div className='grid place-items-center h-screen border-2 border-l-gray-900'>
                <div className='download-image'>
                    <div className='p-20 border-2 border-cyan-500'>
                    <div className='w-96 p-10 h-[15rem] shadow-2xl relative flex items-center'>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero placeat praesentium rerum excepturi inventore culpa harum. Facere, illum distinctio.</p>

                        <FaQuoteLeft size={'3rem'} className='top-[-10px] left-0 absolute' />
                        <FaQuoteRight size={'3rem'} className='bottom-[-10px] right-0 absolute' />
                    </div></div>
  <div className='flex flex-row gap-8 mt-10 '>
                        <button className='border-8 px-10 py-3 text-xl font-extrabold rounded-2xl border-sky-500' onClick={handleCaptureClick}>
                        Download Image</button>
                  
                        <button className='border-8 border-sky-500 px-10 py-3 text-xl font-extrabold bg-sky-500 rounded-2xl ' onClick={handleCaptureClick}>
                            Tweet Quote</button>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Downlaod
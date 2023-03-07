import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default function Openai() {
    const divRef = useRef();

    const handleDownload = () => {
        html2canvas(divRef.current).then(function (canvas) {
            canvas.toBlob(function (blob) {
                saveAs(blob, "my-div.jpeg");
            })
        });
    };

    return (
        <div>


            <div className="w-fit" ref={divRef}>

                <div className='flex flex-col justify-center items-center w-[30rem]  p-8 shadow-xl'>
                    <p className='text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos totam, est perferendis aliquam soluta ipsum odit, molestiae voluptatem, rerum doloribus sunt. Enim, natus? Esse, consequuntur mollitia quia eos tempore consequatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptas maxime, quas at harum facere animi pariatur nisi deleniti minima cumque dignissimos aspernatur velit eligendi veniam non neque eaque voluptate. tenetur quaerat maiores est temporibus? Accusamus quis quas eum?</p>
                    <h2 className='font-semibold text-lg '>Winifred</h2>
                    <p className=' text-xs' >patient</p>
                </div>



            </div >







            <button onClick={handleDownload}>Download as PNG</button>
        </div >
    );
}

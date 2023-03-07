import React from 'react'
import Headings from '../SingleComponent/Headings'
import faqs from './FAQdata'
import FAQpage from './FAQpage';
function OurCustomer() {
    return (
        <section className='mt-[80px] pt-[49px]'>
            <Headings text='Who we serve' />
            <ul className='text-[28px] text-[#333333] flex justify-between capitalize mt-[128px] text-center'>
                <li className='w-[328px]'>private & public hospitals</li>
                <li>laboratories</li>
                <li>healthcare facilities</li>
            </ul>

            {/* USE HOC HERE */}
            <div className='mb-[85px]'>
                <Headings text='Frequently Asked Questions' />
            </div>


            <div>
                {faqs.map(({ index, question, answer }) => (

                    <FAQpage question={question} answer={answer} key={index} />
                ))}
            </div>






        </section>
    )
}

export default OurCustomer







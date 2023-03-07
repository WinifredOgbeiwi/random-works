import React, { useState } from "react";

const FAQpage = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-[#E7F5F9] px-6 py-3 mb-4 rounded-lg'>
            <div className='flex justify-between items-center ' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='mt-[85]text-[#333333] text-2xl font-normal'>{question}</h3>
                <button className="text-2xl">{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && <p className="accordion-answer">{answer}</p>}
        </div>
    );
};

export default FAQpage;


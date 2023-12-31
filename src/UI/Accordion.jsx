import React, { useState } from 'react';
import { accordionItems } from "../Constants/data"
import AccordionItem from './AccordionItem';

const Accordion = () => {

    const [clicked, setClicked] = useState('0');

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index)
    };

    return (
        <ul>
            {accordionItems.map((faq, index) => (
                <AccordionItem key={index} faq={faq} 
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                />
            ))}
        </ul>
    )
}

export default Accordion

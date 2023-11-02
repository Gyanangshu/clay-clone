import React from 'react'
import AccordionSmallItem from './AccordionSmallItem';
import {accordionSmall} from "../Constants/data"

const AccordionSmall = () => {

    const [clicked, setClicked] = React.useState('0');

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked('0');
        }
        setClicked(index)
    };
    return (
        <ul>
            {accordionSmall.map((service, index) => (
                <AccordionSmallItem key={index} service={service}
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                />
            ))}
        </ul>
    )
}

export default AccordionSmall

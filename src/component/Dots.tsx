import  { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
const calculateDotCount = (viewportWidth:number) => {
    if (viewportWidth < breakpoints[0]) {
        return 1;
    } else if (viewportWidth < breakpoints[1]) {
        return 2;
    } else{
        return 3;
    }
};
const Dots = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const dotCount = calculateDotCount(viewportWidth);

    const dots = Array.from({ length: dotCount }, (_, index) => (
        <div
            key={index}
            css={mq({
                width: '10px',
                height: '10px',
                borderRadius: '100%',
                backgroundColor: ['red', 'green', 'blue'][index],
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                margin:'5px'
            })}
        />
    ));

    const containerStyles = css`
    margin-top: 10px;
    display: flex;
    align-items: center;
      justify-content: center;
    `

    return (
        <div css={containerStyles}>
            {dots}
        </div>
    );
};

export default Dots;

import  { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
const calculateDotCount = (viewportWidth:number) => {
    if (viewportWidth < breakpoints[0]) {
        return 1;
    } else if (viewportWidth < breakpoints[1]) {
        return 2;
    } else if (viewportWidth < breakpoints[2]) {
        return 3;
    } else {
        return 4;
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
                width: '40px',
                height: '40px',
                borderRadius: '100%',
                backgroundColor: ['green', 'gray', 'hotpink', 'red'][index],
                marginRight:'10px',
            })}
        />
    ));

    const containerStyles = css`
    margin-top: 10px;
    display: flex;`

    return (
        <div css={containerStyles}>
            {dots}
        </div>
    );
};

export default Dots;

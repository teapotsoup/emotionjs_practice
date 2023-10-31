import { css } from '@emotion/react';


const Adjustbar  = () => {
    return <div
        css={css`
        width: 1000px;
        background-color: dimgray;
        color: white;
        @media (min-width: 1400px) {
          width: 400px;
        }
    `}
    >
        Some text!
    </div>;
};

export default Adjustbar;
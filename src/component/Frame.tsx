import { css } from '@emotion/react';
import {ReactNode} from "react";


interface Frameinterface {
    children : ReactNode
}

const Frame: React.FC<Frameinterface>  = ({children}) => {
    return <div
        css={css`
        width: 700px;
        height: 900px;
        background-color: #cfcfcf;
        border-radius: 20px 20px 50px 9px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
    >
        {children}
    </div>;
};

export default Frame;
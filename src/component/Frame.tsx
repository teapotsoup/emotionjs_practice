import { css } from '@emotion/react';
import {ReactNode} from "react";


interface Frameinterface {
    children : ReactNode
}

const FrameCase = css`
  width: 560px;
  height: 820px;
  background: linear-gradient(90deg,#cfcfcf 0.1%, #E9EBED 2.9%, #cfcfcf 97%);
  border-radius: 5px 5px 150px 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`


const Frame: React.FC<Frameinterface>  = ({children}) => {
    return <div
        css={FrameCase}
    >
        {children}
    </div>;
};

export default Frame;
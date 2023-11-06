import { css } from '@emotion/react';
import {ReactNode} from "react";

interface Buttonwrapperoneinterface{
    children:ReactNode[];
}

const TwoBtnWrapperStyle = css`
  display: flex; 
  justify-content: space-between; 
  width: 100%;
`

const Buttonwrapperone: React.FC<Buttonwrapperoneinterface> = ({ children }) => {
    return <div css={TwoBtnWrapperStyle}>
        {children}
    </div>;
};

export default Buttonwrapperone;
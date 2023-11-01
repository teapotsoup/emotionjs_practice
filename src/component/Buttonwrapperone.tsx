import { css } from '@emotion/react';
import {ReactNode} from "react";

interface Buttonwrapperoneinterface{
    children:ReactNode[];
}

const Buttonwrapperone: React.FC<Buttonwrapperoneinterface> = ({ children }) => {
    return <div css={css`display: flex; justify-content: space-between; width: 100%`}>
        {children}
    </div>;
};

export default Buttonwrapperone;
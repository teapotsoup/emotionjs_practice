import { css } from '@emotion/react'
import {ReactNode} from "react";

interface ComponentWrapperinterface{
    children: ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperinterface>  = ({children}) => {
    return (
        <div css={css`display: flex;flex-direction: column; width: 610px; margin-top: 10px`}>
            {children}
        </div>
    )
}
export default ComponentWrapper;
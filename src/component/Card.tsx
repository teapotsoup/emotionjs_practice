import { css } from '@emotion/react'
import {ReactNode} from "react";

const cardCss = {
    self: css({
        backgroundColor: '#6e7882',
        padding: '1rem',
        width:'600px',
        height:'400px',
        borderRadius: '20px 20px 50px 9px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }),
}
interface CardinterFace {
    title : ReactNode
    children : ReactNode
}

 const Card: React.FC<CardinterFace> = ({ title, children }) => {
    return (
        <div css={css`display: flex; justify-content: center`}>
            <div css={cardCss.self}>
                {title}
                {children}
            </div>
        </div>

    )
}
export default Card;
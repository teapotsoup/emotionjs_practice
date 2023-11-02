import { css } from '@emotion/react'
import {ReactNode} from "react";

const cardCss = {
    self: css({
        backgroundColor: '#6e7882',
        padding: '1rem',
        width:'600px',
        height:'380px',
        borderRadius: '20px 20px 50px 9px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'3px solid #BBB6B6',
        boxShadow: 'inset 3px 3px 3px #5C5B5B',
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
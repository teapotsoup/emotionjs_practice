import { css } from '@emotion/react'
import {ReactNode} from "react";

const cardCss = {
    self: css({
        backgroundColor: '#6e7882',
        padding: '1rem',
        marginBottom: '10px',
        width:'600px',
        height:'500px',
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
        <div css={cardCss.self}>
            {title}
            {children}
        </div>
    )
}
export default Card;
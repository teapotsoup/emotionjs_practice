import { css } from '@emotion/react'
import {ReactNode} from "react";

const cardCss = {
    self: css({
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '0.5rem',
        padding: '1rem'
    }),

    title: css({
        fontSize: '1.25rem'
    })
}
interface CardinterFace {
    title : string
    children : ReactNode
}

 const Card: React.FC<CardinterFace> = ({ title, children }) => {
    return (
        <div css={cardCss.self}>
            <h5 css={cardCss.title}>{title}</h5>
            {children}
        </div>
    )
}
export default Card;
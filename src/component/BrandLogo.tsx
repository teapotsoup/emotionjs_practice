import { css } from '@emotion/react'
import {Color} from "../styles/theme";

const textColor = css`
  color: ${Color.BlueColor} ;
`
const nintendoStyle = css`
  font-family: "Nintendo" ;
  font-size: 20px;
  margin-top: 20px;
`
const gameBoyStyle = css`
  font-family: "GillSansMediumItalic" !important;
  margin-left: 5px;
  font-size: 40px;
`
const tmStyle = css`
  font-family: "GillSansMedium" !important;
  font-size: 12px;
  margin-top: 25px;
`

const Card = () => {
    return (
            <div css={css`display: flex; margin-bottom: 40px`}>
                <div css={[textColor,nintendoStyle]}>
                    Nintendo
                </div>
                <div css={[textColor,gameBoyStyle]}>
                    GAME BOY
                </div>
                <div css={[textColor,tmStyle]}>
                    TM
                </div>
            </div>
    )
}

export default Card;
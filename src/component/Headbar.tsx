import { css } from '@emotion/react'
import { HeadbarProps} from "./type/props";

const titleStyle = css`
  color: #04aa6d;
  font-size: 50px;
  font-weight: bolder;
`

const contextStyle = css`
  color: #04aa6d;
  font-size: 20px;
  font-weight: normal;
`

const titleBackGroundStyle = css`
  background-color: dimgray;
`

const contextBackGroundStyle = css`
  background-color: grey;
`

const Headbar: React.FC<HeadbarProps> = ({ title, context })=>{
    return <div>
        <div css={[titleStyle,titleBackGroundStyle]}>{title}</div>
        <div css={[contextStyle, contextBackGroundStyle]}>
            {context}
        </div>
    </div>
}
export default Headbar;
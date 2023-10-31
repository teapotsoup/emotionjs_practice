import { css } from '@emotion/react'
import { ContextProps} from "./type/props";

const paragraph = css`
  color: turquoise;

  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`

const Context: React.FC<ContextProps> = ({text})=> (
    <p css={paragraph}>
        {text}<a>A link with a bottom border.</a>
    </p>
);


export default Context;
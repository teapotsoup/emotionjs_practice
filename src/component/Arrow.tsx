/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const rightArrowStyle = css`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom:5px solid transparent;
  border-left: 10px solid #cfcfcf;
  boxShadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 10px rgba(0, 0, 0, 0.08),
`;

const leftArrowStyle = css`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom:5px solid transparent;
  border-right: 10px solid #cfcfcf;
  boxShadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 10px rgba(0, 0, 0, 0.08),
`;

interface Arrowinterface {
    isRight:boolean;
}

const Arrow: React.FC<Arrowinterface> = ({isRight}) =>{
    return isRight ?  <div css={rightArrowStyle} /> : <div css={leftArrowStyle} />;
}

export default Arrow;
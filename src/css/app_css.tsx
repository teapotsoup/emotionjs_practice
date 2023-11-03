import { css } from '@emotion/react';

export const WholeWrapper  = css`
  display: flex;
  justify-content: center
`

export const GameConsoleWrapper = css`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  margin-top: 20px
`;

export const BtnWrapper = css`
  transform: rotate(-30deg); 
  margin-top:35px; 
  position: relative; 
  z-index:1; 
  display:flex; 
  justify-content: center;
`;

export const Oval = css`
  width: 180px;
  height: 70px; 
  border-radius: 30px; 
  box-shadow:inset 3px 3px 3px  #BBB6B6;
`;

export const PurpleBtnWrapper = css`
  display:flex;  
  position: absolute; 
  z-index:2;
`;

export const BottomWrapper = css`
  margin-left:190px; 
  display:flex
`
export const PillBtnsWrapper = css`
  margin-top:25px; 
  display:flex
`

export const SixSticksWrapper = css`
  margin-left:100px; 
  margin-top:30px
`
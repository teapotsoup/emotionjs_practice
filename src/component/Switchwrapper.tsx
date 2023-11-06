import {css} from '@emotion/react'
import {SwitchwrapperProps} from "./type/props";
import Arrow from "./Arrow";

const switchcover = css`
  margin-top: 10px;
  margin-left: 10px;
  width: 100px;
  height: 30px;
  background-color: #e0e1e2;
  box-shadow: inset 3px 3px 3px #BBB6B6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  padding: 0px 2px 0px 2px;
  span {
    cursor: pointer;
    font-size: 12px;
    color: #BBB6B6;
  }
`

const dot = css`
  width: 8px;
  height: 8px;
  background-color: lightgrey; 
  boxShadow: 0 2px 3px rgba(50, 50, 93, 0.11), 0 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 100%;
`

const Switchwrapper: React.FC<SwitchwrapperProps> = ({off, on}) => (
    <div css={switchcover}>
        <Arrow isRight={false}/>
        <span>{off}</span>
        <div css={dot}/>
        <span>{on}</span>
        <Arrow isRight={true}/>
    </div>
);


export default Switchwrapper;
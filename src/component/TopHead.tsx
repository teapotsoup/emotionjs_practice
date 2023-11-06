import styled from "@emotion/styled";
import {css} from "@emotion/react";
import Switchwrapper from "./Switchwrapper";

const WholeWrapperStyle = css`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`

const HeadWrapperStyle = css`
  width: 580px; 
  display: flex; 
  justify-content: space-evenly; 
  position: absolute;
  margin-top:-12px
`

const UpperBase = styled.div`
  width: 550px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D2D5D7;
  position: relative;
`
const MiddleCompStyle = css`
  width:445px; 
  height:50px;  
  border-radius:10px 10px 10px 10px; 
  background-color: #e0e1e2; 
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const SideCompStyle = styled("div")`
  width:50px;
  height:50px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

const LeftCompStyle = styled(SideCompStyle)`
  border-radius:20px 10px 10px 10px;
  background:linear-gradient(90deg,#e0e1e2 0.1%, #E9EBED 2.9%, #e0e1e2 97%);
`;

const RightCompStyle = styled(SideCompStyle)`
  border-radius:10px 20px 10px 10px;
  background-color: #e0e1e2;
`;

const TopHead = () => (
    <div css={WholeWrapperStyle}>
        <UpperBase/>
        <div
            css={HeadWrapperStyle}>
            <LeftCompStyle/>
            <div css={MiddleCompStyle}>
                <Switchwrapper off="OFF" on="ON"/>
            </div>
            <RightCompStyle/>
        </div>
    </div>
);

export default TopHead;
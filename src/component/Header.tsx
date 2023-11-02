import styled from "@emotion/styled";
import {css} from "@emotion/react";
import Switchwrapper from "./Switchwrapper";

const UpperBase = styled.div`
  width: 690px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D2D5D7;
  position: relative;
`
const Header = () => (
    <div css={css(`display: flex; flex-direction: column; align-items: center;`)}>
        <UpperBase/>
        <div
            css={css(`width:715px; display: flex; justify-content: space-evenly; position: absolute; margin-top:-12px`)}>
            <div
                css={css(`width:50px; height:50px;  border-radius:30px 10px 10px 10px; background:linear-gradient(90deg,#e0e1e2 0.1%, #E9EBED 2.9%, #e0e1e2 97%); box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);`)}/>
            <div css={css(`width:590px; height:50px;  border-radius:10px 10px 10px 10px; background-color: #e0e1e2; box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);`)}>
                <Switchwrapper off="OFF" on="ON"/>
            </div>
            <div css={css(`width:50px; height:50px;  border-radius:10px 30px 10px 10px; background-color: #e0e1e2; box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);`)}/>
        </div>
    </div>
);

export default Header;
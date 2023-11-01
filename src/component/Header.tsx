import styled from "@emotion/styled";
import Switchwrapper from "./Switchwrapper";
import {css} from "@emotion/react";

const UpperRow = styled.div`
  width:630px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Column = styled.div`
  height: 40px;
  width: 10px;
  background-color: #BBB6B6;
  box-shadow:inset 1px 1px 1px dimgray;
`
const Header= ()=> (
        <UpperRow>
            <div css={css`display: flex; align-items: center; justify-content: space-between; width: 120px; `}>
                <Column/>
                <Switchwrapper off = "OFF" on = "ON"/>
            </div>
                <Column/>
        </UpperRow>
);


export default Header;
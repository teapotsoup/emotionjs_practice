import { css } from '@emotion/react'
import styled from "@emotion/styled";

const UpperRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const LowerRow = styled.div`
  width: 100%;
  height: 5px;
  background-color: #BBB6B6;
`

const Column = styled.div`
  height: 15px;
  width: 5px;
  background-color: #BBB6B6;
`

const Header= ()=> (
    <div css={css`width: 100%; margin-bottom: 10px`}>
        <UpperRow>
            <Column/>
            <Column/>
        </UpperRow>
        <LowerRow/>
    </div>
);


export default Header;
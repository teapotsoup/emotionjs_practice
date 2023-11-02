import { css } from '@emotion/react';
import styled from "@emotion/styled";


const Screen  = () => {
    return(
        <ScreenWrapper>
            <div>
                <Lamp/>
                <Battery>
                    BATTERY
                </Battery>
            </div>
            <div
                css={css`
                background: linear-gradient(90deg, black 0.1%,#3C4400 2.9% ,#6c7a00 97%);
                width:400px;
                height:310px;
                border-radius: 3px 3px 3px 3px;
                margin-top: 10px;
        `}
            />
        </ScreenWrapper>
        )

    ;
};

const ScreenWrapper = styled.div`
    display: flex;
    width: 100%;
`

const Lamp = styled.div`
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background: linear-gradient(170deg, black 20%, #525357 80%);
  margin-top: 110px;
  margin-left: 10px;
  margin-right: 60px;
  margin-bottom: 10px;
`
const Battery = styled.div`
  color:#d3cece;
  font-size: 14px;
`

export default Screen;
import { css } from '@emotion/react';
import styled from "@emotion/styled";
import Dots from "./Dots";
import Animation from "./Animation";


const Screen  = () => {
    return(
        <ScreenWrapper>
            <div>
                <Lamp/>
                <Battery>
                    BATTERY
                </Battery>
            </div>
            <div css={css`width:290px;height:290px; margin-top: 2px; display: flex;align-items: center;justify-content: center; position: relative`}>
                <div css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                          z-index: 3;
                `}>
                    <Animation/>
                    <Dots/>
                </div>
                <div
                css={css`
                background: linear-gradient(180deg, black 0.1%, rgb(255,255,255,0.1) 2.9% , rgb(255,255,255,0.1) 93%);
                width:290px;
                height:290px;
                border-radius: 3px 3px 3px 3px;
                position: absolute;
                z-index: 2;
        `}
                >
                </div>
                <div
                css={css`
                background: linear-gradient(90deg, black 0.5%,#3C4400 4.5% ,#6c7a00 95%);
                width:290px;
                height:290px;
                border-radius: 3px 3px 3px 3px;
                position: absolute;
                z-index: 1;
        `}
                />
            </div>

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
  width: 13px;
  height: 13px;
  background: linear-gradient(170deg, black 20%, #525357 80%);
  margin-top: 90px;
  margin-left: 10px;
  margin-right: 40px;
  margin-bottom: 10px;
  @media (min-width: 1400px) {
    background: linear-gradient(170deg, red 20%, #525357 80%);
  }
`
const Battery = styled.div`
  color:#d3cece;
  font-size: 13px;
`

export default Screen;
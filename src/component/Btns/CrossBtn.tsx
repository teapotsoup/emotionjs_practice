import { css } from '@emotion/react';
import styled from "@emotion/styled";
import Arrow from "../Arrow";

const WrapperStyle = css`
  width: 145px;
  height: 145px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid #d1d4d6;
  box-shadow: inset 0.001px 0.001px 0.1px 0.1px #BBB6B6;
  position: relative;
`

const VerticalArrowWrapperStyle = css`
  height: 145px;
  width: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
`

const horizontalArrowWrapperStyle = css`
  width: 145px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
`
const horizontalBaseStyle = css`
  width:115px;
  height: 45px;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
`;

const VerticalBaseStyle = css`
  width: 45px;
  height: 115px;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 4;
`;

const VerticalElementStyle = css`
  width: 35px;
  height: 100px;
  border-right: 1px solid #282727;
  border-left: 1px solid white;
  border-top:  1px solid #282727;
  border-bottom:  1px solid #282727;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

const horizontalElementStyle = css`
  width: 100px;
  height: 30px;
  border-left: 1px solid white;
  border-radius: 5px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  z-index: 6;
`;

const UpwardArrow = ()=>(
    <div
        css = {{
            width: 0,
            height: 0,
            borderRight:'5px solid transparent',
            borderLeft: '5px solid transparent',
            borderBottom:'10px solid #cfcfcf',
            display:'flex',
            justifyContent:'center'
        }}
    />
)


export const DownwardArrow = ()=>(
    <div
        css = {{
            width: 0,
            height: 0,
            borderRight:'5px solid transparent',
            borderLeft: '5px solid transparent',
            borderTop: '10px solid #cfcfcf ',

        }}
    />
)


const StickStyle = styled("div")`
  background-color: #282727; border-radius: 15px;
`

const HorizontalStick = styled(StickStyle)`
  width: 7px; height: 28px;
`

const  VerticalStick = styled(StickStyle)`
  width: 28px; height: 7px;
`

const CircleStyle = css`
  width: 27px; height: 27px; background: linear-gradient(270deg,#282727 25%, #cfcfcf 20%, #282727 55%); border-radius: 100%;
  border-right: 1px solid white;
`

const CrossBtn = () => {
    return(
        <div css={WrapperStyle}>
            <div css={horizontalArrowWrapperStyle}>
                <Arrow isRight={false}/>
                <Arrow isRight={true}/>
            </div>
            <div css={VerticalArrowWrapperStyle}>
                <UpwardArrow/>
                <DownwardArrow/>
            </div>
            <div css={horizontalBaseStyle}/>
            <div css={VerticalBaseStyle}/>
            <div css={VerticalElementStyle}>
                <VerticalStick/>
                <VerticalStick/>
                <VerticalStick/>
                <div css={CircleStyle}/>
                <VerticalStick/>
                <VerticalStick/>
                <VerticalStick/>
            </div>
            <div css={horizontalElementStyle}>
                <HorizontalStick/>
                <HorizontalStick/>
                <HorizontalStick/>
                <div css={CircleStyle}/>
                <HorizontalStick/>
                <HorizontalStick/>
                <HorizontalStick/>
            </div>
        </div>
    )
};

export default CrossBtn;
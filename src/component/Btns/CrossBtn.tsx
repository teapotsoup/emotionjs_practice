import { css } from '@emotion/react';

const WrapperStyle = css`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid #d1d4d6;
  box-shadow: inset 2px 2px 2px #BBB6B6;
`

const horizontalBaseStyle = css`
  width: 140px;
  height: 60px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

const horizontalElementStyle = css`
  width: 130px;
  height: 40px;
  border-right: 1px solid #282727;
  border-left: 1px solid white;
  border-top:  1px solid #282727;
  border-bottom:  1px solid #282727;
  border-radius: 10px;
`;

const VerticalBaseStyle = css`
  width: 60px;
  height: 140px;
  background-color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const VerticalElementStyle = css`
  width: 50px;
  height: 130px;
  border-right: 1px solid #282727;
  border-left: 1px solid white;
  border-top:  1px solid #282727;
  border-bottom:  1px solid #282727;
  border-radius: 10px;
`;

const CrossBtn = () => {
    return(
        <div css={WrapperStyle}>
            <div css={horizontalBaseStyle}>
                <div css={horizontalElementStyle}>
                    <div css={css`display: flex; align-items: center; justify-content: space-evenly; height: 100%`}>
                        <div css={css`width: 10px; height: 35px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 10px; height: 35px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 10px; height: 35px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 30px; height: 30px; background: linear-gradient(90deg,#282727 50%, white 10%, #282727 40%); border-radius: 100%`}/>
                        <div css={css`width: 10px; height: 35px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 10px; height: 35px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 10px; height: 35px; background-color: #282727; border-radius: 15px`}/>
                    </div>
                </div>
            </div>
            <div css={VerticalBaseStyle}>
                <div css={VerticalElementStyle} >
                    <div css={css`display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; height: 100%`}>
                        <div css={css`width: 35px; height: 10px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 35px; height: 10px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 35px; height: 10px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 30px; height: 30px; background: linear-gradient(90deg,#282727 50%, white 10%, #282727 40%); border-radius: 100%`}/>
                        <div css={css`width: 35px; height: 10px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 35px; height: 10px; background-color: #282727; border-radius: 15px`}/>
                        <div css={css`width: 35px; height: 10px; background-color: #282727; border-radius: 15px`}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CrossBtn;
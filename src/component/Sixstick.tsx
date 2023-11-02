import {css} from "@emotion/react";


const StickStyle = css`
  width: 15px;
  height: 90px;
  border-radius: 20px;
  background-color: #BBB6B6;
  margin-right: 15px;
  box-shadow:inset 3px 3px 3px #333;
`;

const StickCover = css`
  display: flex;
  transform: rotate(-30deg);
`;

const Sixstick  = () => {
    return <div css={StickCover} >
        <div css={StickStyle}/>
        <div css={StickStyle}/>
        <div css={StickStyle}/>
        <div css={StickStyle}/>
        <div css={StickStyle}/>
        <div css={StickStyle}/>
    </div>;
};

export default Sixstick;
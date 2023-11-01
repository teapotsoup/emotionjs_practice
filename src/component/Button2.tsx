import { css } from '@emotion/react';

const crossStyle = css`
  top:80px;
  width: 100px; /* 십자가의 가로 길이 */
  height: 20px; /* 십자가의 세로 길이 */
  background-color: black; /* 십자가의 색상 */
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: black; /* 십자가의 색상 */
  }

  &::before {
    width: 25px; /* 수직 막대의 가로 길이 */
    height: 100px; /* 수직 막대의 세로 길이 */
    left: 38px; /* 가로 중앙 정렬을 위한 위치 조정 */
    top: -40px; /* 수직 막대의 위치 조정 */
  }
`;

const Button2 = () => {
    return <div css={crossStyle}/>;
};

export default Button2;
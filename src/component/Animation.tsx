import { css, keyframes } from '@emotion/react';
import dot_mario  from '../images/dot_mario.png';

const breakpoints = [576, 768, 992];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Animation = () => {
    return (
        <div
            css={css`
        animation: ${keyframes`
          from, 20%, 53%, 80%, to {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        `} 1s ease infinite;
        ${mq[0]} {
          color: red;
        }
        ${mq[1]} {
          color: green;
        }
        ${mq[2]} {
          color: blue;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
        >
            <img src={dot_mario} alt="mario"  width='32' height='32' />
                Loading!
        </div>
    );
};

export default Animation;

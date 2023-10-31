import { css } from '@emotion/react';


const Screen  = () => {
    return <div
        css={css`
          background: linear-gradient(217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ), linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
          
          // #6c7a00;
          width:400px;
        height:200px;
                border-radius: 20px 20px 50px 9px;
                margin-top: 10px;
        `}
    />;
};

export default Screen;
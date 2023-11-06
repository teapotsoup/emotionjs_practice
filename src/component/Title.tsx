import { css } from '@emotion/react';
import styled from "@emotion/styled";
import {Color} from "../styles/theme"

const Line = styled("hr")`
    height:3px; 
    width:98%; 
    position:relative;
    border:0;
    margin: 0 0 7px 0;
`;

const Blueline = styled(Line)`
  background-color: ${Color.BlueColor} ;
`;

const Purpleline = styled(Line)`
  background-color:${Color.PurpleColor};
`;


const titleCss = {
    cover: css({
        width:"420px",
        position:'absolute',
    }),

    titleWrapper : css({
        display:"flex",
        justifyContent:'flex-end',
        position:"relative",
    }),

    title : css({
        color:'#d3cece',
        fontSize:"13px",
        height:"30px",
        backgroundColor:'#6e7882',
        paddingRight:'10px',
        paddingLeft:'10px',
        top:'-4px',
        left:'135px',
        fontFamily: "GillSansMedium",
        position:"absolute",
    })
}
const Title  = () => {
    return(
        <>
            <Purpleline/>
            <Blueline/>
            <div css={titleCss.cover}>
                <div css={titleCss.titleWrapper}>
                    <div css={titleCss.title}>
                        DOT MATRIX WITH STEREO SOUND
                    </div>
                </div>
            </div>

        </>
    )
};


export default Title;
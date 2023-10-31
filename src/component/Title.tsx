import { css } from '@emotion/react';

const titleCss = {

    // lineWrapper:css({
    //    position:"relative"
    // }),

    blueline:css({
        height:'5px',
        width:'100%',
        backgroundColor:'#3f4190',
        position:"relative",
        border:0,
    }),

    purpleline :css({
        height:'5px',
        width:'100%',
        backgroundColor:'#8f2263',
        marginBottom: '0px',
        position:"relative",
        border:0,
    }),

    cover: css({
        width:"420px",
        position:'absolute'
    }),

    titleWrapper : css({
        display:"flex",
        justifyContent:'flex-end',
    }),

    title : css({
        color:"white",
        fontSize:"15px",
        height:"20px",
        alignItems:'center',
        backgroundColor:'#6e7882',
        paddingRight:'10px',
        paddingLeft:'10px',
        paddingBottom:'7px',
    })
}
const Title  = () => {
    return <>
            <hr css={titleCss.purpleline}/>
            <hr css={titleCss.blueline}/>
        <div css={titleCss.cover}>
            <div css={titleCss.titleWrapper}>
                <div css={titleCss.title}>
                    {"DOT MATRIX WITH STEREO SOUND"}
                </div>
            </div>
        </div>



    </>;
};

export default Title;
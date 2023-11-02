import { css } from '@emotion/react';

const titleCss = {
    blueline:css({
        height:'4px',
        width:'100%',
        backgroundColor:'#3f4190',
        position:"relative",
        border:0,
    }),

    purpleline :css({
        height:'4px',
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
        color:'#d3cece',
        fontSize:"14px",
        height:"17px",
        alignItems:'center',
        backgroundColor:'#6e7882',
        paddingTop:'5px',
        paddingRight:'10px',
        paddingLeft:'10px',
        paddingBottom:'7px',
        fontFamily: "GillSansMedium",
    })
}
const Title  = () => {
    return(
        <>
            <hr css={titleCss.purpleline}/>
            <hr css={titleCss.blueline}/>
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
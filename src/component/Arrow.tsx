/** @jsxImportSource @emotion/react */

const RightArrow = ()=>(
    <div
        css = {{
            width: 0,
            height: 0,
            borderTop: '5px solid transparent',
            borderBottom:'5px solid transparent',
            borderLeft: '10px solid #cfcfcf',
        }}
    />
)


const LeftArrow = ()=>(
    <div
        css = {{
              width: 0,
              height: 0,
              borderTop: '5px solid transparent',
              borderBottom:'5px solid transparent',
              borderRight: '10px solid #cfcfcf',
        }}
    />
)

interface Arrowinterface {
    isRight:boolean;
}

const Arrow: React.FC<Arrowinterface> = ({isRight}) =>{
    return isRight ?  <RightArrow/> : <LeftArrow/> ;
}

export default Arrow;
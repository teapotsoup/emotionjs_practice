import Button from "./component/Button";
import Button2 from "./component/Button2";
import Header from "./component/Header";
// import Dots from "./component/Dots";
import {Global, css} from '@emotion/react'
// import {errorCss} from './style/error'
import Card from "./component/Card";
// import Animation from "./component/Animation";
import Frame from "./component/Frame";
import Screen from "./component/Screen";
import Title from "./component/Title";
import BrandLogo from "./component/BrandLogo";
import ComponentWrapper from "./component/ComponentWrapper";
import "./App.css"
import Buttonwrapperone from "./component/Buttonwrapperone";
import styled from "@emotion/styled";
import Pillbtn from "./component/Pillbtn";
import Sixstick from "./component/Sixstick";

const LowerRow = styled.div`
  width: 100%;
  height: 10px;
  background-color: #BBB6B6;
  box-shadow:inset 3px 3px 3px dimgrey;
`

function App() {

    return (
        <>
            <Global
                styles={css` Frame {
                  display: flex;
                  justify-content: center;
                  align-items: center
                }`}
            />
            <Frame>
                <Header/>
                <LowerRow/>
                <ComponentWrapper>
                    <Card title={<Title/>} children={<Screen/>}/>
                    <BrandLogo/>
                    <Buttonwrapperone>
                        <Button2/>
                        <div css={css(`margin-top:30px; display:flex`)}>
                            <Button text="B" variant="small"/>
                            <Button text="A" variant="medium"/>
                        </div>
                    </Buttonwrapperone>
                    <div css={css(`margin-left:150px; display:flex`)}>
                        <div css={css(`margin-top:30px; display:flex`)}>
                            <Pillbtn text="SELECT" variant="small"/>
                            <Pillbtn text="START" variant="medium"/>
                        </div>
                        <div css={css(`margin-left:180px; margin-top:70px`)}>
                            <Sixstick/>
                        </div>
                    </div>
                </ComponentWrapper>


                {/*<Adjustbar/>*/}
                {/*<Colorfulladjustbar/>*/}
                {/*<Dots/>*/}
                {/*<p css={errorCss}> Failed to fizzle the frozzle.</p>*/}
                {/*<Animation/>*/}
            </Frame>

        </>

    )
}

export default App

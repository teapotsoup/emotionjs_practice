import Button from "./component/Button";
import CrossBtn from "./component/Btns/CrossBtn";
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
// import styled from "@emotion/styled";
import Pillbtn from "./component/Pillbtn";
import Sixstick from "./component/Sixstick";

function App() {

    return (
        <>
            <Global
                styles={css` Frame {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }`}
            />
            <div css={css`display: flex; flex-direction: column; align-items: center; margin-top: 20px`}>
                <Header/>
                <Frame>
                    <ComponentWrapper>
                        <Card title={<Title/>} children={<Screen/>}/>
                        <BrandLogo/>
                        <Buttonwrapperone>
                            <CrossBtn/>
                            <div css={css(`transform: rotate(-30deg); margin-top:35px; position: relative; z-index:1; display:flex; justify-content: center;`)}>
                                <div css={css(`width: 180px;height: 70px; border-radius: 30px; box-shadow:inset 3px 3px 3px  #BBB6B6; `)}/>
                                <div css={css(`display:flex;  position: absolute; z-index:2;`)}>
                                    <Button text="B" variant="small"/>
                                    <Button text="A" variant="medium"/>
                                </div>
                            </div>
                        </Buttonwrapperone>
                        <div css={css(`margin-left:190px; display:flex`)}>
                            <div css={css(`margin-top:25px; display:flex`)}>
                                <Pillbtn text="SELECT" variant="small"/>
                                <Pillbtn text="START" variant="medium"/>
                            </div>
                            <div css={css(`margin-left:100px; margin-top:30px`)}>
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
            </div>
        </>

    )
}

export default App

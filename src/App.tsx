import Button from "./component/Button";
import CrossBtn from "./component/Btns/CrossBtn";
import Header from "./component/Header";
// import {Global, css} from '@emotion/react';
import Card from "./component/Card";
import Frame from "./component/Frame";
import Screen from "./component/Screen";
import Title from "./component/Title";
import BrandLogo from "./component/BrandLogo";
import ComponentWrapper from "./component/ComponentWrapper";
import Buttonwrapperone from "./component/Buttonwrapperone";
import Pillbtn from "./component/Pillbtn";
import Sixstick from "./component/Sixstick";
import "./App.css"
import {
    BtnWrapper,
    GameConsoleWrapper,
    WholeWrapper,
    Oval,
    PurpleBtnWrapper,
    BottomWrapper,
    PillBtnsWrapper, SixSticksWrapper
} from "./css/app_css";


function App() {
    return (
        <div css={WholeWrapper}>
            {/*<Global*/}
            {/*    styles={css` *{margin: 0px; }`}*/}
            {/*/>*/}
            <div css={GameConsoleWrapper}>
                <Header/>
                <Frame>
                    <ComponentWrapper>
                        <Card title={<Title/>} children={<Screen/>}/>
                        <BrandLogo/>
                        <Buttonwrapperone>
                            <CrossBtn/>
                            <div css={BtnWrapper}>
                                <div css={Oval}/>
                                <div css={PurpleBtnWrapper}>
                                    <Button text="B" variant="small"/>
                                    <Button text="A" variant="medium"/>
                                </div>
                            </div>
                        </Buttonwrapperone>
                        <div css={BottomWrapper}>
                            <div css={PillBtnsWrapper}>
                                <Pillbtn text="SELECT" variant="small"/>
                                <Pillbtn text="START" variant="medium"/>
                            </div>
                            <div css={SixSticksWrapper}>
                                <Sixstick/>
                            </div>
                        </div>
                    </ComponentWrapper>
                </Frame>
            </div>
        </div>

    )
}

export default App

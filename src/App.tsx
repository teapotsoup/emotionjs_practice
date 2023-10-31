import Button from "./component/Button";
import Button2 from "./component/Button2";
import Headbar from "./component/Headbar";
import Context from "./component/Context";
import Adjustbar from "./component/Adjustbar";
import Colorfulladjustbar from "./component/Colorfulladjustbar";
import Header from "./component/Header";
import Dots from "./component/Dots";
import { Global, css } from '@emotion/react'
import { errorCss } from './style/error'
import Card from "./component/Card";
import Animation from "./component/Animation";
import Frame from "./component/Frame";
function App() {

  return (
      <>
          <Global
              styles={css` Frame {display: flex; justify-content: center; align-items: center}`}
          />
          <Frame>
              <Header/>
              <Button text = "버튼1" variant = "small"/>
              <Button text = "버튼2" variant = "medium"/>
              <Button text = "버튼3" variant = "large"/>
              <Button2 text = "일반 버튼"/>
              <Headbar title = "연습용 타이틀입니다" context="연습용 내용입니다" />
              <Context text = "연습용 이너 텍스트입니다."/>
              <Adjustbar/>
              <Colorfulladjustbar/>
              <Dots/>
              <p css={errorCss}> Failed to fizzle the frozzle.</p>
              <Card title={"cardTitle"} children={<p>My child</p>}/>
              <Animation/>
          </Frame>

      </>

  )
}

export default App

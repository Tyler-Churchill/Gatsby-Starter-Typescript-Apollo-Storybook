import React, { Component } from "react"
import { AppButton } from "../components/AppButton"
import DogAvatar from "../components/DogAvatar"
import EmotionButton from "../components/EmotionComponent"

type IndexPageState = {
  clickCount: number
}

export default class IndexPage extends Component<any, IndexPageState> {
  constructor(props: any) {
    super(props)
    this.state = {
      clickCount: 0,
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Here is an index page, please click the button</h2>
          <AppButton
            text={"Click me!"}
            onClick={() => {
              this.setState({ clickCount: this.state.clickCount + 1 })
            }}
          />
          <span style={{ paddingLeft: "25px" }}>
            Total Clicks: {this.state.clickCount}
          </span>
        </div>
        <div>
          <h2>Here is a cute dog!</h2>
          <DogAvatar />
        </div>
        <div>
          <EmotionButton
            onClick={() => {
              this.setState({ clickCount: this.state.clickCount + 1 })
            }}
          >
            I am a button styled with <i>Emotion</i>
            <p>
              <i>You may also click me...</i>
            </p>
          </EmotionButton>
        </div>
      </div>
    )
  }
}

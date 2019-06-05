import React, { Component } from "react"
import { AppButton } from "../components/AppButton"

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
    )
  }
}

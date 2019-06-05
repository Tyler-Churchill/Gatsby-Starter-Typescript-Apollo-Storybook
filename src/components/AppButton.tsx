import * as React from "react"
import styled from "@emotion/styled"

interface AppButtonProps {
  /** Text to display within the button */
  text: string
  /** Function called when the button is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = styled("button")`
  padding: 5px;
  border-radius: 3px;
`

/**
 * A generic button, use me everywhere!
 */
export class AppButton extends React.Component<AppButtonProps> {
  render() {
    return <Button onClick={this.props.onClick}>{this.props.text}</Button>
  }
}

import * as React from "react"
import { storiesOf } from "@storybook/react"
import { AppButton } from "../components/AppButton"
import { action } from "@storybook/addon-actions"

storiesOf(`AppButton`, module)
  .add(`with text`, () => <AppButton text={"test"} />)
  .add(`with onClick`, () => (
    <AppButton text={"hello"} onClick={action("clicked")} />
  ))

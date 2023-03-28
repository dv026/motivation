import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, EButtonVariant } from "./button"

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: "Button",
  variant: EButtonVariant.Basic,
}

export const Clear = Template.bind({})
Clear.args = {
  children: "Button",
  variant: EButtonVariant.Clear,
}

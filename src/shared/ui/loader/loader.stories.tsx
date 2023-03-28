import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Loader } from "./loader"

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = () => <Loader />

export const Basic = Template.bind({})
Basic.args = {}

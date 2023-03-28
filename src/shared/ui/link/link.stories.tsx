import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ELinkVariant, Link } from "./link"
import { RouterDecorator } from "./../../../shared/stories-decorators/router-decorator"

export default {
  title: "shared/Link",
  component: Link,
  argTypes: {},
  decorators: [RouterDecorator],
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: "Link",
  variant: ELinkVariant.Basic,
}

export const Clear = Template.bind({})
Clear.args = {
  children: "Link",
  variant: ELinkVariant.Special,
}

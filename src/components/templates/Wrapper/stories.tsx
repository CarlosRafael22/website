import Wrapper, { WrapperProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'Wrapper',
    component: Wrapper
} as Meta

const Template: Story<WrapperProps> = (args) => <Wrapper {...args} />

export const Default = Template.bind({})
Default.args = {
    children: null
}
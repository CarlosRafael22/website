import Tag, { TagProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'Tag',
    component: Tag,
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'UNION TYPES'
}
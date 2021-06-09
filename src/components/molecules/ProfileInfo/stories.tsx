import ProfileInfo from '.'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'ProfileInfo',
    component: ProfileInfo
} as Meta

export const Default = (args) => <ProfileInfo {...args} />
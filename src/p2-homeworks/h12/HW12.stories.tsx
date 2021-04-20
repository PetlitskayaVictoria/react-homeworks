import React from 'react';
import HW12 from "./HW12";
// @ts-ignore
import {Meta, Story} from "@storybook/react/types-6-0";
import ProviderDecorator from "../decorators/ProviderDecorator";


export default {
    title : 'HW12',
    component : HW12,
    decorators : [ProviderDecorator]
} as Meta;

const Template: Story = () => {
    return <HW12/>;
}

export const Theme = Template.bind({});


import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Snowfall } from './Snowfall';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Snowfall',
  component: Snowfall,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Snowfall>;



export function Primary() {
  return <Snowfall />;
}

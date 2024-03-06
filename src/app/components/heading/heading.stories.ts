import type { Meta, StoryObj } from '@storybook/angular';

import { HeadingComponent } from './heading.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<HeadingComponent> = {
  component: HeadingComponent,
  title: 'Components/Heading',
  tags: ['Heading', 'Title'],
};

export default meta;
type Story = StoryObj<HeadingComponent>;

// Heading 1
export const Heading1: Story = {
  args: {
    content: 'This is content preview of heading h1',
    size: 'h1',
  },
};

// Heading 2
export const Heading2: Story = {
  args: {
    content: 'This is content preview of heading h2',
    size: 'h2',
  },
};

// Heading 3
export const Heading3: Story = {
  args: {
    content: 'This is content preview of heading h3',
    size: 'h3',
  },
};

// Heading 4
export const Heading4: Story = {
  args: {
    content: 'This is content preview of heading h4',
    size: 'h4',
  },
};

// Heading 5
export const Heading5: Story = {
  args: {
    content: 'This is content preview of heading h5',
    size: 'h5',
  },
};

// Heading 6
export const Heading6: Story = {
  args: {
    content: 'This is content preview of heading h6',
    size: 'h6',
  },
};

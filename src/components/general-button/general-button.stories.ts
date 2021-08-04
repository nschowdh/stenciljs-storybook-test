import { html } from 'lit-html';
import { eventHandles, action } from '../../../.storybook/helpers/custom-action';

const costumEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(costumEvents)];

const args = {
  radio: '',
  buttonTag: '',
};

const argTypes = {
  radio: {
    control: {
      type: 'inline-radio',
      options: ['Default', 'HoverButton', 'ClickButton'],
    },
  },
};

export default {
  title: 'Components/General Button',
  component: 'general-button',
  parameters: {
    notes: {},
    actions: {
      handles: events,
    },
  },
};

const DefaultTemplate = () => html`
<general-button
class='general-button'
radio='Default'
  ></general-button>
  ${action('general-button', costumEvents)}
`;

const HoverTemplate = () => html`
<general-button
class='general-button'
radio='HoverButton'
  style="background-color:#90ef90; border-color:#00FF00; color: white"
  ></general-button>
  ${action('general-button', costumEvents)}
`;

const ClickTemplate = () => html`
  <general-button
  class='general-button'
  radio='ClickButton'
  style="background-color:#febe66; border-color:red; color: white"
  ></general-button>
  ${action('general-button', costumEvents)}
`;

export const Default = DefaultTemplate.bind({});
Default.args = {...args, radio: 'Default'};
Default.argTypes = {...argTypes};

export const HoverButton = HoverTemplate.bind({});
HoverButton.args = {...args, radio: 'HoverButton'};
HoverButton.argTypes = {...argTypes};

export const ClickButton = ClickTemplate.bind({});
ClickButton.args = {...args, radio: 'ClickButton'};
ClickButton.argTypes = {...argTypes};

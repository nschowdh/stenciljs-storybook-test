import { html } from 'lit-html';
import markdown from './readme.md';
import { eventHandles, action } from '../../../.storybook/helpers/custom-action';

const costumEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(costumEvents)];

export default {
  title: 'Components/User Base',
  component: 'user-base',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const Template = () => html`
  <user-base>
  </user-base>
  ${action('user-base', costumEvents)}
`;

export const Default = Template.bind({});

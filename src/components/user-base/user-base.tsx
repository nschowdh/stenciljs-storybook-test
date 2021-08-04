import { Component, Host, Prop, State, Listen, Event, EventEmitter, h } from '@stencil/core';
import { hostClasses } from '../../utils';
import { HoverButton, ClickButton } from '../general-button/general-button.stories';

@Component({
  tag: 'user-base',
  styleUrl: 'user-base.scss',
  shadow: false,
})

export class UserBase {
  private readonly componentName: string = 'user-base';

  @Prop() inputText: string;
  @State() value: string;

  private handleClick() {
    this.inputText = this.value;
  }

  private handleChange(event) {
    this.value = event.target.value;
  }

  @Event() events: EventEmitter;

  @Listen('mouseover', { capture: true })
  private handleHover() {
    return <HoverButton onClick={() => this.handleClick()}/>;
  }
  @Listen('click', { capture: true })
  private handleClicked() {
    return <ClickButton onClick={() => this.handleClick()}/>;
  }

  render() {
    const cssClasses = hostClasses({componentName: this.componentName});
    const outputTextNaming = 'Output-Text-CSS';
    return (
      <Host
        class={cssClasses}
        >
        <form>
          <div>
            <p> Please enter text to show in the dialog </p>
            <text-box value={this.value} onInput={(event) => this.handleChange(event)}/>
          </div>
          <general-button buttonTag="Update" onClick={() => this.handleClick()}/>
        </form>
        <div>
          <p class={outputTextNaming}> Result after Update: &emsp;&emsp;{this.inputText}</p>
        </div>
      </Host>
    );
  }
}

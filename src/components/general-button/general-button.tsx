import { Component, Prop, Host, h } from '@stencil/core';
import { hostClasses } from '../../utils';

@Component({
  tag: 'general-button',
  styleUrl: 'general-button.scss',
  shadow: false,
})

export class GeneralButton {
  private readonly componentName: string = 'general-button';

  @Prop() radio: string = '';
  @Prop() buttonTag: string = 'Button';

  private handleClick() {
    console.log(this.radio);
  }

  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName});

    return (
      <Host
        class={cssClasses}
        onClick={() => this.handleClick()}
       >
        <div >
          {this.buttonTag}
        </div>
      </Host>
    );
  }
}

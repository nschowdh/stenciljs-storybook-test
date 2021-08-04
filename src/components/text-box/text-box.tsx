import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'text-box',
  styleUrl: 'text-box.scss',
  shadow: false,
})

export class TextBox {
  @Prop() value: string = '';
  render() {
    return (
      <div class="title">
        <textarea value={this.value} rows={10} cols={100} />
      </div>
    );
  }
}

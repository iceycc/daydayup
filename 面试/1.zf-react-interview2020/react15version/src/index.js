import React from './react';
import ReactDOM from './react-dom';
class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], text: '' };
  }
  add = () => {
    if (this.state.text && this.state.text.length > 0) {
      this.setState({ list: [...this.state.list, this.state.text] });
    }
  }
  onChange = (event) => {
    this.setState({ text: event.target.value });
  }
  onDel = (index) => {
    this.state.list.splice(index, 1);
    this.setState({ list: this.state.list });
  }
  render() {
    var createItem = (itemText, index) => {
      return React.createElement("li", {}, itemText, React.createElement('button',
        { onClick: () => this.onDel(index) }, 'X'));
    };
    var lists = this.state.list.map(createItem);
    let ul = React.createElement("ul", {}, ...lists);
    var input = React.createElement("input", { onKeyup: this.onChange, value: this.state.text });
    var button = React.createElement("button", { onClick: this.add }, 'Add')
    return React.createElement('div', {}, input, button, ul);
  }
}
let element = React.createElement(Todos, {});
ReactDOM.render(
  element,
  document.getElementById('root')
);
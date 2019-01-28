import React from 'React';
import ShoppingList from './shoppinglist.js';
import Picture from './Picture.js';
import Square from './Square.js';
import HelloWorld from './HelloWorld';
import MyInput from './Input';
import MyTab from './Tab';
//内容
class Content extends React.Component {
  state = {
    text: ' ',
  }
  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  }
  onTextReset = () => {
    this.setState({ text: '' });
  }

  render() {
    const picture = {
      src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
    };
    return (
      <div className='container'>
        <MyTab></MyTab>
        <ShoppingList name="张三" />
        <Picture src={picture.src}>
        </Picture>
        <Square></Square>
        <HelloWorld></HelloWorld>
        <MyInput value={this.state.text} onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>重置</button>
      </div>
    );
  }
}
export default Content;
import React from 'React';
import ShoppingList from './shoppinglist.js';
import Picture from './Picture.js';

//内容
class Content extends React.Component {
  render() {
    const picture = {
      src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
    };
    return (
      <div className='container'>
        <ShoppingList name="张三" />
        <Picture src={picture.src}>
        </Picture>
      </div>
    );
  }
}
export default Content;
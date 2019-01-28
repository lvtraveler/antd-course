import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return(
            <div className="shopping-list">
                <h1>{this.props.name} 购物清单</h1>
                <ul>    
                    <li>Instagram</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;
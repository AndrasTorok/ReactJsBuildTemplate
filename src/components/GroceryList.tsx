import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IListItemProps {
    name: string;
    quantity : number;
}

export class ListItem extends React.Component<IListItemProps, any> {    
        
    render(){
        return (
          <li>
            {this.props.quantity}x {this.props.name}
          </li>  
        );                  
    }
}

export interface IGroceryListProps{
    groceries : IListItemProps[]
}

export class GroceryList extends React.Component<IGroceryListProps, any>{
    
    render() {
        var listItems = this.props.groceries.map(item=>{
            return (
                <ListItem quantity={item.quantity} name={item.name} />
            );
        });        
        
        return (
            <ul>                
               {listItems}
            </ul>
        );
    }
}
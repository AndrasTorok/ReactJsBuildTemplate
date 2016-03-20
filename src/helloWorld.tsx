import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Person} from './helpers/Helpers';
import {GroceryList, IGroceryListProps} from './components/GroceryList';

interface HelloWorldProps {
  name?: string;
}

class Hello extends React.Component<HelloWorldProps, any> {    
    
    render() {
        var peterGabriel = new Person('Peter', 'Gabriel'),
            arminVanBuuren = new Person('Armin', 'van Buuren'),
            groceryListProps: IGroceryListProps = { groceries: [
                {name: 'Bread', quantity: 1},
                {name: 'Eggs', quantity: 6},
                {name: 'Milk', quantity: 2}
                ]};
        
        return (
            <div>
                Hello {peterGabriel.toString()}, {arminVanBuuren.toString()}!
                <GroceryList groceries={groceryListProps.groceries} />
            </div>            
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
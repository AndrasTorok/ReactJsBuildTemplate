import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Person} from './Helpers';

var peterGabriel = new Person('Peter', 'Gabriel'),
    arminVanBuuren = new Person('Armin', 'van Buuren');

interface HelloWorldProps {
  name?: string;
}

class Hello extends React.Component<HelloWorldProps, any> {
    
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}


ReactDOM.render(<Hello/>, document.getElementById('root'));

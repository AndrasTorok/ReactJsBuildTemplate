import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IKanbanProps{
    
}

class Kanban extends React.Component<IKanbanProps, any> {
    
    render(){
        
        return (
          <h2>Kanban</h2>  
        );
    }
}

ReactDOM.render(<Kanban />, document.getElementById('root'));
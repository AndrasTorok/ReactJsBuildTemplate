import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ICard} from '../model/Kanban';
import {KanbanCheckList} from './KanbanCheckList';

export interface IKanbanCardProps extends ICard {
    
}

interface IKanbanCardState{
    showDetails : boolean;
}

export class KanbanCard extends React.Component<IKanbanCardProps, any>{
    state : IKanbanCardState;
    
    constructor(){
        super();
        this.state={
            showDetails : false  
        };
    }
    
    render(){      
        let cardDetails;
        if(this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <KanbanCheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }
          
        return (
            <div className="card">
            <div className="card__title" onClick={()=>this.setState({ showDetails : !this.state.showDetails}) }>
                {this.props.title}
            </div>
            {cardDetails}
            </div>
        );
    }
}
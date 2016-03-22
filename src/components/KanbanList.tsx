import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {KanbanCard, IKanbanCardProps} from './KanbanCard';

export interface IKanbanListProps{
    id : string;
    title : string;
    cards : IKanbanCardProps[];
}

export class KanbanList extends React.Component<IKanbanListProps, any>{
    render(){
        var  cards = this.props.cards.map((card)=>{
            return <KanbanCard id={card.id} title={card.title} description={card.description} 
                status={card.status} tasks={card.tasks} />
        });
        
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}
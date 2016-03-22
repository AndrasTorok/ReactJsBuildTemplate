import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ICard, Status} from '../model/Kanban';
import {KanbanList} from './KanbanList';

export interface IKanbanBoardProps{
    cards : ICard[]
}

export class KanbanBoard extends React.Component<IKanbanBoardProps, any>{
    render(){
    return (
        <div className="app">
            <KanbanList id='todo' title="To Do" 
                cards={this.props.cards.filter((card) => card.status === Status.ToDo)} />
            <KanbanList id='in-progress' title="In Progress" 
                cards={this.props.cards.filter((card) => card.status === Status.InProgress)} />
            <KanbanList id='done' title='Done' 
                cards={this.props.cards.filter((card) => card.status === Status.Done)} />
        </div>
        );
    }
}
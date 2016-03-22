import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ICard, ITask} from '../model/Kanban';

export interface IKanbanCheckListProps{
    cardId : number;
    tasks: ITask[];
}

export class KanbanCheckList extends React.Component<IKanbanCheckListProps, any>{
    render(){
        let tasks = this.props.tasks.map((task)=>{
            return (
                <li className="checklist_task">
                    <input type="checkbox" defaultChecked={task.done} />
                    {task.name}
                    <a href="#" className="checklist_task--remove"/>
                </li>
            );
        });
        
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}
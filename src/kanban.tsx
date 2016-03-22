import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {KanbanBoard} from './components/KanbanBoard';
import {ICard, Status} from './model/Kanban';


let cardsList : ICard[] = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: Status.InProgress,
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: Status.ToDo,
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];

ReactDOM.render(<KanbanBoard cards={cardsList}  />, document.getElementById('root'));
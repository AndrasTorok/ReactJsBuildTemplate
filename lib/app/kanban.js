"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var KanbanBoard_1 = require('./components/KanbanBoard');
var Kanban_1 = require('./model/Kanban');
var cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: Kanban_1.Status.InProgress,
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: Kanban_1.Status.ToDo,
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
ReactDOM.render(React.createElement(KanbanBoard_1.KanbanBoard, {cards: cardsList}), document.getElementById('root'));

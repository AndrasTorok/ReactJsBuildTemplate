"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Kanban_1 = require('../model/Kanban');
var KanbanList_1 = require('./KanbanList');
var KanbanBoard = (function (_super) {
    __extends(KanbanBoard, _super);
    function KanbanBoard() {
        _super.apply(this, arguments);
    }
    KanbanBoard.prototype.render = function () {
        return (React.createElement("div", {className: "app"}, React.createElement(KanbanList_1.KanbanList, {id: 'todo', title: "To Do", cards: this.props.cards.filter(function (card) { return card.status === Kanban_1.Status.ToDo; })}), React.createElement(KanbanList_1.KanbanList, {id: 'in-progress', title: "In Progress", cards: this.props.cards.filter(function (card) { return card.status === Kanban_1.Status.InProgress; })}), React.createElement(KanbanList_1.KanbanList, {id: 'done', title: 'Done', cards: this.props.cards.filter(function (card) { return card.status === Kanban_1.Status.Done; })})));
    };
    return KanbanBoard;
}(React.Component));
exports.KanbanBoard = KanbanBoard;

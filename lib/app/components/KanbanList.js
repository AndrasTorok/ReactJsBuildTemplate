"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var KanbanCard_1 = require('./KanbanCard');
var KanbanList = (function (_super) {
    __extends(KanbanList, _super);
    function KanbanList() {
        _super.apply(this, arguments);
    }
    KanbanList.prototype.render = function () {
        var cards = this.props.cards.map(function (card) {
            return React.createElement(KanbanCard_1.KanbanCard, {id: card.id, title: card.title, description: card.description, status: card.status, tasks: card.tasks});
        });
        return (React.createElement("div", {className: "list"}, React.createElement("h1", null, this.props.title), cards));
    };
    return KanbanList;
}(React.Component));
exports.KanbanList = KanbanList;

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../model/Kanban":6,"./KanbanList":4,"react":undefined}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var KanbanCheckList_1 = require('./KanbanCheckList');
var KanbanCard = (function (_super) {
    __extends(KanbanCard, _super);
    function KanbanCard() {
        _super.call(this);
        this.state = {
            showDetails: false
        };
    }
    KanbanCard.prototype.render = function () {
        var _this = this;
        var cardDetails;
        if (this.state.showDetails) {
            cardDetails = (React.createElement("div", {className: "card__details"}, this.props.description, React.createElement(KanbanCheckList_1.KanbanCheckList, {cardId: this.props.id, tasks: this.props.tasks})));
        }
        return (React.createElement("div", {className: "card"}, React.createElement("div", {className: "card__title", onClick: function () { return _this.setState({ showDetails: !_this.state.showDetails }); }}, this.props.title), cardDetails));
    };
    return KanbanCard;
}(React.Component));
exports.KanbanCard = KanbanCard;

},{"./KanbanCheckList":3,"react":undefined}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var KanbanCheckList = (function (_super) {
    __extends(KanbanCheckList, _super);
    function KanbanCheckList() {
        _super.apply(this, arguments);
    }
    KanbanCheckList.prototype.render = function () {
        var tasks = this.props.tasks.map(function (task) {
            return (React.createElement("li", {className: "checklist_task"}, React.createElement("input", {type: "checkbox", defaultChecked: task.done}), task.name, React.createElement("a", {href: "#", className: "checklist_task--remove"})));
        });
        return (React.createElement("div", {className: "checklist"}, React.createElement("ul", null, tasks)));
    };
    return KanbanCheckList;
}(React.Component));
exports.KanbanCheckList = KanbanCheckList;

},{"react":undefined}],4:[function(require,module,exports){
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

},{"./KanbanCard":2,"react":undefined}],5:[function(require,module,exports){
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

},{"./components/KanbanBoard":1,"./model/Kanban":6,"react":undefined,"react-dom":undefined}],6:[function(require,module,exports){
"use strict";
(function (Status) {
    Status[Status["ToDo"] = 0] = "ToDo";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;

},{}]},{},[5]);

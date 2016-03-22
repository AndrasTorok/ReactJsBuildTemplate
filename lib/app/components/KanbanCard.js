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

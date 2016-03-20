"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Kanban = (function (_super) {
    __extends(Kanban, _super);
    function Kanban() {
        _super.apply(this, arguments);
    }
    Kanban.prototype.render = function () {
        return (React.createElement("h2", null, "Kanban"));
    };
    return Kanban;
}(React.Component));
ReactDOM.render(React.createElement(Kanban, null), document.getElementById('root'));

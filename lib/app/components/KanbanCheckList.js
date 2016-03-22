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

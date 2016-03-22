"use strict";
(function (Status) {
    Status[Status["ToDo"] = 0] = "ToDo";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;

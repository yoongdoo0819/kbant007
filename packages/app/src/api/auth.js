"use strict";
exports.__esModule = true;
exports.auth = void 0;
var ID = 'a';
var PASSWORD = 'a';
var auth = function (id, password) {
    return new Promise(function (resolve, reject) {
        if (id === ID && password === PASSWORD) {
            resolve(true);
        }
        else {
            reject(false);
        }
    });
};
exports.auth = auth;

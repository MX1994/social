"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUser = exports.createUser = exports.getUsers = void 0;
// DB
const database_1 = require("../database");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const users = yield conn.query('SELECT * FROM users');
            return res.json(users[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUsers = getUsers;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO users SET ?', [newUser]);
        res.json({
            message: 'New User Created'
        });
    });
}
exports.createUser = createUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const conn = yield database_1.connect();
        const users = yield conn.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(users[0]);
    });
}
exports.getUser = getUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({
            message: 'User Deleted'
        });
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const updateUser = req.body;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE users set ? WHERE id = ?', [updateUser, id]);
        res.json({
            message: 'User Updated'
        });
    });
}
exports.updateUser = updateUser;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'itamazor@gmail.com',
        password: '12345',
        techs: [
            'Node.js', 'ReactJS', 'React Native',
            { title: 'JavaScript', experience: 100 }
        ]
    });
    return response.json({ user: user });
}
exports.helloWorld = helloWorld;

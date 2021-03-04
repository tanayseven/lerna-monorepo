"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Nothing at the root!');
});
app.get('/users', (req, res) => {
    res.send({ username: 'lal123', firstName: 'Laluji', lastName: 'Madlad', dateOfBirth: new Date(1989, 11, 7) });
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map
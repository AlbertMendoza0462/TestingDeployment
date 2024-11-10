import express from "express"
import { StartServer } from './server/server.js';

function main() {
    StartServer()
}

(async () => main())()
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const prisma_1 = require("../../../app/generated/prisma");
exports.prismaClient = new prisma_1.PrismaClient({ log: ["query"] });

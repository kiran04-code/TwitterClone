import { PrismaClient } from '@prisma/client';
export const PrismaClients = new PrismaClient({ log: ["query"] });
PrismaClients.user.findById({ id: 1 });
//# sourceMappingURL=index.js.map
const { PrismaClient } = require('@prisma/client');
try {
  new PrismaClient({ adapter: null });
  console.log("Success with adapter null");
} catch(e) {
  console.log(e.message);
}

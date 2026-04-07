const { PrismaClient } = require('@prisma/client');
try {
  new PrismaClient({});
  console.log("Success with empty obj");
} catch(e) {
  console.log(e.message);
}

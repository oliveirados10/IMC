/*
  Warnings:

  - You are about to drop the `Ecommerce` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ecommerce";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passoword" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user'
);

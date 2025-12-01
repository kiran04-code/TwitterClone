/*
  Warnings:

  - You are about to drop the column `PrfileImage` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "PrfileImage",
ADD COLUMN     "profileImage" TEXT NOT NULL DEFAULT 'default.png';

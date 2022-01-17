/*
  Warnings:

  - You are about to drop the column `path` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "path",
ADD COLUMN     "fileName" VARCHAR(80);

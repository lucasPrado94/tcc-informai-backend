/*
  Warnings:

  - You are about to drop the column `url` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "url",
ADD COLUMN     "path" VARCHAR(80);

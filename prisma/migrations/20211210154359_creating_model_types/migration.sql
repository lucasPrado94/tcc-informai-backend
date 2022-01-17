/*
  Warnings:

  - You are about to drop the column `type` on the `Occurrences` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Occurrences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Occurrences" DROP COLUMN "type",
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Types" (
    "id" SERIAL NOT NULL,
    "typeName" TEXT NOT NULL,

    CONSTRAINT "Types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Occurrences" ADD CONSTRAINT "Occurrences_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

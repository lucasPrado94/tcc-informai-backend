/*
  Warnings:

  - You are about to drop the column `typeId` on the `Occurrences` table. All the data in the column will be lost.
  - You are about to drop the `Types` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviceId` to the `Occurrences` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Occurrences" DROP CONSTRAINT "Occurrences_typeId_fkey";

-- AlterTable
ALTER TABLE "Occurrences" DROP COLUMN "typeId",
ADD COLUMN     "serviceId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Types";

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Occurrences" ADD CONSTRAINT "Occurrences_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

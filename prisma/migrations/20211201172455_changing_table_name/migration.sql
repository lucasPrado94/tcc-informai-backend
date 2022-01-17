/*
  Warnings:

  - You are about to drop the `Occurrence` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Occurrence";

-- CreateTable
CREATE TABLE "Occurrences" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(80) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "obs" VARCHAR(280) NOT NULL,

    CONSTRAINT "Occurrences_pkey" PRIMARY KEY ("id")
);

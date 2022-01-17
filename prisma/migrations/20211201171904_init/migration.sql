-- CreateTable
CREATE TABLE "Occurrence" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(80) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "obs" VARCHAR(280) NOT NULL,

    CONSTRAINT "Occurrence_pkey" PRIMARY KEY ("id")
);

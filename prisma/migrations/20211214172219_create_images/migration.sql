-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(80),
    "occurrenceId" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_occurrenceId_fkey" FOREIGN KEY ("occurrenceId") REFERENCES "Occurrences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

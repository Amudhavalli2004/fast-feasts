/*
  Warnings:

  - A unique constraint covering the columns `[intentId]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "intentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Orders_intentId_key" ON "Orders"("intentId");

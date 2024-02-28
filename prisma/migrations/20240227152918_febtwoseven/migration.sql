/*
  Warnings:

  - You are about to drop the column `intentId` on the `Orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[intent_id]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Orders_intentId_key";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "intentId",
ADD COLUMN     "intent_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Orders_intent_id_key" ON "Orders"("intent_id");

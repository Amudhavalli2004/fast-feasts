/*
  Warnings:

  - You are about to drop the column `intent_id` on the `Orders` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Orders_intent_id_key";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "intent_id";

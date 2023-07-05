/*
  Warnings:

  - You are about to drop the column `FII` on the `investment` table. All the data in the column will be lost.
  - You are about to drop the column `initialValue` on the `investment` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfShares` on the `investment` table. All the data in the column will be lost.
  - You are about to drop the column `totalEarnings` on the `investment` table. All the data in the column will be lost.
  - You are about to drop the column `totalExpenses` on the `investment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[symbol]` on the table `investment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `openingPrice` to the `investment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symbol` to the `investment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalOpeningPosition` to the `investment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuotas` to the `investment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `investment_FII_key` ON `investment`;

-- AlterTable
ALTER TABLE `investment` DROP COLUMN `FII`,
    DROP COLUMN `initialValue`,
    DROP COLUMN `numberOfShares`,
    DROP COLUMN `totalEarnings`,
    DROP COLUMN `totalExpenses`,
    ADD COLUMN `openingPrice` INTEGER NOT NULL,
    ADD COLUMN `symbol` VARCHAR(191) NOT NULL,
    ADD COLUMN `totalOpeningPosition` INTEGER NOT NULL,
    ADD COLUMN `totalQuotas` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `investment_symbol_key` ON `investment`(`symbol`);

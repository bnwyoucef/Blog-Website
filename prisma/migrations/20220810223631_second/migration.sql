/*
  Warnings:

  - You are about to drop the column `userId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_userId_fkey`;

-- AlterTable
ALTER TABLE `Blog` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Category` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `Blog` ADD CONSTRAINT `Blog_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

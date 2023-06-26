-- CreateTable
CREATE TABLE `investment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FII` VARCHAR(191) NOT NULL,
    `initialValue` INTEGER NOT NULL,
    `numberOfShares` INTEGER NOT NULL,
    `totalExpenses` INTEGER NOT NULL,
    `totalEarnings` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `investment_FII_key`(`FII`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

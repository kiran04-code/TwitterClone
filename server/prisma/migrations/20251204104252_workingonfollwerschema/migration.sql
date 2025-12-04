-- AlterTable
ALTER TABLE "user" ALTER COLUMN "profileImage" SET DEFAULT '';

-- CreateTable
CREATE TABLE "Followes" (
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "Followes_pkey" PRIMARY KEY ("followerId","followingId")
);

-- AddForeignKey
ALTER TABLE "Followes" ADD CONSTRAINT "Followes_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Followes" ADD CONSTRAINT "Followes_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

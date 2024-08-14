-- CreateTable
CREATE TABLE "cd_user" (
    "user_id" UUID NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255),
    "user_avatar" VARCHAR,
    "short_bio" TEXT,
    "user_password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cd_user_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cd_user_user_email_key" ON "cd_user"("user_email");

-- CreateTable
CREATE TABLE "User" (
    "user_id" UUID NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) DEFAULT 'unknown user',
    "user_avatar" VARCHAR DEFAULT 'https://assets.codepen.io/1524299/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1507654440&width=512',
    "short_bio" TEXT DEFAULT 'no bio yet',
    "user_password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

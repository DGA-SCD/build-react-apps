CREATE TABLE IF NOT EXISTS "public"."items" (
    "id" SERIAL NOT NULL,
    "category_id" int,
    "url" varchar(500),
    PRIMARY KEY ("id")
);

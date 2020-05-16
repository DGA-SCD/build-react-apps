CREATE TABLE IF NOT EXISTS "public"."items" (
    "id" SERIAL NOT NULL,
    "title" varchar(300),
    "category_id" int,
    "meta_image" varchar(100),
    "meta_description" timestamp,
    "url" timestamp,
    PRIMARY KEY ("id")
);

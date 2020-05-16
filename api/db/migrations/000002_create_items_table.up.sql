CREATE TABLE IF NOT EXISTS "public"."items" (
    "id" SERIAL NOT NULL,
    "title" varchar(300),
    "category_id" int,
    "meta_image_url" varchar(500),
    "meta_description" varchar(500),
    "url" varchar(500),
    PRIMARY KEY ("id")
);

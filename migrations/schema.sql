CREATE SEQUENCE product_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE product (
  id INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('product_seq'::regclass),
  sku varchar(30) NOT NULL,
  brand varchar(255) NOT NULL,
  description text NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);
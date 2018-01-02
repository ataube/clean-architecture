CREATE SEQUENCE product_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE product (
  id INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('product_seq'::regclass),
  sku varchar(30) NOT NULL,
  brand varchar(255) NOT NULL,
  description text NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

CREATE SEQUENCE event_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE TABLE event (
  id INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('event_seq'::regclass),
  type varchar(255) NOT NULL, --should be a enum
  payload jsonb NOT NULL,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITHOUT TIME ZONE
);
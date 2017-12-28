# Clean Architecture Reference Implementation
A opinionated reference implementation of the clean architecture written in node.js.
More infos here: https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html
## Setup
```bash
createdb -h localhost -U postgresql cleanarch
psql -f migrations/schema.sql postgres://postgresql@localhost:5432/cleanarch
```

## Run sample app
```bash
npm i
node test.js
```
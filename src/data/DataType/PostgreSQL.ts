import { DataTypeHint } from "../DataType";

// https://www.postgresql.org/docs/current/datatype.html
const PostgreSQLTypes: DataTypeHint[] = [
  { name: "bigint", primitiveType: "int" },
  { name: "int8", primitiveType: "int" },
  { name: "bigserial", primitiveType: "int" },
  { name: "serial8", primitiveType: "int" },
  { name: "bit", primitiveType: "int" },
  { name: "bit varying", primitiveType: "int" },
  { name: "varbit", primitiveType: "int" },
  { name: "boolean", primitiveType: "boolean" },
  { name: "bool", primitiveType: "boolean" },
  { name: "box", primitiveType: "string" },
  { name: "bytea", primitiveType: "string" },
  { name: "character", primitiveType: "string" },
  { name: "char", primitiveType: "string" },
  { name: "character varying", primitiveType: "string" },
  { name: "varchar", primitiveType: "string" },
  { name: "cidr", primitiveType: "string" },
  { name: "circle", primitiveType: "string" },
  { name: "date", primitiveType: "date" },
  { name: "double precision", primitiveType: "float" },
  { name: "float8", primitiveType: "float" },
  { name: "inet", primitiveType: "string" },
  { name: "integer", primitiveType: "int" },
  { name: "int", primitiveType: "int" },
  { name: "int4", primitiveType: "int" },
  { name: "interval", primitiveType: "time" },
  { name: "json", primitiveType: "string" },
  { name: "jsonb", primitiveType: "string" },
  { name: "line", primitiveType: "string" },
  { name: "lseg", primitiveType: "string" },
  { name: "macaddr", primitiveType: "string" },
  { name: "macaddr8", primitiveType: "string" },
  { name: "money", primitiveType: "string" },
  { name: "money", primitiveType: "float" },
  { name: "numeric", primitiveType: "float" },
  { name: "decimal", primitiveType: "float" },
  { name: "path", primitiveType: "string" },
  { name: "pg_lsn", primitiveType: "int" },
  { name: "point", primitiveType: "string" },
  { name: "polygon", primitiveType: "string" },
  { name: "real", primitiveType: "float" },
  { name: "float4", primitiveType: "float" },
  { name: "smallint", primitiveType: "float" },
  { name: "int2", primitiveType: "float" },
  { name: "smallserial", primitiveType: "float" },
  { name: "serial2", primitiveType: "float" },
  { name: "serial", primitiveType: "float" },
  { name: "serial4", primitiveType: "float" },
  { name: "text", primitiveType: "string" },
  { name: "time", primitiveType: "time" },
  { name: "time with time zone", primitiveType: "time" },
  { name: "timetz", primitiveType: "time" },
  { name: "timestamp", primitiveType: "dateTime" },
  { name: "timestamp with time zone", primitiveType: "dateTime" },
  { name: "timestamptz", primitiveType: "dateTime" },
  { name: "tsquery", primitiveType: "string" },
  { name: "tsvector", primitiveType: "string" },
  { name: "txid_snapshot", primitiveType: "string" },
  { name: "uuid", primitiveType: "string" },
  { name: "xml", primitiveType: "string" }
];

export default PostgreSQLTypes;
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const requests = sqliteTable(
  "requests",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    direction: text("direction").notNull(),
    task: text("task").notNull(),
    locale: text("locale").notNull(),
    sourcePath: text("source_path").notNull(),
    status: text("status").notNull().default("new"),
    createdAt: integer("created_at").notNull(),
  },
  (table) => [
    index("idx_requests_created_at").on(table.createdAt),
    index("idx_requests_status_created_at").on(table.status, table.createdAt),
  ],
);

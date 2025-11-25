import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const scooters = pgTable("scooters", {
	id: serial("id").primaryKey(),
	model: text("model").notNull(),
	ownerId: text("owner_id").notNull(),
	manufacturerId: integer("manufacturer_id").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const manufacturers = pgTable("manufacturers", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const scootersRelations = relations(scooters, ({ one }) => ({
	manufacturer: one(manufacturers, {
		fields: [scooters.manufacturerId],
		references: [manufacturers.id],
	}),
	owner: one(user, {
		fields: [scooters.ownerId],
		references: [user.id],
	}),
}));

export const manufacturersRelations = relations(manufacturers, ({ many }) => ({
	scooters: many(scooters),
}));

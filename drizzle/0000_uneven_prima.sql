CREATE TABLE `requests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`direction` text NOT NULL,
	`task` text NOT NULL,
	`locale` text NOT NULL,
	`source_path` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_requests_created_at` ON `requests` (`created_at`);--> statement-breakpoint
CREATE INDEX `idx_requests_status_created_at` ON `requests` (`status`,`created_at`);
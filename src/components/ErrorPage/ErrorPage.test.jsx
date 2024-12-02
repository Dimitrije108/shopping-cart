import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("Error Page component", () => {
	it("renders the GIF correctly", () => {
		render(
			<MemoryRouter>
				<ErrorPage />
			</MemoryRouter>
		)
		const gif = screen.getByAltText("It's a trap! - Admiral Ackbar gif");

		expect(gif).toHaveAttribute("src", "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzRxZjhtcnM0Z2dwcGg2d21wdnRqYW92N3hzNGRuNTgwcnZtZ2N2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornka9rAaKRA2Rkac/giphy.gif");
	});

	it("renders the heading correctly", () => {
		render(
			<MemoryRouter>
				<ErrorPage />
			</MemoryRouter>
		);

		expect(screen.getByRole("heading").textContent).toMatch(/This route doesn't exist!/i);
	});

	it("renders the link correctly", () => {
		render(
			<MemoryRouter>
				<ErrorPage />
			</MemoryRouter>
		);
		const link = screen.getByRole("link", { name: /Click here to go back to the homepage!/i });

		expect(link).toBeInTheDocument();
	});

	it("switches back to homepage after link click", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<ErrorPage />
			</MemoryRouter>
		);
		const link = screen.getByRole("link", { name: /Click here to go back to the homepage!/i });

		await user.click(link);

		expect(window.location.pathname).toBe("/");
	});
})
import { describe, it, expect } from "vitest";
import { render, screen  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainSection from "./MainSection";

describe("Homepage's Main Section component", () => {
	it("Main Section snapshot", () => {
		const mainSection = render(
			<MemoryRouter>
				<MainSection />
			</MemoryRouter>
		)

		expect(mainSection).toMatchSnapshot();
	});

	it("Main Section elements render correctly", () => {
		render(
			<MemoryRouter>
				<MainSection />
			</MemoryRouter>
		)

		const heading = screen.getByRole("heading", { name: "From Naboo to the Outer Rim — Corellian Engineering Excellence — Now in Your Hands!" });
		const link = screen.getByTestId("starshipsLink");
		const button = screen.getByRole("button", { name: "Explore the Galaxy — Shop Here!" })

		expect(heading).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/starships");
		expect(button).toBeInTheDocument();
	});
});

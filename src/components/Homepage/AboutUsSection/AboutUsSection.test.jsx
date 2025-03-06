import { describe, it, expect } from "vitest";
import { render, screen  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUsSection from "./AboutUsSection";

describe("Homepage's About Us Section component", () => {
	it("About Us Section snapshot", () => {
		const aboutUsSection = render(
			<MemoryRouter>
				<AboutUsSection />
			</MemoryRouter>
		)

		expect(aboutUsSection).toMatchSnapshot();
	});

	it("About Us Section elements render correctly", () => {
		render(
			<MemoryRouter>
				<AboutUsSection />
			</MemoryRouter>
		)
		
		const heading = screen.getByText("About Us");
		const paragraphs = screen.getAllByRole("paragraph");
		const companyName = screen.getByTitle("Shipyard");
		const cecLogo = screen.getByTitle("Corellia Engineering Corporation");
		
		expect(heading).toBeInTheDocument();
		expect(paragraphs).toHaveLength(3);
		expect(companyName).toHaveTextContent("Shipyard");
		expect(cecLogo).toBeInTheDocument();
		expect(cecLogo).toHaveAttribute("src", "/src/assets/icons/Corellian_Engineering_Corporation.svg");
	});
});

import { describe, it, expect } from "vitest";
import { render, screen  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer component", () => {
	it("Footer component snapshot", () => {
		const footer = render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		)

		expect(footer).toMatchSnapshot();
	});

	describe("Footer component renders correctly", () => {
		it("Contact section renders correctly", () => {
			render(
				<MemoryRouter>
					<Footer />
				</MemoryRouter>
			)
			
			const locationIcon = screen.getByTitle("Location");
			const locationText = screen.getByText("Orbital Assembly Facility 7");
			const emailIcon = screen.getByTitle("Email");
			const email = screen.getByText("sw_shipyard@corellia.cec");

			expect(locationIcon).toBeInTheDocument();
			expect(locationIcon).toHaveAttribute("src", "/src/assets/location.svg");
			expect(locationText).toBeInTheDocument();
			expect(emailIcon).toBeInTheDocument();
			expect(emailIcon).toHaveAttribute("src", "/src/assets/email.svg");
			expect(email).toBeInTheDocument();
		});

		it("Company section renders correctly", () => {
			render(
				<MemoryRouter>
					<Footer />
				</MemoryRouter>
			)
			
			const aboutUs = screen.getByRole("button", { name: "About Us" });
			const ourServices = screen.getByRole("button", { name: "Our Services" });
			const privacyPolicy = screen.getByRole("button", { name: "Privacy Policy" });
			const contact = screen.getByRole("button", { name: "Contact" });

			expect(aboutUs).toBeInTheDocument();
			expect(ourServices).toBeInTheDocument();
			expect(privacyPolicy).toBeInTheDocument();
			expect(contact).toBeInTheDocument();
		});

		it("Partners section renders correctly", () => {
			render(
				<MemoryRouter>
					<Footer />
				</MemoryRouter>
			)
			
			const cecLink = screen.getByTestId("cecLink");
			const cecLogo = screen.getByTitle("Corellian Engineering Corporation");
			const cfLink = screen.getByTestId("cfLink");
			const cfLogo = screen.getByTitle("Corellian Federation");
			const kdyLink = screen.getByTestId("kdyLink");
			const kdyLogo = screen.getByTitle("Kuat Drive Yards");
			const fondorLink = screen.getByTestId("fondorLink");
			const fondorLogo = screen.getByTitle("Fondor Shipyards");

			expect(cecLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Corellian_Engineering_Corporation");
			expect(cecLogo).toHaveAttribute("src", "/src/assets/Corellian_Engineering_Corporation.svg");
			expect(cfLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Confederation");
			expect(cfLogo).toHaveAttribute("src", "/src/assets/Corellian_Federation_logo.webp");
			expect(kdyLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Kuat_Drive_Yards");
			expect(kdyLogo).toHaveAttribute("src", "/src/assets/Kuat-Drive-Yards.svg");
			expect(fondorLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Fondor_Shipyards");
			expect(fondorLogo).toHaveAttribute("src", "/src/assets/Fondor-Shipyards.jpg");
		});

		it("Copyright section renders correctly", () => {
			render(
				<MemoryRouter>
					<Footer />
				</MemoryRouter>
			)
			
			const copyrightText = screen.getByText("Copyright © 2025 Star Wars Shipyard limited. All rights Reserved.");
			const disclaimerText = screen.getByText("*This is a placeholder. It is a fan project made with no commercial desire in mind.");
			const githubLink = screen.getByTestId("githubLink");
			const githubIcon = screen.getByTitle("GitHub");

			expect(copyrightText).toBeInTheDocument();
			expect(disclaimerText).toBeInTheDocument();
			expect(githubLink).toHaveAttribute("href", "https://github.com/Dimitrije108/shopping-cart");
			expect(githubIcon).toHaveAttribute("src", "/src/assets/github-mark-white.svg");
		});
	});
});

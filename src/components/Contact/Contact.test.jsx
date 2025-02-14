import { describe, it, expect } from "vitest";
import { render, screen  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";
import { App } from "../../App";

describe("Contact component", () => {
	it("Contact component snapshot", () => {
		const contact = render(
			<MemoryRouter>
				<Contact />
			</MemoryRouter>
		)

		expect(contact).toMatchSnapshot();
	});

	describe("Contact component renders correctly", () => {
		it("Find Us section renders correctly", () => {
			render(
				<MemoryRouter>
					<Contact />
				</MemoryRouter>
			)

			const heading = screen.getByText("Find Us");
			const galaxyMap = screen.getByTitle("Galaxy map");
			const corelliaPlanetImg = screen.getByTitle("Corellia planet");
			const cecLogo = screen.getByTitle("Corellia Engineering Corporation");
			const locationIcon = screen.getByTitle("Location");
			const location = screen.getByText("Orbital Assembly Facility 7");
			const emailIcon = screen.getByTitle("Email");
			const email = screen.getByText("sw_shipyard@corellia.cec");
			const webpageIcon = screen.getByTitle("Webpage");
			const webpageLink = screen.getByTestId("webpageLink");
			const webpage = screen.getByText("Corellian Engineering Corporation");

			expect(heading).toBeInTheDocument();
			expect(galaxyMap).toHaveAttribute("src", "/src/assets/galaxy_map.jpg");
			expect(corelliaPlanetImg).toHaveAttribute("src", "/src/assets/corellia_planet.webp");
			expect(cecLogo).toHaveAttribute("src", "/src/assets/Corellian_Engineering_Corporation.svg");
			expect(locationIcon).toHaveAttribute("src", "/src/assets/location.svg");
			expect(location).toBeInTheDocument();
			expect(emailIcon).toHaveAttribute("src", "/src/assets/email.svg");
			expect(email).toBeInTheDocument();
			expect(webpageIcon).toHaveAttribute("src", "/src/assets/website.svg");
			expect(webpageLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Corellian_Engineering_Corporation");
			expect(webpage).toBeInTheDocument();
		});

		it("Contact Us section renders correctly", () => {
			render(
				<MemoryRouter>
					<Contact />
				</MemoryRouter>
			)
			
			const heading = screen.getByText("Contact Us");
			const largeOrderFormHeading = screen.getByText("Large Order Contact Form");
			const firstNameInputs = screen.getAllByPlaceholderText("Anakin");
			const lastNameInputs = screen.getAllByPlaceholderText("Skywalker");
			const emailInputs = screen.getAllByPlaceholderText("AniSkywalker@tatooine.galaxy");
			const companyInputs = screen.getAllByPlaceholderText("Jedi Order");
			const largeOrderRequestInput = screen.getByPlaceholderText("Large order request message...");
			const submitBtns = screen.getAllByRole("button", { name: "Submit" });
			const requestShipPriceHeading = screen.getByText("Request Ship Price");
			const selectInput = screen.getByRole("combobox");

			expect(heading).toBeInTheDocument();
			expect(largeOrderFormHeading).toBeInTheDocument();
			expect(firstNameInputs).toHaveLength(2);
			expect(lastNameInputs).toHaveLength(2);
			expect(emailInputs).toHaveLength(2);
			expect(emailInputs[0]).toHaveAttribute("type", "email");
			expect(companyInputs).toHaveLength(2);
			expect(largeOrderRequestInput).toBeInTheDocument();
			expect(submitBtns).toHaveLength(2);
			expect(requestShipPriceHeading).toBeInTheDocument();
			expect(selectInput).toBeInTheDocument();
		});

		it("Our Partners section renders correctly", () => {
			render(
				<MemoryRouter>
					<Contact />
				</MemoryRouter>
			)
			
			const heading = screen.getByText("Our Partners");
			const cfLink = screen.getByTestId("cfLink");
			const cfLogo = screen.getByTitle("Corellian Federation");
			const kdyLink = screen.getByTestId("kdyLink");
			const kdyLogo = screen.getByTitle("Kuat Drive Yards");
			const fondorLink = screen.getByTestId("fondorLink");
			const fondorLogo = screen.getByTitle("Fondor Shipyards");

			expect(heading).toBeInTheDocument();
			expect(cfLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Confederation");
			expect(cfLogo).toHaveAttribute("src", "/src/assets/Corellian_Federation_logo.webp");
			expect(kdyLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Kuat_Drive_Yards");
			expect(kdyLogo).toHaveAttribute("src", "/src/assets/Kuat-Drive-Yards.svg");
			expect(fondorLink).toHaveAttribute("href", "https://starwars.fandom.com/wiki/Fondor_Shipyards");
			expect(fondorLogo).toHaveAttribute("src", "/src/assets/Fondor-Shipyards.jpg");
		});
	});
});

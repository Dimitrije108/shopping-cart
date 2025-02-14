import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext/useCartContext";
import Header from "./Header";

const mockCartItem = {
	id: "6429291f021f17e13fbc1db9",
	img: "https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg",
	name: "Millennium Falcon",
	category: "starfighter",
	price: "100000",
	quantity: 1,
};

const mockCartItem2 = {
	id: "6429291f021f17e13fbc1e3c",
	img: "https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg",
	name: "X-wing Starfighter",
	category: "starfighter",
	price: "149999",
	quantity: 3,
};

const mockCart = [mockCartItem, mockCartItem2];

vi.mock("../../hooks/useCartContext/useCartContext", () => ({
	useCartContext: vi.fn(() => ({
		cart: mockCart,
	}))
}));

const scrollWindow = () => {
  Object.defineProperty(window, "scrollY", { value: 200, writable: true });
  fireEvent.scroll(window);
};

describe("Header component", () => {
	it("Non-sticky header snapshot", () => {
		const header = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		expect(header).toMatchSnapshot();
	});

	it("Sticky header snapshot", () => {
		const header = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		scrollWindow();

		expect(header).toMatchSnapshot();
	});

	describe("Non-sticky header renders correctly", () => {
		it("Transparent header loads when on homepage", () => {
			render(
				<MemoryRouter initialEntries={["/"]}>
					<Header />
				</MemoryRouter>
			)
			
			const headerContClass = screen.getByTestId("headerCont").className;

			expect(headerContClass).toMatch(/transparentHeader/);
		});

		it("Contact header loads when on contact page", () => {
			render(
				<MemoryRouter initialEntries={["/contact"]}>
					<Header />
				</MemoryRouter>
			)
			
			const headerContClass = screen.getByTestId("headerCont").className;

			expect(headerContClass).toMatch(/contactHeader/);
		});

		it("GitHub icon renders correctly and github link works", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)

			const link = screen.getByRole("link", { name: "github icon" });
			const icon = screen.getByTitle("GitHub");

			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", "https://github.com/Dimitrije108/shopping-cart");
			expect(icon).toBeInTheDocument();
			expect(icon).toHaveAttribute("src", "/src/assets/github-mark-white.svg");
		});

		it("Star Wars and Shipyard logo and links render correctly", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)

			const headingLogo = screen.getByTestId("headingLogo");
			const link1 = screen.getByRole("link", { name: "star wars logo" });
			const swLogo = screen.getByRole("img", { name: "star wars logo" });
			const link2 = screen.getByRole("link", { name: "Shipyard" });
			const shipyard = screen.getByText("Shipyard");

			expect(headingLogo).toBeInTheDocument();
			expect(link1).toBeInTheDocument();
			expect(link1).toHaveAttribute("href", "/");
			expect(swLogo).toHaveAttribute("src", "/src/assets/sw-logo.png");
			expect(link2).toBeInTheDocument();
			expect(link2).toHaveAttribute("href", "/");
			expect(shipyard).toBeInTheDocument();
		});

		it("Cart icon, quantity and link render correctly", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)

			const link = screen.getByTestId("cartLink");
			const cartIcon = screen.getByTitle("Shopping Cart");
			const cartQuantity = screen.getByText("2");

			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", "/shopping-cart");
			expect(cartIcon).toBeInTheDocument();
			expect(cartIcon).toHaveAttribute("src", "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Death-Star-2nd-icon.png");
			expect(cartQuantity).toBeInTheDocument();
		});

		it("Navbar renders correctly", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)
			
			const nav = screen.getByRole("navigation");
			const homeList = screen.getByTestId("home");
			const homeLink = screen.getByRole("link", { name: "Home" });

			const starshipsList = screen.getByTestId("starships");
			const starshipsLink = screen.getByRole("link", { name: "Starships" });
			const dropdownCapital = screen.getByText("Capital");
			const dropdownTransport = screen.getByText("Transport");
			const dropdownStarfighter = screen.getByText("Starfighter");

			const contactList = screen.getByTestId("contact");
			const contactLink = screen.getByRole("link", { name: "Contact" });

			expect(nav).toBeInTheDocument();
			expect(homeList).toBeInTheDocument();
			expect(homeLink).toBeInTheDocument();
			expect(homeLink).toHaveAttribute("href", "/");

			expect(starshipsList).toBeInTheDocument();
			expect(starshipsLink).toBeInTheDocument();
			expect(starshipsLink).toHaveAttribute("href", "/starships");
			expect(dropdownCapital).toBeInTheDocument();
			expect(dropdownCapital).toHaveAttribute("href", "/starships/capital");
			expect(dropdownTransport).toBeInTheDocument();
			expect(dropdownTransport).toHaveAttribute("href", "/starships/transport");
			expect(dropdownStarfighter).toBeInTheDocument();
			expect(dropdownStarfighter).toHaveAttribute("href", "/starships/starfighter");

			expect(contactList).toBeInTheDocument();
			expect(contactLink).toBeInTheDocument();
			expect(contactLink).toHaveAttribute("href", "/contact");
		});
	});

	describe("Sticky header renders correctly", () => {
		it("GitHub icon renders correctly and github link works", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)
			
			scrollWindow();

			const link = screen.getByRole("link", { name: "github icon" });
			const icon = screen.getByTitle("GitHub");

			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", "https://github.com/Dimitrije108/shopping-cart");
			expect(icon).toBeInTheDocument();
			expect(icon).toHaveAttribute("src", "/src/assets/github-mark-white.svg");
		});

		it("Navbar renders correctly", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)
			
			scrollWindow();
			
			const nav = screen.getByRole("navigation");
			const homeList = screen.getByTestId("home");
			const homeLink = screen.getByRole("link", { name: "Home" });

			const starshipsList = screen.getByTestId("starships");
			const starshipsLink = screen.getByRole("link", { name: "Starships" });
			const dropdownCapital = screen.getByText("Capital");
			const dropdownTransport = screen.getByText("Transport");
			const dropdownStarfighter = screen.getByText("Starfighter");

			const contactList = screen.getByTestId("contact");
			const contactLink = screen.getByRole("link", { name: "Contact" });

			expect(nav).toBeInTheDocument();
			expect(homeList).toBeInTheDocument();
			expect(homeLink).toBeInTheDocument();
			expect(homeLink).toHaveAttribute("href", "/");

			expect(starshipsList).toBeInTheDocument();
			expect(starshipsLink).toBeInTheDocument();
			expect(starshipsLink).toHaveAttribute("href", "/starships");
			expect(dropdownCapital).toBeInTheDocument();
			expect(dropdownCapital).toHaveAttribute("href", "/starships/capital");
			expect(dropdownTransport).toBeInTheDocument();
			expect(dropdownTransport).toHaveAttribute("href", "/starships/transport");
			expect(dropdownStarfighter).toBeInTheDocument();
			expect(dropdownStarfighter).toHaveAttribute("href", "/starships/starfighter");

			expect(contactList).toBeInTheDocument();
			expect(contactLink).toBeInTheDocument();
			expect(contactLink).toHaveAttribute("href", "/contact");
		});

		it("Cart icon, quantity and link render correctly", () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			)

			scrollWindow();

			const link = screen.getByTestId("cartLink");
			const cartIcon = screen.getByTitle("Shopping Cart");
			const cartQuantity = screen.getByText("2");

			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute("href", "/shopping-cart");
			expect(cartIcon).toBeInTheDocument();
			expect(cartIcon).toHaveAttribute("src", "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Death-Star-2nd-icon.png");
			expect(cartQuantity).toBeInTheDocument();
		});
	});

	it("Starships dropdown is visible when hovered over", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		const starshipsEl = screen.getByTestId("starships");
		const dropdownList = screen.getByTestId("starshipsDropdown");

		await user.hover(starshipsEl);

		expect(dropdownList.className).toContain("visible");
	});

	it("Starships dropdown is not visible when unhovered", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		const starshipsEl = screen.getByTestId("starships");
		const dropdownList = screen.getByTestId("starshipsDropdown");

		await user.hover(starshipsEl);
		
		expect(dropdownList.className).toContain("visible");

		await user.unhover(starshipsEl);

		expect(dropdownList.className).not.toContain("visible");
	});
});

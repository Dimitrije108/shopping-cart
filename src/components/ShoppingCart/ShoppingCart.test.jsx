import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext/useCartContext";
import ShoppingCart from "./ShoppingCart";

vi.mock("../../hooks/useCartContext/useCartContext");

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

describe("Shopping Cart component", () => {
	it("renders heading", () => {
		useCartContext.mockReturnValue({ cart: mockCart });

		render(
			<MemoryRouter>
				<ShoppingCart />
			</MemoryRouter>
		)

		const heading = screen.getByRole("heading", 
			{ name: "Shopping Cart" }
		);

		expect(heading).toBeInTheDocument();
	});

	it("renders cart items correctly", () => {
		useCartContext.mockReturnValue({ cart: mockCart });

		render(
			<MemoryRouter>
				<ShoppingCart />
			</MemoryRouter>
		)

		const cartItems = screen.getAllByTestId("cartItem");
		const ship1Img = screen.getByRole("img", { name: "Millennium Falcon starship" });
		const ship2Heading = screen.getByRole("heading", { name: "X-wing Starfighter" });

		expect(cartItems.length).toEqual(mockCart.length);
		expect(ship1Img).toHaveAttribute("src", 
			"https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg"
		);
		expect(ship2Heading).toBeInTheDocument();
	});

	it("renders empty cart corrrectly", () => {
		useCartContext.mockReturnValue({ cart: [] });

		render(
			<MemoryRouter>
				<ShoppingCart />
			</MemoryRouter>
		)

		const cartItems = screen.queryAllByTestId("cartItem");
		const cartIcon = screen.getByRole("img", { name: "shopping cart icon" });
		const para = screen.getByText("Seems like you haven't added any items to your cart.");
		const link = screen.getByRole("link", { name: "Shop here!" });

		expect(cartItems.length).toBe(0);
		expect(cartIcon).toHaveAttribute("src", "/src/assets/cart.svg");
		expect(para).toBeInTheDocument();
		expect(link).toBeInTheDocument();
	});

	it("renders cart summary component", () => {
		useCartContext.mockReturnValue({ cart: mockCart });

		render(
			<MemoryRouter>
				<ShoppingCart />
			</MemoryRouter>
		)
		
		const heading = screen.getByRole("heading", { name: "Summary" });

		expect(heading).toBeInTheDocument();
	});
})
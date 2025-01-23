import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CartItem from "./CartItem";
import { useCartContext } from "../../../hooks/useCartContext/useCartContext";

vi.mock("../../../hooks/useCartContext/useCartContext", () => ({
  useCartContext: vi.fn(() => ({
		removeFromCart: vi.fn(),
		adjustItemQuantity: vi.fn(),
	})),
}));

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

describe("Cart Item component", () => {
	it("ship card component snapshot", () => {
		const cartItem = render(
			<MemoryRouter>
				<CartItem 
					id={mockCartItem.id}
					img={mockCartItem.img}
					name={mockCartItem.name}
					category={mockCartItem.category}
					price={mockCartItem.price}
					shipQuantity={mockCartItem.quantity}
				/>
			</MemoryRouter>
		)

		expect(cartItem).toMatchSnapshot();
	});

	it("renders cart item component correctly", () => {
		render(
			<MemoryRouter>
				<CartItem 
					id={mockCartItem.id}
					img={mockCartItem.img}
					name={mockCartItem.name}
					category={mockCartItem.category}
					price={mockCartItem.price}
					shipQuantity={mockCartItem.quantity}
				/>
			</MemoryRouter>
		)

		const itemLink1 = screen.getByRole("link", { name: "Millennium Falcon starship" });
		const shipImg = screen.getByRole("img", { name: "Millennium Falcon starship" });
		const heading = screen.getByRole("heading", { name: "Millennium Falcon" });
		const itemLink2 = heading.closest("a");
		const quantityInput = screen.getByRole('spinbutton');
		const removeBtn = screen.getByRole('button', { name: "trashcan remove icon" });
		const removeBtnIcon = screen.getByRole('img', { name: "trashcan remove icon" });

		expect(itemLink1).toBeInTheDocument();
		expect(shipImg).toHaveAttribute("src", "https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg");
		expect(heading).toBeInTheDocument();
		expect(itemLink2).toBeInTheDocument();
		expect(quantityInput).toBeInTheDocument();
		expect(removeBtn).toBeInTheDocument();
		expect(removeBtnIcon).toHaveAttribute("src", "/src/assets/trash.svg");
	});

	it("render 'Price on Request' when price is unavailable", () => {
		render(
			<MemoryRouter>
				<CartItem 
					id={mockCartItem.id}
					img={mockCartItem.img}
					name={mockCartItem.name}
					category={mockCartItem.category}
					price="Price on Request"
					shipQuantity={mockCartItem.quantity}
				/>
			</MemoryRouter>
		)

		const price = screen.getByText('Price on Request');

		expect(price).toHaveTextContent('Price on Request');
	});

	it("render price when price is available", () => {
		render(
			<MemoryRouter>
				<CartItem 
					id={mockCartItem.id}
					img={mockCartItem.img}
					name={mockCartItem.name}
					category={mockCartItem.category}
					price={mockCartItem.price}
					shipQuantity={mockCartItem.quantity}
				/>
			</MemoryRouter>
		)

		const price = screen.getByText("100,000");

		expect(price).toHaveTextContent("100,000");
	});

	it("render correct price based on quantity", () => {
		render(
			<MemoryRouter>
				<CartItem 
					id={mockCartItem2.id}
					img={mockCartItem2.img}
					name={mockCartItem2.name}
					category={mockCartItem2.category}
					price={mockCartItem2.price}
					shipQuantity={mockCartItem2.quantity}
				/>
			</MemoryRouter>
		)

		const price = screen.getByText("449,997");

		expect(price).toHaveTextContent("449,997");
	});

	it("remove button calls removeFromCart functionality", async () => {
		const user = userEvent.setup();

		const mockRemoveFromCart = vi.fn();

		useCartContext.mockReturnValue({
			removeFromCart: mockRemoveFromCart,
		});

		render(
			<MemoryRouter>
				<CartItem 
					id={mockCartItem2.id}
					img={mockCartItem2.img}
					name={mockCartItem2.name}
					category={mockCartItem2.category}
					price={mockCartItem2.price}
					shipQuantity={mockCartItem2.quantity}
				/>
			</MemoryRouter>
		)

		const removeBtn = screen.getByRole("button", { name: "trashcan remove icon" });
		await user.click(removeBtn);

		expect(mockRemoveFromCart).toHaveBeenCalledOnce();
		expect(mockRemoveFromCart).toHaveBeenCalledWith(mockCartItem2.id);
	});
})
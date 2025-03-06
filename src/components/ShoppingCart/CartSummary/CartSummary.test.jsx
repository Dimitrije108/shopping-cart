import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CartSummary from "./CartSummary";
import { useCartContext } from "../../../hooks/useCartContext/useCartContext";

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

vi.mock("../../../hooks/useCartContext/useCartContext", () => ({
	useCartContext: vi.fn(() => ({
		cart: mockCart,
	}))
}));

describe("Cart Summary component", () => {
	it("cart summary snapshot test", () => {
		const cartSummary = render(
			<MemoryRouter>
				<CartSummary />
			</MemoryRouter>
		)

		expect(cartSummary).toMatchSnapshot();
	});

	describe("Renders tests", () => {
		it("renders summary heading", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
	
			const heading = screen.getByRole("heading", { name: "Summary" });
	
			expect(heading).toBeInTheDocument();
		});
	
		it("renders submit discount", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const para = screen.getByText("Discount code");
			const input = screen.getByPlaceholderText("Type in code...");
			const btn = screen.getByRole("button", { name: "Apply" });
	
			expect(para).toBeInTheDocument();
			expect(input).toBeInTheDocument();
			expect(btn).toBeInTheDocument();
		});
	
		it("renders subtotal content", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const para = screen.getByText("Subtotal");
			const subtotal = screen.getByTestId("subtotal");
	
			expect(para).toBeInTheDocument();
			expect(subtotal).toHaveTextContent("549,997");
		});

		it("renders shipping content", () => {
			useCartContext.mockReturnValueOnce({
				cart: [mockCartItem2],
			});

			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const para = screen.getByText("Shipping");
			const infoBtn = screen.getByRole("button", { name: "free shipping tooltip" });
			const infoBtnIcon = screen.getByRole("img", { name: "free shipping tooltip" });
			const shippingPrice = screen.getByTestId("shipping");
	
			expect(para).toBeInTheDocument();
			expect(infoBtn).toBeInTheDocument();
			expect(infoBtnIcon).toHaveAttribute("src", "/src/assets/icons/info-circle.svg");
			expect(shippingPrice).toHaveTextContent("25,000");
		});

		it("renders discount content", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const para = screen.getByText("Discount");
			const discount = screen.getByTestId("discount");
	
			expect(para).toBeInTheDocument();
			expect(discount).toHaveTextContent("0");
		});

		it("renders total cost content", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const heading = screen.getByRole("heading", { name: "Total" });
			const total = screen.getByTestId("total");
			const credits = screen.getByText("credits");
	
			expect(heading).toBeInTheDocument();
			expect(total).toHaveTextContent("549,997");
			expect(credits).toBeInTheDocument();
		});

		it("renders total cost content", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const checkoutBtn = screen.getByRole("button", { name: "Checkout" });
			const continueShoppingLink = screen.getByRole(
				"link", { name: "Continue shopping" }
			);

			expect(checkoutBtn).toBeInTheDocument();
			expect(continueShoppingLink).toBeInTheDocument();
		});
	})

	describe("Logic tests", () => {
		it("tooltip toggles on/off after button click", async () => {
			const user = userEvent.setup();

			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)

			const tooltipBtn = screen.getByRole("img", { name: "free shipping tooltip" });
			
			await user.click(tooltipBtn);

			const tooltip = screen.getByText("Free shipping for orders larger than 500,000 credits!");
			expect(tooltip).toBeInTheDocument();

			await user.click(tooltipBtn);

			expect(tooltip).not.toBeInTheDocument();
		});

		it("subtotal calculates correctly", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const subtotal = screen.getByTestId("subtotal");
	
			expect(subtotal).toHaveTextContent("549,997");
		});

		it("shipping cost renders 'Free' for orders larger than set threshold", () => {
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const shippingPrice = screen.getByTestId("shipping");
	
			expect(shippingPrice).toHaveTextContent("Free");
		});

		it("shipping cost renders shipping price for orders smaller than set threshold", () => {
			useCartContext.mockReturnValueOnce({
				cart: [mockCartItem],
			});
			
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const shippingPrice = screen.getByTestId("shipping");
	
			expect(shippingPrice).toHaveTextContent("25,000");
		});
		
		it("total calculates correctly", () => {
			useCartContext.mockReturnValueOnce({
				cart: [mockCartItem2],
			});
			
			render(
				<MemoryRouter>
					<CartSummary />
				</MemoryRouter>
			)
			
			const total = screen.getByTestId("total");
	
			expect(total).toHaveTextContent("474,997");
		});
	})
})
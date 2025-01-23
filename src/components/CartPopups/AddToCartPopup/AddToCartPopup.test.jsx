import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AddToCartPopup from "./AddToCartPopup";
import { useCartPopup } from "../../../hooks/useCartPopup/useCartPopup";
import styles from "./AddToCartPopup.module.css";

vi.mock("../../../hooks/useCartPopup/useCartPopup", () => ({
  useCartPopup: vi.fn(() => ({
		removeTimer: vi.fn(),
		resetTimer: vi.fn(),
	})),
}));

const mockPopup = {
	id: "6429291f021f17e13fbc1db9",
	quantity: 1,
	name: "Millennium Falcon",
	isExiting: false,
};

describe("Add To Cart Popup component", () => {
	it("add to cart popup component snapshot", () => {
		const popup = render(
			<MemoryRouter>
				<AddToCartPopup 
					id={mockPopup.id}
					quantity={mockPopup.quantity} 
					name={mockPopup.name}
					isExiting={mockPopup.isExiting}
				/>
			</MemoryRouter>
		)

		expect(popup).toMatchSnapshot();
	});

	it("renders add to cart popup elements correctly", () => {
		render(
			<MemoryRouter>
				<AddToCartPopup 
					id={mockPopup.id}
					quantity={mockPopup.quantity} 
					name={mockPopup.name}
					isExiting={mockPopup.isExiting}
				/>
			</MemoryRouter>
		)

		const link = screen.getByRole("link", { name: /succesfully added to cart!/i });
		const quantity = screen.getByText("1x");
		const name = screen.getByText("Millennium Falcon");
		const added = screen.getByText("succesfully added to cart!");
		const hoverArrows = screen.getAllByRole("img");

		expect(link).toBeInTheDocument();
		expect(quantity).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(added).toBeInTheDocument();
		expect(hoverArrows).toHaveLength(3);
	});
	
	it("removeTimer is called upon mouseenter", async () => {
		const user = userEvent.setup();
		
		const mockRemoveTimer = vi.fn();

		useCartPopup.mockReturnValue({
			removeTimer: mockRemoveTimer,
		});

		render(
			<MemoryRouter>
				<AddToCartPopup 
					id={mockPopup.id}
					quantity={mockPopup.quantity} 
					name={mockPopup.name}
					isExiting={mockPopup.isExiting}
				/>
			</MemoryRouter>
		)

		const link = screen.getByRole("link", { name: /succesfully added to cart!/i });

		await user.hover(link);

		expect(mockRemoveTimer).toHaveBeenCalledOnce();
	});

	it("resetTimer is called upon mouseleave", async () => {
		const user = userEvent.setup();
		
		const mockRemoveTimer = vi.fn();
		const mockResetTimer = vi.fn();

		useCartPopup.mockReturnValue({
			removeTimer: mockRemoveTimer,
			resetTimer: mockResetTimer,
		});

		render(
			<MemoryRouter>
				<AddToCartPopup 
					id={mockPopup.id}
					quantity={mockPopup.quantity} 
					name={mockPopup.name}
					isExiting={mockPopup.isExiting}
				/>
			</MemoryRouter>
		)

		const link = screen.getByRole("link", { name: /succesfully added to cart!/i });

		await user.hover(link);

		expect(mockRemoveTimer).toHaveBeenCalledOnce();

		await user.unhover(link);

		expect(mockResetTimer).toHaveBeenCalledOnce();
	});
	
	it("renders add to cart popup elements correctly", () => {
		render(
			<MemoryRouter>
				<AddToCartPopup 
					id={mockPopup.id}
					quantity={mockPopup.quantity} 
					name={mockPopup.name}
					isExiting={true}
				/>
			</MemoryRouter>
		)

		const link = screen.getByRole("link", { name: /succesfully added to cart!/i });

		expect(link).toBeInTheDocument();
		expect(link).toHaveClass(styles.exiting);
	});
});
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ItemQuantity from "./ItemQuantity";

describe("Item Quantity component", () => {
	it("item quantity component snapshot", () => {
		const itemQuantity = render(
			<MemoryRouter>
				<ItemQuantity 
					quantity={1}
				/>
			</MemoryRouter>
		)

		expect(itemQuantity).toMatchSnapshot();
	});
	
	it("render item quantity elements", () => {
		render(
			<MemoryRouter>
				<ItemQuantity 
					quantity={1}
				/>
			</MemoryRouter>
		)

		const increaseBtn = screen.getByRole('button', { name: "+" });
		const decreaseBtn = screen.getByRole('button', { name: "-" });
		const input = screen.getByRole('spinbutton');

		expect(increaseBtn).toBeInTheDocument();
		expect(decreaseBtn).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(input.value).toEqual('1');
	});

	it("increase button works correctly", async () => {
		const user = userEvent.setup();
		const mockIncreaseBtn = vi.fn();

		render(
			<MemoryRouter>
				<ItemQuantity 
					quantity={1}
					increase={mockIncreaseBtn}
				/>
			</MemoryRouter>
		)

		const increaseBtn = screen.getByRole('button', { name: "+" });

		await user.click(increaseBtn);

		expect(mockIncreaseBtn).toHaveBeenCalledTimes(1);
	});

	it("decrease button works correctly", async () => {
		const user = userEvent.setup();
		const mockDecreaseBtn = vi.fn();

		render(
			<MemoryRouter>
				<ItemQuantity 
					quantity={1}
					decrease={mockDecreaseBtn}
				/>
			</MemoryRouter>
		)

		const decreaseBtn = screen.getByRole('button', { name: "-" });

		await user.click(decreaseBtn);

		expect(mockDecreaseBtn).toHaveBeenCalledTimes(1);
	});

	it("onChange input changes to the correct value", async () => {
		const user = userEvent.setup();
		const mockChangeQuantity = vi.fn();
		let mockQuantity = 1;

		const setQuantity = (quantity) => {
			mockQuantity = quantity;
			mockChangeQuantity(quantity);
		}

		const { rerender } = render(
			<MemoryRouter>
				<ItemQuantity 
					quantity={mockQuantity}
					change={(e) => setQuantity(e.target.value)}
				/>
			</MemoryRouter>
		)
		
		const input = screen.getByRole('spinbutton');

		await user.clear(input);
		await user.type(input, '5');
		// rerender the component so that changes are reflected and tested
		rerender(
			<MemoryRouter>
				<ItemQuantity 
					quantity={mockQuantity}
					change={(e) => setQuantity(e.target.value)}
				/>
			</MemoryRouter>
		)

		expect(mockChangeQuantity).toHaveBeenCalledTimes(2);
		expect(mockChangeQuantity).toHaveBeenCalledWith('');
		expect(mockChangeQuantity).toHaveBeenCalledWith('15');
		expect(input.value).toEqual('15');
	});
})
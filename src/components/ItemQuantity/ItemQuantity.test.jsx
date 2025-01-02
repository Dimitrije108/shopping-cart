import { describe, it, expect, vi } from "vitest";
import { render, rerender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ItemQuantity from "./ItemQuantity";

describe("Item Quantity component", () => {
	it("render item quantity component correctly", () => {
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

		const increaseBtn = screen.getByRole('button', { name: "+"});
		const decreaseBtn = screen.getByRole('button', { name: "-"});
		const input = screen.getByRole('spinbutton');

		expect(increaseBtn).toBeInTheDocument();
		expect(decreaseBtn).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(input.value).toEqual('1');
	});

	it("increase and decrease buttons work", async () => {
		const user = userEvent.setup();
		const mockIncreaseBtn = vi.fn();
		const mockDecreaseBtn = vi.fn();

		render(
			<MemoryRouter>
				<ItemQuantity 
					quantity={1}
					increase={mockIncreaseBtn}
					decrease={mockDecreaseBtn}
				/>
			</MemoryRouter>
		)

		const increaseBtn = screen.getByRole('button', { name: "+"});
		const decreaseBtn = screen.getByRole('button', { name: "-"});

		await user.click(increaseBtn);
		await user.click(decreaseBtn);

		expect(mockIncreaseBtn).toHaveBeenCalledTimes(1);
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
		// rerenders the component so that changes can be reflected and tested
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
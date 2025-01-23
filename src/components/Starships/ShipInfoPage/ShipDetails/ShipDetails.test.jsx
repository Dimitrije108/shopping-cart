import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { useCartContext } from "../../../../hooks/useCartContext/useCartContext";
import ShipDetails from "./ShipDetails";

vi.mock("../../../../hooks/useCartContext/useCartContext", () => ({
	useCartContext: vi.fn(() => ({
		addToCart: vi.fn(),
	})),
}));

const mockBasicData = { 
	name: "Imperial Star Destroyer", 
	image: "star-destroyer.jpg", 
	description: "Imperial capital ship description", 
};

const mockAdvData = { 
	cost_in_credits: "150000000",
	model: "	Imperial I-class Star Destroyer",
	starship_class: "Star Destroyer",
	manufacturer: "Kuat Drive Yards",
	length: "1,600",
	crew: "47,060",
	passengers: "",
	max_atmosphering_speed: "975",
	hyperdrive_rating: "	2.0",
	MGLT: "60",
	cargo_capacity: "36000000",
	consumables: "2 years",
};

const mockAdvData2 = { 
	cost_in_credits: "unknown",
};

describe("Ship Details component", () => {
	describe("Snapshot test", () => {
		it("ship details component snapshot", () => {
			const shipDetails = render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			expect(shipDetails).toMatchSnapshot();
		});
	})

	describe("Render tests", () => {
		it("render ship image with correct src and alt attributes", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const img = screen.getByRole('img');
	
			expect(img).toBeInTheDocument();
			expect(img).toHaveAttribute('src', 'star-destroyer.jpg');
			expect(img).toHaveAttribute('alt', 'Imperial Star Destroyer starship');
		});
		
		it("render 'ADD' button correctly", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const addBtn = screen.getByRole('button', { name: 'ADD' });
	
			expect(addBtn).toBeInTheDocument();
			expect(addBtn.textContent).toMatch('ADD');
		});
	
		it("render 'Get Pre-Qualified' button correctly", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const qualifiedBtn = screen.getByRole('button', { name: 'Get Pre-Qualified' });
	
			expect(qualifiedBtn).toBeInTheDocument();
			expect(qualifiedBtn.textContent).toMatch('Get Pre-Qualified');
		});

		it("render price correctly", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const price = screen.getByText('150,000,000');
	
			expect(price).toHaveTextContent('150,000,000');
		});
		
		it("render ship info table rows", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const tables = screen.getAllByRole('table');
			const firstTable = within(tables[0]).getAllByRole('row');
			const secondTable = within(tables[1]).getAllByRole('row');
			const randomEl = within(tables[0]).getByText('Model');
			const randomEl2 = within(tables[1]).getByText('N/A');
	
			expect(tables.length).toBe(2);
			expect(firstTable.length).toBe(5);
			expect(secondTable.length).toBe(6);
			expect(randomEl).toBeInTheDocument();
			expect(randomEl2).toBeInTheDocument();
		});
	})	

	describe("Conditional rendering tests", () => {
		it("display finance offer when ship price is valid", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const finance = screen.getByTestId('financeOffer');
	
			expect(finance).toBeInTheDocument();
		});
	
		it("does not display finance offer when ship price is invalid", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData2}
					/>
				</MemoryRouter>
			)
	
			const finance = screen.queryByTestId('financeOffer');
	
			expect(finance).not.toBeInTheDocument();
		});
		
		it("render 'Price on Request' when price unknown", () => {
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData2}
					/>
				</MemoryRouter>
			)
	
			const price = screen.getByText('Price on Request');
	
			expect(price).toHaveTextContent('Price on Request');
		});
	})

	describe("Logic tests", () => {
		it("increase quantity by 1 via increase button", async () => {
			const user = userEvent.setup();
	
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const increaseBtn = screen.getByRole('button', { name: "+" });
			const input = screen.getByRole('spinbutton');
	
			await user.click(increaseBtn);
	
			expect(input.value).toEqual('2');
		});
	
		it("decrease quantity by 1 via decrease button", async () => {
			const user = userEvent.setup();
	
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const decreaseBtn = screen.getByRole('button', { name: "-" });
			const input = screen.getByRole('spinbutton');
	
			await user.clear(input);
			await user.type(input, '5');
			await user.click(decreaseBtn);
	
			expect(input.value).toEqual('4');
		});
	
		it("change quantity via input changes to the correct value", async () => {
			const user = userEvent.setup();
	
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
			
			const input = screen.getByRole('spinbutton');
	
			await user.clear(input);
	
			expect(input.value).toEqual('');
	
			await user.type(input, '8');
	
			expect(input.value).toEqual('8');
		});
	
		it("reset quantity to 1 if input field is left empty", async () => {
			const user = userEvent.setup();
	
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
			
			const input = screen.getByRole('spinbutton');
	
			await user.clear(input);
	
			expect(input.value).toEqual('');
			expect(input).toHaveFocus();
	
			await user.tab();
	
			expect(input).not.toHaveFocus();
			expect(input.value).toEqual('1');
		});
	
		it("add button adds item/s to cart with correct quantity", async () => {
			const user = userEvent.setup();
	
			const mockAddToCart = vi.fn();
			useCartContext.mockReturnValue({ addToCart: mockAddToCart});
	
			render(
				<MemoryRouter>
					<ShipDetails 
						basic={mockBasicData}
						details={mockAdvData}
					/>
				</MemoryRouter>
			)
	
			const input = screen.getByRole('spinbutton');
			await user.clear(input);
			await user.type(input, '8');
			const addBtn = screen.getByRole('button', { name: "ADD" });
			await user.click(addBtn);
	
			expect(mockAddToCart).toHaveBeenCalledTimes(1);
			expect(mockAddToCart).toHaveBeenCalledWith(
				expect.objectContaining({
					quantity: 8,
				})
			);
		});
	})
});
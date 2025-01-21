import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useCartContext } from "../../../hooks/useCartContext/useCartContext";
import ShipCard from "./ShipCard";

vi.mock("../../../hooks/useCartContext/useCartContext", () => ({
	useCartContext: vi.fn(() => ({
		addToCart: vi.fn(),
	})),
}));

describe("Ship Card component", () => {
	it("ship card component snapshot", () => {
		const shipCard = render(
			<MemoryRouter>
				<ShipCard 
					id={'1234567890'}
					category={'starfighter'}
					name={'Millennium Falcon'}
					img={'https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg'}
					price={'100000'}
				/>
			</MemoryRouter>
		)

		expect(shipCard).toMatchSnapshot();
	});

	it("render elements inside the card", () => {
		render(
			<MemoryRouter>
				<ShipCard 
					id={'1234567890'}
					category={'starfighter'}
					name={'Millennium Falcon'}
					img={'https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg'}
					price={'100000'}
				/>
			</MemoryRouter>
		)

		const bckImg = screen.getByTestId('img-cont');
		const name = screen.getByRole('heading').textContent;
		const price = screen.getByText('100,000');
		const btn = screen.getByRole('button');

		expect(screen.getByRole('link')).toBeInTheDocument();
		expect(bckImg).toBeInTheDocument();
		expect(name).toMatch('Millennium Falcon');
		expect(price).toHaveTextContent('100,000');
		expect(btn).toBeInTheDocument();
	});

	it("redirect user to link destination", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={['/starships']}>
				<Routes>
					<Route
						path="/starships"
						element={
							<ShipCard 
								id={'1234567890'}
								category={'starfighter'}
								name={'Millennium Falcon'}
								img={'https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg'}
								price={'100000'}
							/>
						}
					/>
					<Route path="/starships/:category/:id" element={<div>Starship Page</div>} />
				</Routes>
			</MemoryRouter>
		)

		const link = screen.getByRole('link');
		await user.click(link);

		expect(screen.getByText('Starship Page')).toBeInTheDocument();
	});

	it("add button adds item to cart", async () => {
		const user = userEvent.setup();

		const mockAddToCart = vi.fn();
		useCartContext.mockReturnValue({ addToCart: mockAddToCart});

		render(
			<MemoryRouter>
				<ShipCard 
					id={'1234567890'}
					category={'starfighter'}
					name={'Millennium Falcon'}
					img={'https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg'}
					price={'100000'}
				/>
			</MemoryRouter>
		)

		const addBtn = screen.getByRole('button', { name: "ADD" });
		await user.click(addBtn);

		expect(mockAddToCart).toHaveBeenCalledTimes(1);
	});

	it("render 'Price on Request' when price unknown", () => {
		render(
			<MemoryRouter>
				<ShipCard 
					id={'1234567890'}
					category={'starfighter'}
					name={'Millennium Falcon'}
					img={'https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg'}
					price={'unknown'}
				/>
			</MemoryRouter>
		)

		const price = screen.getByText('Price on Request');

		expect(price).toHaveTextContent('Price on Request');
	});
})
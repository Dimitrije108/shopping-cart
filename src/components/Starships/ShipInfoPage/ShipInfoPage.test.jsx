import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData/useFetchData";
import ShipInfoPage from "./ShipInfoPage";

vi.mock("../../../hooks/useFetchData/useFetchData", () => ({
	default: vi.fn(() => ({
		data: null,
		error: null,
	})),
}))

beforeEach(() => {
	vi.clearAllMocks();
});

const mockBasicData = [
	{ _id: "123", name: "Imperial Star Destroyer", image: "star-destroyer.jpg" },
	{ _id: "456", name: "Republic Cruiser", image: "rep-cruiser.jpg" },
];

const mockAdvData = [
	{ result: { properties: { cost_in_credits: "1000000" } } },
	{ result: { properties: { cost_in_credits: "500000" } } },
];

describe("Ship Info Page component", () => {
	it("render error when error is returned", () => {
		const mockError = "Error: Something went wrong";
		useFetchData.mockReturnValueOnce({ 
			data: null,
			error: mockError,
		});

		render(
			<MemoryRouter>
				<ShipInfoPage />
			</MemoryRouter>
		)

		const error = screen.getByRole('heading', 
			{ name: "Oops! Something went wrong. Server failed to load data." }
		);

		expect(error).toBeInTheDocument();
	});

	it("render loading skeleton when fetching data", () => {
		useFetchData.mockReturnValueOnce({ 
			data: null,
			error: null,
		});

		render(
			<MemoryRouter>
				<ShipInfoPage />
			</MemoryRouter>
		)

		const skeleton = screen.getByTestId("skelDetails");

		expect(skeleton).toBeInTheDocument();
	});

	it("render data when it's available", () => {
		useFetchData.mockReturnValueOnce({ 
			data: mockBasicData,
			error: null,
		}).mockReturnValueOnce({
			data: mockAdvData,
			error: null,
		});

		render(
			<MemoryRouter>
				<ShipInfoPage />
			</MemoryRouter>
		)
		
		const shipDetails = screen.getByTestId("shipDetails");

		expect(shipDetails).toBeInTheDocument();
	});
})
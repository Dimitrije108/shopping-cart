import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData/useFetchData";
import DisplayShips from "./DisplayShips";

vi.mock("../../../hooks/useFetchData/useFetchData", () => ({
	default: vi.fn(() => ({
		data: null,
		error: null,
	})),
}))

beforeEach(() => {
	vi.clearAllMocks();
});

const mockArr = ["url1", "url2", "url3", "url4"];

const mockBasicData = [
	{ _id: "123", name: "Imperial Star Destroyer", image: "star-destroyer.jpg" },
	{ _id: "456", name: "Republic Cruiser", image: "rep-cruiser.jpg" },
];

const mockAdvData = [
	{ result: { properties: { cost_in_credits: "1000000" } } },
	{ result: { properties: { cost_in_credits: "500000" } } },
];

describe("Display Ships component", () => {
	it("render error when error is returned", () => {
		const mockError = "Error: Something went wrong";
		useFetchData.mockReturnValueOnce({ 
			data: null,
			error: mockError,
		});

		render(
			<MemoryRouter>
				<DisplayShips 
					basicDataArr={mockArr}
					shipType={"Capital"}
				/>
			</MemoryRouter>
		)

		const heading = screen.getByRole('heading', 
			{ name: "Starships | Capital ships" }
		);
		const error = screen.getByRole('heading', 
			{ name: "Oops! Something went wrong. Server failed to load data." }
		);

		expect(heading).toBeInTheDocument();
		expect(error).toBeInTheDocument();
	});

	it("render loading skeleton component while data is being fetched", () => {
		useFetchData.mockReturnValueOnce({ 
			data: null,
			error: null,
		});

		render(
			<MemoryRouter>
				<DisplayShips 
					basicDataArr={mockArr}
					shipType={"Transport"}
				/>
			</MemoryRouter>
		)

		const heading = screen.getByRole('heading', 
			{ name: "Starships | Transport ships" }
		);
		
		const skelCards = screen.getAllByTestId("skelCard");

		expect(heading).toBeInTheDocument();
		expect(skelCards.length).toBe(4);
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
				<DisplayShips 
					basicDataArr={mockArr}
					advDataArr={mockArr}
					shipType={"Transport"}
				/>
			</MemoryRouter>
		)

		const heading = screen.getByRole('heading', 
			{ name: "Starships | Transport ships" }
		);
		
		const shipCards = screen.getAllByTestId("shipCard");

		expect(heading).toBeInTheDocument();
		expect(shipCards.length).toBe(2);
	});
})
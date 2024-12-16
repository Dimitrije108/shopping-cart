import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, waitFor } from '@testing-library/react';
import useFetchData from "../useFetchData/useFetchData";
import useFetchStarships from "./useFetchStarships";
import { act } from "react";

vi.mock("../useFetchData/useFetchData");

beforeEach(() => {
	vi.clearAllMocks();
})

afterEach(() => {
	vi.restoreAllMocks();
})

describe("useFetchStarships custom hook", () => {
	it("returns data successfully", async () => {
		const mockData = [
      { name: "Starship 1", model: "Model 1", manufacturer: "Manufacturer 1" },
      { name: "Starship 2", model: "Model 2", manufacturer: "Manufacturer 2" }
    ];

		useFetchData.mockReturnValue({
			data: mockData,
			error: null,
		})

		const { result } = renderHook(() => useFetchStarships());

		expect(result.current.data).toEqual(mockData);
		expect(result.current.error).toBeNull();
	});

	it("returns error successfully", async () => {
		const mockError = new Error("Failed to fetch");

		useFetchData.mockReturnValue({
			data: null,
			error: mockError,
		})

		const { result } = renderHook(() => useFetchStarships());

		expect(result.current.data).toBeNull();
		expect(result.current.error).toEqual(mockError);
	});
})
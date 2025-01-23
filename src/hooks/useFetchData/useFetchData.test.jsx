import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, waitFor } from '@testing-library/react';
import useFetchData from "./useFetchData";

beforeEach(() => {
	global.fetch = vi.fn();
	localStorage.clear();
})

afterEach(() => {
	vi.restoreAllMocks();
})

describe("useFetchData custom hook", () => {
	it("sets loading to true", () => {
		const mockData = { message: 'Success' };
		global.fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => (mockData)
		})

		const { result } = renderHook(() => useFetchData('/mock-url'));

		expect(result.current.loading).toBe(true);
	});

	it("fetches single url data successfully", async () => {
		const mockData = { message: 'Success' };
		global.fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => (mockData)
		})

		const { result } = renderHook(() => useFetchData(['/mock-url']));

		await waitFor(() => {
			expect(result.current.data).toEqual([mockData]);
			expect(result.current.loading).toBe(false);
			expect(result.current.error).toBeNull();
		})
	});

	it("fetches an array of url's successfully", async () => {
		const mockData = [{ message: 'Success' }];

		global.fetch
			.mockResolvedValueOnce({
				ok: true,
				json: async () => (mockData)
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => (mockData)
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => (mockData)
			})

		const { result } = renderHook(() => useFetchData(['/mock-url', '/mock-url', '/mock-url',]));

		await waitFor(() => {
			expect(result.current.data).toEqual([mockData, mockData, mockData]);
			expect(result.current.loading).toBe(false);
			expect(result.current.error).toBeNull();
		})
	});

	it("throws an error when fetch fails", async () => {
		const mockError = new Error("Fetch failed");
		global.fetch.mockRejectedValueOnce(mockError);
	
		const { result } = renderHook(() => useFetchData(['/mock-url']));
	
		await waitFor(() => {
			expect(result.current.data).toBeNull();
			expect(result.current.loading).toBe(false);
			expect(result.current.error).toEqual([{ error: "Fetch failed", url: '/mock-url' }]);
		});
	});

	it("aborts on unmount", () => {
		global.fetch.mockImplementationOnce(() => {
			return new Promise((res, reject) => {
				setTimeout(() => reject(new DOMException('AbortError', 'AbortError')), 100)
			})
		});

		const { result, unmount } = renderHook(() => useFetchData('/mock-url'));

		unmount();

		expect(result.current.data).toBeNull();
		expect(result.current.error).toBeNull();
	});
})
import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from '@testing-library/react';
import { useAddToCartPopup } from "./useCartPopup";

beforeEach(() => {
	vi.clearAllTimers();
});

vi.useFakeTimers();

const mockQuantity = 7;
const mockName = "X-wing Starfighter";

describe("useCartPopup custom hook", () => {
	it("addPopup adds a new popup to the popups correctly", () => {
		// Spy on the setTimeout function
		const setTimeoutSpy = vi.spyOn(global, 'setTimeout');

		const { result } = renderHook(() => useAddToCartPopup());
		
		act(() => {
			result.current.addPopup(mockQuantity, mockName);
		});

		expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
		expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 3000);

		expect(result.current.popups[0]).toHaveProperty("quantity", 7);
		expect(result.current.popups[0]).toHaveProperty("name", "X-wing Starfighter");
		expect(result.current.popups.length).toBe(1);

		act(() => {
			vi.advanceTimersByTime(4000);
		});

		expect(result.current.popups).toHaveLength(0);

		setTimeoutSpy.mockRestore();
	});

	it("removeTimer clears the popup timer and prevents the popup from being removed", () => {
		const { result } = renderHook(() => useAddToCartPopup());
		
		act(() => {
			result.current.addPopup(mockQuantity, mockName);
		});

		expect(result.current.popups.length).toBe(1);

		act(() => {
			result.current.removeTimer(result.current.popups[0].id);
		});

		act(() => {
			vi.advanceTimersByTime(4000);
		});

		expect(result.current.popups).toHaveLength(1);
	});

	it("resetTimer clears the existing timer and sets a new timer ", () => {
		// Spy on the setTimeout function
		const setTimeoutSpy = vi.spyOn(global, 'setTimeout');

		const { result } = renderHook(() => useAddToCartPopup());
		
		act(() => {
			result.current.addPopup(mockQuantity, mockName);
		});

		expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
		expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 3000);

		expect(result.current.popups.length).toBe(1);

		act(() => {
			result.current.removeTimer(result.current.popups[0].id);
		});

		act(() => {
			result.current.resetTimer(result.current.popups[0].id);
		});

		act(() => {
			vi.advanceTimersByTime(3000);
		});

		expect(result.current.popups).toHaveLength(0);

		setTimeoutSpy.mockRestore();
	});
});

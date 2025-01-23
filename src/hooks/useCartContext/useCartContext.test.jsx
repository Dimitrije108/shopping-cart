import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from '@testing-library/react';
import { useShoppingCart } from "./useCartContext";

beforeEach(() => {
	localStorage.clear();
});

const mockShip = {
	id: "6429291f021f17e13fbc1e3c",
	img: "https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg",
	name: "X-wing Starfighter",
	category: "starfighter",
	price: "149999",
	quantity: 7,
};

const mockShip2 = {
	id: "6429291f021f17e13fbc1d42",
	img: "https://lumiere-a.akamaihd.net/v1/images/databank_arc170starfighter_01_169_f932abcb.jpeg",
	name: "ARC-170 Starfighter",
	category: "starfighter",
	price: "155000",
	quantity: 3,
};

describe("useCartContext custom hook", () => {
	describe("addToCart", () => {
		it("add new item to the cart", () => {
			const { result } = renderHook(() => useShoppingCart());
	
			act(() => {
				result.current.addToCart(mockShip);
			});
	
			expect(result.current.cart).toEqual([mockShip]);
			expect(result.current.cart.length).toBe(1);
		});
	
		it("update the quantity of an already present item in the cart", () => {
			const { result } = renderHook(() => useShoppingCart());
	
			act(() => {
				result.current.addToCart(mockShip);
			});
			act(() => {
				result.current.addToCart(mockShip);
			});
	
			expect(result.current.cart[0].quantity).toEqual(14);
			expect(result.current.cart.length).toBe(1);
		});
	
		it("doesn't exceed item quantity limit", () => {
			const { result } = renderHook(() => useShoppingCart());
	
			act( () => {
				result.current.addToCart(mockShip);
			});
			act(() => {
				result.current.addToCart(mockShip);
			});
			act(() => {
				result.current.addToCart(mockShip);
			});
	
			expect(result.current.cart[0].quantity).toEqual(14);
			expect(result.current.cart.length).toBe(1);
		});
	});

	describe("removeFromCart", () => {
		it("remove an item from the cart", () => {
			const { result } = renderHook(() => useShoppingCart());
	
			act( () => {
				result.current.addToCart(mockShip);
			});
			act( () => {
				result.current.addToCart(mockShip2);
			});
			act( () => {
				result.current.removeFromCart("6429291f021f17e13fbc1e3c");
			});
	
			expect(result.current.cart).toEqual([mockShip2]);
			expect(result.current.cart.length).toBe(1);

			act( () => {
				result.current.removeFromCart("6429291f021f17e13fbc1d42");
			});

			expect(result.current.cart).toEqual([]);
			expect(result.current.cart.length).toBe(0);
		});
	
		it("cart remains unchanged if item isn't in the cart", () => {
			const { result } = renderHook(() => useShoppingCart());
	
			act( () => {
				result.current.addToCart(mockShip);
			});
			act( () => {
				result.current.removeFromCart("123456789");
			});
	
			expect(result.current.cart).toEqual([mockShip]);
			expect(result.current.cart.length).toBe(1);
		});
	});
});

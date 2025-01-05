import { describe, it, expect } from "vitest";
import formatNumber from "./formatNumber";

describe("Format number helper function", () => {
	it("format the passed number correctly", () => {
		const format = formatNumber("150000000")

		expect(format).toEqual("150,000,000");
	});

	it("return empty string when empty string is passed", () => {
		const format = formatNumber("")

		expect(format).toEqual("");
	});

	it("return 'Price on Request' when 'Price on Request' is passed", () => {
		const format = formatNumber("Price on Request")

		expect(format).toEqual("Price on Request");
	});

	it("return 'Price on Request' when non numbers are passed", () => {
		const format = formatNumber("absde34")

		expect(format).toEqual("Price on Request");
	});
})
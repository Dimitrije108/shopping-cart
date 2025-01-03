import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SkeletonCard from "./SkeletonCard"

describe("Skeleton Card component", () => {
	it("skeleton card component snapshot", () => {
		const skeletonCard = render(
			<MemoryRouter>
				<SkeletonCard />
			</MemoryRouter>
		)

		expect(skeletonCard).toMatchSnapshot();
	});
});
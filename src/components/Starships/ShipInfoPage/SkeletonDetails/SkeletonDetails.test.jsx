import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SkeletonDetails from "./SkeletonDetails"

describe("Skeleton Details component", () => {
	it("render the skeleton details component", () => {
		const skeletonDetails = render(
			<MemoryRouter>
				<SkeletonDetails />
			</MemoryRouter>
		)

		expect(skeletonDetails).toMatchSnapshot();
	});
});
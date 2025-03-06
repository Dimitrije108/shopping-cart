import { describe, it, expect } from "vitest";
import { render, screen  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import CarouselSection from "./CarouselSection";

describe("Homepage's Carousel Section component", () => {
	it("Carousel Section snapshot", () => {
		const carouselSection = render(
			<MemoryRouter>
				<CarouselSection />
			</MemoryRouter>
		)

		expect(carouselSection).toMatchSnapshot();
	});

	describe("Carousel Section elements render correctly", () => {
		it("Carousel Track elements render correctly", () => {
			render(
				<MemoryRouter>
					<CarouselSection />
				</MemoryRouter>
			)
			
			const firstSlideImg = screen.getByAltText("Star Destroyer Capital ship");
			const firstSlideHeading = screen.getByRole("heading", { name: "Only a Sith Deals in Full Retail. Shop Our Discounts!" });
			const firstSlideBtn = screen.getByRole("button", { name: "Best Capital Ships in the Galaxy - Shop Now!" });

			const buttonLinks = screen.getAllByTestId("starshipsLink");
			const paragraphs = screen.getAllByTitle("Imperial");
			
			expect(firstSlideImg).toHaveAttribute("src", "/src/assets/images/carousel/star-destroyer.jpg");
			expect(firstSlideHeading).toBeInTheDocument();
			expect(firstSlideBtn).toBeInTheDocument();

			expect(buttonLinks[0]).toHaveAttribute("href", "/starships/capital#capitalSection");
			expect(paragraphs[0]).toHaveTextContent("Only a Sith Deals in Full Retail. Shop Our Discounts!");
		});

		it("Carousel quick nav renders correctly", () => {
			render(
				<MemoryRouter>
					<CarouselSection />
				</MemoryRouter>
			)
			
			const buttonLinks = screen.getAllByTestId("quickNavBtn");

			expect(buttonLinks[2]).toBeInTheDocument();
			expect(buttonLinks).toHaveLength(3);
		});

		it("Carousel previous and next buttons render correctly", () => {
			render(
				<MemoryRouter>
					<CarouselSection />
				</MemoryRouter>
			)
			
			const leftBtn = screen.getByTestId("leftBtn");
			const rightBtn = screen.getByTestId("rightBtn");
			const leftIcon = screen.getByAltText("left arrow");
			const rightIcon = screen.getByAltText("right arrow");

			expect(leftBtn).toBeInTheDocument();
			expect(rightBtn).toBeInTheDocument();
			expect(leftIcon).toHaveAttribute("src", "/src/assets/icons/carousel-left-arrow.svg");
			expect(rightIcon).toHaveAttribute("src", "/src/assets/icons/carousel-right-arrow.svg");
		});
	});

	describe("Carousel Section functionality", () => {
		it("Carousel next slide functionality works correctly", async () => {
			const user = userEvent.setup();

			render(
				<MemoryRouter>
					<CarouselSection />
				</MemoryRouter>
			)
			
			const rightBtn = screen.getByTestId("rightBtn");
			const slides = screen.getAllByTestId("carouselSlide");

			expect(slides[0]).toHaveAttribute("aria-hidden", "false");
			expect(slides[1]).toHaveAttribute("aria-hidden", "true");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");

			await user.click(rightBtn);

			expect(slides[0]).toHaveAttribute("aria-hidden", "true");
			expect(slides[1]).toHaveAttribute("aria-hidden", "false");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");

			await user.click(rightBtn);
			await user.click(rightBtn);
			await user.click(rightBtn);

			expect(slides[0]).toHaveAttribute("aria-hidden", "true");
			expect(slides[1]).toHaveAttribute("aria-hidden", "true");
			expect(slides[2]).toHaveAttribute("aria-hidden", "false");
		});

		it("Carousel previous slide functionality works correctly", async () => {
			const user = userEvent.setup();

			render(
				<MemoryRouter>
					<CarouselSection />
				</MemoryRouter>
			)
			
			const leftBtn = screen.getByTestId("leftBtn");
			const rightBtn = screen.getByTestId("rightBtn");
			const slides = screen.getAllByTestId("carouselSlide");

			expect(slides[0]).toHaveAttribute("aria-hidden", "false");
			expect(slides[1]).toHaveAttribute("aria-hidden", "true");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");

			await user.click(rightBtn);
			await user.click(rightBtn);
			await user.click(leftBtn);

			expect(slides[0]).toHaveAttribute("aria-hidden", "true");
			expect(slides[1]).toHaveAttribute("aria-hidden", "false");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");

			await user.click(leftBtn);
			await user.click(leftBtn);
			await user.click(leftBtn);

			expect(slides[0]).toHaveAttribute("aria-hidden", "false");
			expect(slides[1]).toHaveAttribute("aria-hidden", "true");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");
		});

		it("Carousel change slide functionality works correctly", async () => {
			const user = userEvent.setup();

			render(
				<MemoryRouter>
					<CarouselSection />
				</MemoryRouter>
			)
			
			const quickNacBtns = screen.getAllByTestId("quickNavBtn");
			const slides = screen.getAllByTestId("carouselSlide");

			expect(slides[0]).toHaveAttribute("aria-hidden", "false");
			expect(slides[1]).toHaveAttribute("aria-hidden", "true");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");

			await user.click(quickNacBtns[2]);

			expect(slides[0]).toHaveAttribute("aria-hidden", "true");
			expect(slides[1]).toHaveAttribute("aria-hidden", "true");
			expect(slides[2]).toHaveAttribute("aria-hidden", "false");

			await user.click(quickNacBtns[1]);

			expect(slides[0]).toHaveAttribute("aria-hidden", "true");
			expect(slides[1]).toHaveAttribute("aria-hidden", "false");
			expect(slides[2]).toHaveAttribute("aria-hidden", "true");
		});
	});
});

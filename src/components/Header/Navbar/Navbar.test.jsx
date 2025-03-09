import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar renders correctly", () => {
	it("Desktop navbar renders correctly", () => {
		const handleSticky = vi.fn();

		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={false}
				/>
			</MemoryRouter>
		)
		
		const nav = screen.getByRole("navigation");
		const homeList = screen.getByTestId("home");
		const homeLink = screen.getByRole("link", { name: "Home" });
	
		const starshipsList = screen.getByTestId("starships");
		const starshipsLink = screen.getByRole("link", { name: "Starships" });
		const dropdownCapital = screen.getByText("Capital");
		const dropdownTransport = screen.getByText("Transport");
		const dropdownStarfighter = screen.getByText("Starfighter");
	
		const contactList = screen.getByTestId("contact");
		const contactLink = screen.getByRole("link", { name: "Contact" });
	
		expect(nav).toBeInTheDocument();
		expect(homeList).toBeInTheDocument();
		expect(homeLink).toBeInTheDocument();
		expect(homeLink).toHaveAttribute("href", "/");
	
		expect(starshipsList).toBeInTheDocument();
		expect(starshipsLink).toBeInTheDocument();
		expect(starshipsLink).toHaveAttribute("href", "/starships");
		expect(dropdownCapital).toBeInTheDocument();
		expect(dropdownCapital).toHaveAttribute("href", "/starships/capital");
		expect(dropdownTransport).toBeInTheDocument();
		expect(dropdownTransport).toHaveAttribute("href", "/starships/transport");
		expect(dropdownStarfighter).toBeInTheDocument();
		expect(dropdownStarfighter).toHaveAttribute("href", "/starships/starfighter");
	
		expect(contactList).toBeInTheDocument();
		expect(contactLink).toBeInTheDocument();
		expect(contactLink).toHaveAttribute("href", "/contact");
	})

	it("Mobile navbar renders correctly", () => {
		const handleSticky = vi.fn();

		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={true}
				/>
			</MemoryRouter>
		)
		
		const openMenuBtn = screen.getByRole('button', { name: "open menu" });
		const openMenuIcon = screen.getByRole('img', { name: "open menu" });
		const menuHeading = screen.getByRole('heading', { name: "Shipyard" });
		const closeMenuBtn = screen.getByRole('button', { name: "close menu" });
		const closeMenuIcon = screen.getByRole('img', { name: "close menu" });

		const homeLink = screen.getByRole("link", { name: "Home" });
		const starshipsList = screen.getByTestId("starships");
		const dropdownTransport = screen.getByText("Transport");
		const contactLink = screen.getByRole("link", { name: "Contact" });

		expect(openMenuBtn).toBeInTheDocument();
		expect(openMenuIcon).toHaveAttribute("src", "/src/assets/icons/hamburger.svg");
		expect(menuHeading).toBeInTheDocument();
		expect(closeMenuBtn).toBeInTheDocument();
		expect(closeMenuIcon).toHaveAttribute("src", "/src/assets/icons/close.svg");

		expect(homeLink).toBeInTheDocument();
		expect(homeLink).toHaveAttribute("href", "/");
	
		expect(starshipsList).toBeInTheDocument();
		expect(dropdownTransport).toBeInTheDocument();
		expect(dropdownTransport).toHaveAttribute("href", "/starships/transport");
	
		expect(contactLink).toBeInTheDocument();
		expect(contactLink).toHaveAttribute("href", "/contact");
	});
});

describe("Navbar functionality executes correctly", () => {
	it("Desktop Starships dropdown is visible when hovered over", async () => {
		const handleSticky = vi.fn();
		const user = userEvent.setup();
	
		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={false}
				/>
			</MemoryRouter>
		)
	
		const starshipsEl = screen.getByTestId("starships");
		const dropdownList = screen.getByTestId("starshipsDropdown");
	
		await user.hover(starshipsEl);
	
		expect(dropdownList.className).toContain("visible");
	});
	
	it("Desktop Starships dropdown is not visible when unhovered", async () => {
		const handleSticky = vi.fn();
		const user = userEvent.setup();
	
		render(
			<MemoryRouter>
				<Navbar 
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={false}
				/>
			</MemoryRouter>
		)
	
		const starshipsEl = screen.getByTestId("starships");
		const dropdownList = screen.getByTestId("starshipsDropdown");
	
		await user.hover(starshipsEl);
		
		expect(dropdownList.className).toContain("visible");
	
		await user.unhover(starshipsEl);
	
		expect(dropdownList.className).not.toContain("visible");
	});
	// Mobile navbar hamburger control open/close
	it("Mobile hamburger menu opens", async () => {
		const handleSticky = vi.fn();
		const user = userEvent.setup();
	
		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={true}
				/>
			</MemoryRouter>
		)
	
		const sideMenu = screen.getByTestId("sideMenu");
		const openMenuBtn = screen.getByRole('button', { name: "open menu" });

		expect(sideMenu.className).not.toContain("open");
	
		await user.click(openMenuBtn);
		
		expect(sideMenu.className).toContain("open");
	});

	it("Mobile hamburger menu closes", async () => {
		const handleSticky = vi.fn();
		const user = userEvent.setup();
	
		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={true}
				/>
			</MemoryRouter>
		)
	
		const sideMenu = screen.getByTestId("sideMenu");
		const openMenuBtn = screen.getByRole('button', { name: "open menu" });
		const closeMenuBtn = screen.getByRole('button', { name: "close menu" });

		expect(sideMenu.className).not.toContain("open");
	
		await user.click(openMenuBtn);
		await user.click(closeMenuBtn);
		
		expect(sideMenu.className).not.toContain("open");
	});
	// Mobile navbar dropdown open/close
	it("Mobile starships dropdown opens", async () => {
		const handleSticky = vi.fn();
		const user = userEvent.setup();
	
		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={true}
				/>
			</MemoryRouter>
		)
	
		const openMenuBtn = screen.getByRole('button', { name: "open menu" });
		const dropdownList = screen.getByTestId("starshipsDropdown");
	
		await user.click(openMenuBtn);
		await user.click(dropdownList);
	
		expect(dropdownList.className).toContain("show");
	});

	it("Mobile starships dropdown closes", async () => {
		const handleSticky = vi.fn();
		const user = userEvent.setup();
	
		render(
			<MemoryRouter>
				<Navbar
					handleSticky={handleSticky}
					isSticky={false}
					isMobile={true}
				/>
			</MemoryRouter>
		)
	
		const openMenuBtn = screen.getByRole('button', { name: "open menu" });
		const dropdownList = screen.getByTestId("starshipsDropdown");
	
		await user.click(openMenuBtn);
		await user.click(dropdownList);
	
		expect(dropdownList.className).toContain("show");

		await user.click(dropdownList);

		expect(dropdownList.className).not.toContain("show");
	});
});

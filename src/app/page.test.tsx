import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Cool your car before you get in." }),
    ).toBeInTheDocument();
  });

  it("renders the CTA as disabled until the capture flow ships", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Register your interest" })).toBeDisabled();
  });

  it("links to the privacy and terms stub pages", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute(
      "href",
      "/privacy",
    );
    expect(screen.getByRole("link", { name: "Terms" })).toHaveAttribute("href", "/terms");
  });
});

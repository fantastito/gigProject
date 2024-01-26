import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import FavButton from "../src/components/favButton.jsx";

test("renders the like button", () => {
    render(<FavButton />);

    expect(screen.getByRole('button')).toHaveTextContent("Like");
});

test("renders and when clicks changes to liked state", async () => {
    render(<FavButton />);

    await userEvent.click(screen.getByRole('button'));
    
    expect(screen.getByText("❤️")).toBeInTheDocument();
});
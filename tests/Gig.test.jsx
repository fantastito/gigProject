import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig.jsx";

test("renders with the correct props", () => {
    render(<Gig 
        band='Queen'
        description='All your head-banging favourites'
        date='7pm - Saturday 24th February 2024'
        location='Newcastle'
        />);

    expect(screen.getByRole("heading")).toHaveTextContent("Queen");
    expect(screen.getByText("Newcastle")).toBeInTheDocument();
    expect(screen.getByTestId("3")).toHaveTextContent("Newcastle");
    });
    
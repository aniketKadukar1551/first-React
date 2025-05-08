import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact us page test Cases", () => {
    it("Should load contact us component", () => {
        render(<ContactUs></ContactUs>)
    
        const heading = screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument()
    })
    
    it("Contact us component must have a placeholder with name Abhjeet", () => {
        render(<ContactUs></ContactUs>)
    
        const placeholder = screen.getByPlaceholderText("Abhijeet")
    
        expect(placeholder).toBeInTheDocument()
    })
    
    it("Contact us component should a button to submit the form", () => {
        render(<ContactUs></ContactUs>)
    
        const button = screen.getByRole("button")
    
        expect(button).toBeInTheDocument()
    })
    
    it("Contactus component must 2 inout boxes", () => {
        render(<ContactUs/>)
    
        const inputBoxes = screen.getAllByRole("textbox")
    
        expect(inputBoxes.length).toBe(2)
    })
})

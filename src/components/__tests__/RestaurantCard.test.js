import { render, screen } from "@testing-library/react"
import Cards, { withPromotedLabel } from "../Cards"
import data from "../mocks/RestaurantCardData.json"
import "@testing-library/jest-dom"
import promotedData from "../mocks/PromotedRestaurantCardData.json"

it("Should render restaurant card component with prop data", () => {
    render(<Cards data={data}></Cards>)

    const name = screen.getByText("Pizza Hut")

    expect(name).toBeInTheDocument()
})

it("Should render restaurant card component with promoted label if avgRating is greater than 4.2", () => {
    const PromotedRestaurant = withPromotedLabel(Cards)

    render(<PromotedRestaurant data={promotedData}></PromotedRestaurant>)

    const averageRating = screen.getByText(4.5)

    expect(averageRating).toBeInTheDocument()
})

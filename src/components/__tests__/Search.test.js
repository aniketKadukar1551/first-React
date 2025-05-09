import { fireEvent, render, screen } from "@testing-library/react"
import Section from "../Section"
import data from "../mocks/RestaurantListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data)
        }
    })
})

it("Should search restaurant list for pizza text input", async () => {
    await act(() => render(
        <BrowserRouter>
            <Section></Section>
        </BrowserRouter>
    ))

    const cardsBeforeSearch = await screen.findAllByTestId("restaurantId")

    expect(cardsBeforeSearch.length).toBe(8)

    const searchButton = screen.getByRole("button", { name: "Search" })

    const searchInput = await screen.findByTestId("serachInput")

    fireEvent.change(searchInput, { target: { value: "pizza" }})

    fireEvent.click(searchButton)

    const cardsAfterSearch = await screen.findAllByTestId("restaurantId")

    expect(cardsAfterSearch.length).toBe(1)
})

it("Should filter top rated restaurant", async () => {
    await act(() => render(
        <BrowserRouter>
            <Section></Section>
        </BrowserRouter>
    ))

    const cardsBeforefilter = await screen.findAllByTestId("restaurantId")

    expect(cardsBeforefilter.length).toBe(8)

    const topRatedButton = screen.getByRole("button", { name: "Top Rated" })

    fireEvent.click(topRatedButton)

    const cardsAfterFilter = await screen.findAllByTestId("restaurantId")

    expect(cardsAfterFilter.length).toBe(4)
})

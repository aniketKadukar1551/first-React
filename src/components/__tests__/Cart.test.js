import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import CardMenu from "../CardMenu"
import data from "../mocks/RestaurantMenuData.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import CartItems from "../CartItems"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(data)
    })
})

it("Should Load restaurant menu  component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
                <CardMenu></CardMenu>
                <CartItems></CartItems>
            </Provider>
        </BrowserRouter>
    ))

    const accordionHeader = screen.getByText("Veg Pizza (13)")

    fireEvent.click(accordionHeader)

    const itemsList = await screen.findAllByTestId("foodItems")

    expect(itemsList.length).toBe(13)

    const headerCartTextBeforeClick = screen.getByText("Cart - (0 items)")

    expect(headerCartTextBeforeClick).toBeInTheDocument()

    const addToCartButtons = screen.getAllByRole("button", { name: "Add to Cart" })

    fireEvent.click(addToCartButtons[0])

    const headerCartTextFirstClick = screen.getByText("Cart - (1 items)")

    expect(headerCartTextFirstClick).toBeInTheDocument()

    fireEvent.click(addToCartButtons[1])

    const headerCartTextSecondClick = screen.getByText("Cart - (2 items)")

    expect(headerCartTextSecondClick).toBeInTheDocument()

    const cartItemsList = await screen.findAllByTestId("foodItems")

    expect(cartItemsList.length).toBe(15)

    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" })

    fireEvent.click(clearCartButton)

    const cartItemsListAfterClear = await screen.findAllByTestId("foodItems")

    expect(cartItemsListAfterClear.length).toBe(13)
})

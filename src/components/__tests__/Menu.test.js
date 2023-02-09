import { render, waitFor, fireEvent } from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import{MENU_DATA} from "../mocks/data";
import "@testing-library/jest-dom";
import RestaurantDetail from "../RestaurantDetail";
import Header from "../Header.js";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MENU_DATA);
        }
    })
});

test("Add Items to cart", async()=>{
    const restroMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
             <RestaurantDetail />
        </Provider>
        </StaticRouter>
    );
    
    await waitFor(()=> expect(restroMenu.getByTestId("menu")));

    const addBtn = restroMenu.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const cart = restroMenu.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart -2 Items");
})

import { render } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import {LOGO} from "../../constants";


test("Logo should load on rendering header",()=>{
    //Load Header
    // Check if Logo is loaded
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
    </Provider>
    </StaticRouter>);

    const logo = header.getByTestId("logo");
    expect(logo.src).toBe(LOGO);

});

test("Online status should be green on rendering header",()=>{
    //Load Header
    // Check if Logo is loaded
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
    </Provider>
    </StaticRouter>);

    const onlineStatus = header.getByTestId("online-statue");
    expect(onlineStatus.innerHTML).toBe("Status ✅");

});

test("Cart Items should be 0 on rendering header",()=>{
    //Load Header
    // Check if Logo is loaded
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
    </Provider>
    </StaticRouter>);

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart -0 Items");

});
import React from "react";

import Products from "./components/Products";

import data from "./data.json";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            Products: data.products,
            size: "",
            sort: "",
        };
    }
    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">Reacte Shooping Cart</a>
                </header>
                <main>
                    <div className="comtent">
                        <div className="main">
                            <Products products={this.state.Products}></Products>
                        </div>
                        <div className="sidebar">Cart Items</div>
                    </div>
                </main>
                <footer>All rigth is reserved</footer>
            </div>
        );
    }
}

export default App;

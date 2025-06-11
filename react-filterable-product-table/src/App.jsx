[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: true, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


function ProductRow(name, price) {
    return (
        <>
            <h3>ProductRow</h3>
        </>
    );
}

function ProductCategoryRow( { category }) {
    return (
        <>
            <h3>ProductCategoryRow</h3>
            {category}
        </>
    );
}

function ProductTable() {
    return (
        <div>
            <h2>Product Table</h2>
            {/* Product table will be rendered here */}
        </div>
    );
}

// function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
//     return (
//         <>
//             <h2>SearchBar</h2>
//         </>
//     );
    // return (
    //     <form>
    //         <input
    //             type="text"
    //             placeholder="Search..."
    //             value={filterText}
    //             onChange={(e) => onFilterTextChange(e.target.value)}
    //         />
    //         <p>
    //             <input
    //                 type="checkbox"
    //                 checked={inStockOnly}
    //                 onChange={(e) => onInStockOnlyChange(e.target.checked)}
    //             />
    //             {' '}
    //             Only show products in stock
    //         </p>
    //     </form>
    // );
// }

function SearchBar() {
    return(
        <>
            <h2>SearchBar</h2>
        </>
    );
}

function FilterableProductTable({ products }) {
    return (
        <div>
            <h2>Filterable Product Table</h2>
        </div>
    );
}

function App() {
    return (
        <>
            <h1>Filterable Product Table</h1>
            <div className="App">
                <FilterableProductTable/>
                <SearchBar />
                <ProductCategoryRow category="fruits"/>
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductCategoryRow category="vegetables"/>
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </div>
        </>
    );
}

export default App;
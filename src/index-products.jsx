// Rename this file to index.js and then run npm start and go check browser
// http://localhost:8888/

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';


const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleChange(e) {
        this.props.onSearch(e.target.value);
    };

    handleClick(e) {
        this.props.onShowOnlyStocked(e.target.checked);
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Search..."
                    name="search"
                    onChange={this.handleChange}
                    className={styles.searchField}/>
                <br/>
                <label className={styles.showOnlyStockedLabel}>
                    <input type="checkbox" name="stock"
                        onClick={this.handleClick}
                        className={styles.showOnlyStockedCheckBox}/>
                    Only show products in stock
                </label>
            </div>
        );
    };
};

function ProductCategory(props){
    return (
        <tr>
            <td colSpan="2" className={styles.category}>{props.name}</td>
        </tr>
    );
};

function Product(props){
    return (
        <tr>
            <td className={ props.product.stocked ? '': styles.outofstock }>
                {props.product.name}
            </td>
            <td>{props.product.price}</td>
        </tr>
    );
};

function ProductSection(props) {
    return(
        <tbody key={props.category.toLowerCase()}>
            <ProductCategory name={props.category}
                key={'_'+props.category.toLowerCase()}/>
            {
                props.products.reduce( (categorizedProducts, prod) => {
                    if(prod.category === props.category){
                        categorizedProducts.push(
                            <Product product={prod}
                                key={prod.category+'-'+prod.name}/>
                        );
                    }
                    return categorizedProducts;
                }, [])
            }
        </tbody>
    );
};


function ProductTable(props) {
    const sections = {};
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </tbody>
            {
                props.products.reduce(
                    (productSections, prod, index, array) => {
                        if(!sections[prod.category]){
                            productSections.push(
                                <ProductSection
                                    key={prod.category.toLowerCase()}
                                    category={prod.category}
                                    products={array} />
                            );
                            sections[prod.category] = true;
                        }
                        return productSections;
                }, [])
            }
        </table>
    );
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.showOnlyStocked = this.showOnlyStocked.bind(this);

        this.state = { filteredProducts: PRODUCTS.slice(0),
                searchString: '', onlyStocked: false};
    };

    search(value) {
        this.state.searchString = value;
        this.filter()
    };

    showOnlyStocked(bool) {
        this.state.onlyStocked = bool;
        this.filter();
    };

    filter() {
        const result = PRODUCTS.slice(0).reduce(
            (accumulatedProducts, product, index, array) => {
                if(
                    (product.name.indexOf(this.state.searchString) !== -1)
                    &&
                    (!this.state.onlyStocked ||
                        (this.state.onlyStocked && product.stocked) )
                ){
                    accumulatedProducts.push(product);
                }
            return accumulatedProducts;
        }, [])
        this.setState({filteredProducts : result});
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={this.search}
                    onShowOnlyStocked={this.showOnlyStocked}/>
                <ProductTable products={this.state.filteredProducts} />
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

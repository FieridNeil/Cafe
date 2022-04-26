import './App.css';
import React, { useState, useEffect } from 'react';
import { categories, items, addons } from './items';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ItemCard = ({ item }) => {
	return (
		<div className='itemcard'>
			<div className='item-image'>image</div>
			<div className='item-info'>
				<div>{item.name}</div>
				<div>{`$${item.price.toFixed(2)}`}</div>
				<div>{item.description}</div>
			</div>
		</div>
	);
};

const ItemDetailModal = ({ item, cart, setCart }) => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);

	const addToCartHandler = (e) => {
		e.preventDefault();
		let temp = [...cart];
		let idx = temp.findIndex((x) => x.name === item.name);
		if (idx !== -1) {
			temp[idx].qty++;
		} else {
			item.qty = 1;
			temp.push(item);
		}
		setCart(temp);
		setShow(false);
	};

	return (
		<>
			<div variant='primary' onClick={handleShow}>
				<ItemCard item={item} />
			</div>

			<Modal show={show} onHide={() => setShow(false)} centered>
				<Modal.Header closeButton>
					<Modal.Title>{item.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ display: 'flex' }}>
						<div style={{ flexBasis: '30%' }}>Image</div>
						<div style={{ flexBasis: '70%', display: 'flex', flexDirection: 'column' }}>
							<div>
								<b>Select Toping:</b>
								<Form>
									{Object.values(addons).map((elm, k) => (
										<div key={k}>
											<div>
												<Form.Check
													type='checkbox'
													label={elm.name + ' - $' + elm.price.toFixed(2)}
													id={elm.name}
													checked={item.addon.includes(elm.name) ? true : false}
												/>
											</div>
										</div>
									))}
								</Form>
							</div>
							<div>
								<b>Special Request:</b>
								<br />
								<textarea style={{ width: '100%' }}></textarea>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={() => setShow(false)}>
						Cancel
					</Button>
					<Button variant='primary' onClick={(e) => addToCartHandler(e)}>
						Add to Cart
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

function App() {
	const [cart, setCart] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(categories.milk_tea);
	const [itemsToDisplay, setItemsToDisplay] = useState();

	useEffect(() => {
		let temp = [];
		Object.values(items).map((val) => {
			if (val.category === selectedCategory) {
				temp.push(val);
			}
		});
		setItemsToDisplay(temp);
	}, [selectedCategory]);

	const selectCategoryHandler = (e) => {
		e.preventDefault();
		setSelectedCategory(e.target.innerText);
	};

	const AddQuantityHandler = (e, item) => {
		e.preventDefault();
		const temp = [...cart];
		const idx = temp.findIndex((x) => x.name === item.name);
		temp[idx].qty++;
		setCart(temp);
	};

	const SubtractQuantityHandler = (e, item) => {
		e.preventDefault();
		const temp = [...cart];
		const idx = temp.findIndex((x) => x.name === item.name);
		if (temp[idx].qty === 1) {
			temp.splice(idx, 1);
		} else {
			temp[idx].qty--;
		}

		setCart(temp);
	};

	return (
		<div>
			<center>
				<h1>Imaginary Coffee Shop</h1>
			</center>
			<div className='App'>
				<div className='left'>
					<div className='category'>
						{Object.entries(categories).map(([key, val]) => (
							<div key={key} onClick={selectCategoryHandler}>
								{val}
							</div>
						))}
					</div>

					<div className='item'>
						{itemsToDisplay?.map((elm, k) => (
							<ItemDetailModal key={k} item={elm} cart={cart} setCart={setCart} />
						))}
					</div>
				</div>

				<div className='right'>
					<center>
						<h3>Cart</h3>
					</center>
					{cart.map((elm, k) => (
						<div key={k} className='cart-item'>
							<div>
								<div>{elm.name}</div>
								<ul>
									{elm.addon.map((el, key) => (
										<li key={k}>{el}</li>
									))}
								</ul>
							</div>
							<div>x{elm.qty}</div>
							<div onClick={(e, item) => SubtractQuantityHandler(e, elm)}>-</div>
							<div onClick={(e, item) => AddQuantityHandler(e, elm)}>+</div>
						</div>
					))}
					<center>
						<Button variant='warning'>Check out</Button>
					</center>
				</div>
			</div>
		</div>
	);
}

export default App;

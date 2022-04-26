import './App.css';
import { items } from './items';

const ItemCard = ({ item }) => {
	return <div className='itemcard'>{item.name}</div>;
};

function App() {
	return (
		<div className='App'>
			<div className='left'>
				{Object.entries(items).map(([key, val]) => (
					<ItemCard key={key} item={val} />
				))}
			</div>
			<div className='right'>
				<h3>Cart</h3>
				<ul>
					<li>
						Milk tea <span>x1</span>
						<span>$5.00</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;

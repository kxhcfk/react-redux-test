import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCustomerAction, removeCustomerAction } from "./store/reducers/customerReducer";
import { fetchCustomers } from "./asyncAction/customers";

const App = () => {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash.cash);
	const customers = useSelector(state => state.customers.customers);
	
	function addCash(cash) {
		dispatch({ type: "ADD_CASH", payload: cash });
	}
	
	function getCash(cash) {
		dispatch({ type: "GET_CASH", payload: cash });
	}
	
	function addCustomer(name) {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomerAction(customer));
	}
	
	function removeCustomer(customer) {
		dispatch(removeCustomerAction(customer.id));
	}
	
	return (
		<div className={"App"}>
			<h1>{cash}</h1>
			<div className="flex">
				<button onClick={() => addCash(Number(prompt()))}>+</button>
				<button onClick={() => getCash(Number(prompt()))}>-</button>
				<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button onClick={() => dispatch(fetchCustomers())}>Получить клиентов</button>
			</div>
			
			{!customers.length
				? <h2>ПУСТО</h2>
				: (
					<div>
						{customers.map(customer => (
							<div
								key={customer.id}
								className="customer"
								onClick={() => removeCustomer(customer)}
							>{customer.name}</div>
						))}
					</div>
				)
			}
		</div>
	);
};

export default App;
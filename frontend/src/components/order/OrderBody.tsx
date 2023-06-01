import React, { useContext, useState, useEffect } from 'react';
import { fetchBasket } from "../../api/fetchBasket";
import { fetchOrders } from '../../api/fetchOrders';
import BasketContext from "../../context/BasketContext";
import { order } from '../../model/orderType';
import Orders from './Orders';

function OrderBody() {

    const [orders, setOrders] = useState<order[]>([]);
    const basket = useContext(BasketContext);

    useEffect(() => {
        fetchBasket(basket.setCurrentBasket);
        fetchOrders(setOrders);
    }, [basket.setCurrentBasket]);

    useEffect(() => {
        fetchBasket(basket.setCurrentBasket);
    }, [basket.setCurrentBasket]);

    return (
        <div className="orders-body">
            <div className="orders">
                <div className="orders-title">
                    <div>ID</div>
                    <div>Date Time Of Order</div>
                    <div>Total Cost</div>
                    <div>Completed</div>
                    <div>Ordered Items</div>
                </div>
                {/*TODO - Task 10: Implement the Orders component here*/}
                <Orders orders={orders} setOrders={setOrders}/>
            </div>
        </div>

    );
}

export default OrderBody;
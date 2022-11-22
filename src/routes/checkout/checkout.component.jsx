import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import PaymentForm from '../../components/payment-form/payment-form.component';
    
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Produs</span>
                </div>
                <div className='header-block'>
                <span>Descriere</span>
                </div>
                <div className='header-block'>
                <span>Cantitate</span>
                </div>
                <div className='header-block'>
                <span>Preț</span>
                </div>
                <div className='header-block'>
                <span>Elimină</span>
                </div>
            </div>
            
                {cartItems.map((cartItem) => (
                   <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))}
                <PaymentForm />
             <span className='total'>Total: {cartTotal} lei</span>
        </div>
    );
};

export default Checkout;
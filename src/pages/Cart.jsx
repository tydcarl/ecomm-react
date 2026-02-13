import React from "react";

const Cart = ({ cart, changeQuantity, removeItem}) => {
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = item.salePrice || item.originalPrice;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__body">
                {cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img
                        src={book.url}
                        className="cart__book--img"
                        alt={book.title}
                      />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">
                          ${(book.salePrice || book.originalPrice).toFixed(2)}
                        </span>
                        <button className="cart__book--remove" onClick={() =>removeItem(book)}>Remove</button>
                      </div>
                    </div>

                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        className="cart__input"
                        value={book.quantity}
                        onChange={(event) =>
                          changeQuantity(book, Number(event.target.value))
                        }
                      />
                    </div>

                    <div className="cart__total">
                      $
                      {(
                        (book.salePrice || book.originalPrice) * book.quantity
                      ).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(calculateTotal() * 0.0825).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${(calculateTotal() * 1.0825).toFixed(2)}</span>
              </div>

              <button
                className="btn btn__checkout"
                onClick={() => alert("Haven't built checkout yet 😉")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;

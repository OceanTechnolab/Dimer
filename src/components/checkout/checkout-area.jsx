import React, { useState } from "react";

const CheckoutArea = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isShipOpen, setIsShipOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  return (
    <>
      {/* <!-- coupon-area start --> */}
      <section
        className="coupon-area pt-130 pb-30 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="coupon-accordion">
                {/* <!-- ACCORDION START --> */}
                <h3>
                  Returning customer ?
                  <span
                    id="showlogin"
                    onClick={() => setIsLoginOpen(!isLoginOpen)}
                  >
                    {" "} Click here to login
                  </span>
                </h3>
                {isLoginOpen && (
                  <div
                    id="checkout-login"
                    className={`coupon-content ${isLoginOpen ? "d-block" : ""}`}
                  >
                    <div className="coupon-info">
                      <p className="coupon-text">
                        Quisque gravida turpis sit amet nulla posuere lacinia.
                        Cras sed est sit amet ipsum luctus.
                      </p>
                      <form action="#">
                        <p className="form-row-first">
                          <label>
                            Username or email
                            <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </p>
                        <p className="form-row-last">
                          <label>
                            Password <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </p>
                        <p className="form-row">
                          <button className="tp-btn-second" type="submit">
                            Login
                          </button>
                          <label>
                            <input type="checkbox" />
                            <span> Remember me</span>
                          </label>
                        </p>
                        <p className="lost-password">
                          <a href="#">Lost your password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                )}

                {/* <!-- ACCORDION END --> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="coupon-accordion">
                {/* <!-- ACCORDION START --> */}
                <h3>
                  Have a coupon ?
                  <span
                    id="showcoupon"
                    onClick={() => setIsCodeOpen(!isCodeOpen)}
                  >
                   {" "} Click here to enter your code
                  </span>
                </h3>
                {isCodeOpen && (
                  <div id="checkout_coupon" className={`coupon-checkout-content ${isCodeOpen ? "d-block" : ""}`}>
                    <div className="coupon-info">
                      <form action="#">
                        <p className="checkout-coupon">
                          <input type="text" placeholder="Coupon Code" />
                          <button className="tp-btn-second" type="submit">
                            Apply Coupon
                          </button>
                        </p>
                      </form>
                    </div>
                  </div>
                )}
                {/* <!-- ACCORDION END --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- coupon-area end --> */}

      {/* <!-- checkout-area start --> */}
      <section
        className="checkout-area pb-100 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <select>
                          <option value="volvo">United States</option>
                          <option value="saab">Algeria</option>
                          <option value="mercedes">Canada</option>
                          <option value="audi">Germany</option>
                          <option value="audi2">England</option>
                          <option value="audi3">Qatar</option>
                          <option value="audi5">Dominican Republic</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Street address" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Town / City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input type="email" placeholder="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Postcode / Zip" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list create-acc">
                        <input
                          onClick={() => setIsOpen(!isOpen)}
                          id="cbox"
                          type="checkbox"
                        />
                        <label htmlFor="cbox">Create an account?</label>
                      </div>

                      {isOpen && (
                        <div
                          id="cbox_info"
                          className={`checkout-form-list create-account ${
                            isOpen ? "d-block" : ""
                          }`}
                        >
                          <p>
                            Create an account by entering the information below.
                            If you are a returning customer please login at the
                            top of the page.
                          </p>
                          <label>
                            Account password <span className="required">*</span>
                          </label>
                          <input type="password" placeholder="password" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="different-address">
                    <div className="ship-different-title">
                      <h3>
                        <label htmlFor="ship-box">
                          Ship to a different address?
                        </label>
                        <input
                          onClick={() => setIsShipOpen(!isShipOpen)}
                          id="ship-box"
                          type="checkbox"
                        />
                      </h3>
                    </div>
                    {isShipOpen && (
                      <div id={`ship-box-info ${isShipOpen ? "d-block" : ""}`}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="country-select">
                              <label>
                                Country <span className="required">*</span>
                              </label>
                              <select>
                                <option value="volvo">bangladesh</option>
                                <option value="saab">Algeria</option>
                                <option value="mercedes">Afghanistan</option>
                                <option value="audi">Ghana</option>
                                <option value="audi2">Albania</option>
                                <option value="audi3">Bahrain</option>
                                <option value="audi4">Colombia</option>
                                <option value="audi5">
                                  Dominican Republic
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <label>
                                First Name <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <label>
                                Last Name <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <label>Company Name</label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <label>
                                Address <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Street address" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Apartment, suite, unit etc. (optional)"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkout-form-list">
                              <label>
                                Town / City <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Town / City" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <label>
                                State / County
                                <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <label>
                                Postcode / Zip
                                <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Postcode / Zip" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <label>
                                Email Address
                                <span className="required">*</span>
                              </label>
                              <input type="email" placeholder="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="checkout-form-list">
                              <label>
                                Phone <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Postcode / Zip" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart_item">
                          <td className="product-name">
                            Vestibulum suscipit
                            <strong className="product-quantity"> × 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">$165.00</span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="product-name">
                            Vestibulum dictum magna
                            <strong className="product-quantity"> × 1</strong>
                          </td>
                          <td className="product-total">
                            <span className="amount">$50.00</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td>
                            <span className="amount">$215.00</span>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>
                            <ul>
                              <li>
                                <input type="radio" name="shipping" />
                                <label>
                                  Flat Rate:
                                  <span className="amount">$7.00</span>
                                </label>
                              </li>
                              <li>
                                <input type="radio" name="shipping" />
                                <label>Free Shipping:</label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">$215.00</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="accordion" id="checkoutAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bankOne"
                            aria-expanded="true"
                            aria-controls="bankOne"
                          >
                            Direct Bank Transfer
                          </button>
                        </h2>
                        <div
                          id="bankOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="checkoutOne"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#payment"
                            aria-expanded="false"
                            aria-controls="payment"
                          >
                            Cheque Payment
                          </button>
                        </h2>
                        <div
                          id="payment"
                          className="accordion-collapse collapse"
                          aria-labelledby="paymentTwo"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            Please send your cheque to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paypalThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#paypal"
                            aria-expanded="false"
                            aria-controls="paypal"
                          >
                            PayPal
                          </button>
                        </h2>
                        <div
                          id="paypal"
                          className="accordion-collapse collapse"
                          aria-labelledby="paypalThree"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment mt-20">
                      <button type="submit" className="tp-btn-second w-100">
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- checkout-area end --> */}
    </>
  );
};

export default CheckoutArea;

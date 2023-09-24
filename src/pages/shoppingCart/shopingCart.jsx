import { Field, FormikProvider, useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxios from "../../hooks/axios";
import image from "../../assets/images/product-01.jpg";
import * as Yup from "Yup";

import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems); //
    updateTotalPrice(storedCartItems);
  }, []);

  const updateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    setTotalPrice(totalPrice); //
  };

  const handleQuantityChange = (index, increment) => {
    const updatedCartItems = [...cartItems];
    if (increment) {
      updatedCartItems[index].quantity += 1;
    } else if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    }
    setCartItems(updatedCartItems); //
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateTotalPrice(updatedCartItems); //
  };

  const handleUpdateCart = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateTotalPrice(cartItems);
    toast.success(`Cart updated`);
  };

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    toast.success("Cart clear successfully");
    navigate("/store");
  };

  const schema = Yup.object({
    country: Yup.string(),
    state: Yup.string().min(3).max(15).required("Required"),
    city: Yup.string().min(3).max(200).required("Required"),
    postal_code: Yup.number()
      .integer()
      .positive()
      .max(99999)
      .required("Required"),
    street: Yup.string().min(3).max(200).required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      country: "",
      state: "",
      city: "",
      postal_code: "",
      street: "",
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {

        const token = localStorage.getItem("token")
        if (!token)
        {
            navigate("/login"),
            toast.success("Login Please");
        }
        else{
    
        const products=cartItems.map((ele)=>{
            return {
                product_id:ele.id,
                Order_Quantity:ele.quantity,
                total_price:ele.price * ele.quantity,
            }
        })

        const createOrder={
            products:products,
            shipping_address:values,
            totalPrice:totalPrice
        }
        console.log(createOrder);
      axiosInstance
        .post("/order", createOrder)
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          resetForm();
          toast.success("Product Created successfully");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          toast.error("Error creating product");
        })
        .finally(() => {
          setSubmitting(false); // Set form to not submitting
        });
        
    localStorage.removeItem("cartItems");
    toast.success("Happy Shopping");
    navigate("/store");
        
    }
    },

  });

  return (
    <div>
      <FormikProvider value={formik}>
        <form className="bg0 p-t-75 p-b-85 poppins">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                <div className="m-l-25 m-r--38 m-lr-0-xl">
                  <div className="wrap-table-shopping-cart">
                    <table className="table-shopping-cart">
                      <tr className="table_head">
                        <th className="column-1">Product</th>
                        <th className="column-2"></th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                      </tr>

                      {cartItems.map((cartItem, index) => {
                        return (
                          <>
                            <tr className="table_row poppins">
                              <td className="column-1">
                                <div className="how-itemcart1">
                                  <img
                                    src={
                                      cartItem.image
                                        ? `http://localhost:3303/images/${cartItem.image}`
                                        : image
                                    }
                                    alt="IMG"
                                  />
                                </div>
                              </td>
                              <td className="column-2 poppins">
                                {cartItem.name}
                              </td>
                              <td className="column-3 poppins">
                                $ {cartItem.price}
                              </td>
                              <td className="column-4 poppins">
                                <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                  <div
                                    onClick={() =>
                                      handleQuantityChange(index, false)
                                    }
                                    className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                                  >
                                    <i className="fs-16 zmdi zmdi-minus"></i>
                                  </div>

                                  <input
                                    className="cl3 txt-center num-product poppins"
                                    type="number"
                                    name="num-product1"
                                    value={cartItem.quantity}
                                  />

                                  <div
                                    onClick={() =>
                                      handleQuantityChange(index, true)
                                    }
                                    className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                                  >
                                    <i className="fs-16 zmdi zmdi-plus"></i>
                                  </div>
                                </div>
                              </td>
                              <td className="column-5 poppins">
                                $ {cartItem.quantity * cartItem.price}
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </table>
                  </div>

                  <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                    <div className="flex-w flex-m m-r-20 m-tb-5">
                      {/* <input className="cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Coupon Code" /> */}

                      <div
                        onClick={handleClearCart}
                        className="flex-c-m cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5"
                      >
                        Clear Cart
                      </div>
                    </div>

                    <div
                      onClick={handleUpdateCart}
                      className="flex-c-m cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                    >
                      Update Cart
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                  <div className="flex-w flex-t p-t-27 p-b-33">
                    <div className="size-208">
                      <span className="cl2">Total:</span>
                    </div>

                    <div className="size-209">
                      <span className="cl2">$ {totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex-w flex-t bor12 p-b-13"></div>

                  <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                    <div className="size-208 w-full-ssm">
                      <span className="cl2">Shipping:</span>
                    </div>

                    <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                      <p className=" cl6 p-t-2">
                        There are no shipping methods available. Please double
                        check your address, or contact us if you need any help.
                      </p>

                      <div className="p-t-15">
                        <span className=" cl8">Calculate Shipping</span>

                        <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                          <Field
                            as="select"
                            name="country"
                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                          >
                            <option value="">Select Category</option>

                            <option value="pakistan" >Pakistan</option>
                            <option value="chine">China</option>
                            <option value="USA">USA</option>
                          </Field>
                          {formik.touched.country &&
                            formik.errors.country && (
                              <h3>{formik.errors.country}</h3>
                            )}
                        </div>

                        <div className="bor8 bg0 m-b-12">
                          <Field
                            className="cl8 plh3 size-111 p-lr-15"
                            name="state"
                            placeholder="State"
                          />
                          {formik.touched.state && formik.errors.state && (
                            <h3>{formik.errors.state}</h3>
                          )}
                        </div>

                        <div className="bor8 bg0 m-b-22">
                          <Field
                            className="cl8 plh3 size-111 p-lr-15"
                            name="city"
                            placeholder="City"
                          />
                          {formik.touched.city && formik.errors.city && (
                            <h3>{formik.errors.city}</h3>
                          )}
                        </div>

                        <div className="bor8 bg0 m-b-22">
                          <Field
                            className="cl8 plh3 size-111 p-lr-15"
                            name="postal_code"
                            placeholder="Postal code"
                          />
                          {formik.touched.postal_code &&
                            formik.errors.postal_code && (
                              <h3>{formik.errors.postal_code}</h3>
                            )}
                        </div>

                        <div className="bor8 bg0 m-b-22">
                          <Field
                            className="cl8 plh3 size-111 p-lr-15"
                            name="street"
                            placeholder="Street"
                          />
                          {formik.touched.street && formik.errors.street && (
                            <h3>{formik.errors.street}</h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-c-m cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                    <button type="button" onClick={formik.handleSubmit}>
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default ShoppingCart;

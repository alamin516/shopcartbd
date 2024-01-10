import { useState } from "react";
import ContactInformation from "../../Components/Checkout/ContactInformation";
import DeliveryMethod from "../../Components/Checkout/DeliveryMethod";
import OrderSummary from "../../Components/Checkout/OrderSummary";
import Payment from "../../Components/Checkout/Payment";
import ShippingInformation from "../../Components/Checkout/ShippingInformation";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({});
  const cartItems  = useSelector((state)=> state.cart.items);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
  };

  if (cartItems?.length === 0) {
    navigate('/cart'); // Redirect to '/cart' if cart is empty
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <h2 className="text-2xl mb-6 font-semibold text-center text-white py-3 bg-gray-600">Checkout</h2>
      <div className="lg:w-9/12 mx-auto px-2 lg:px-0">
        <Breadcrumb/>
        <form className="py-20" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <ContactInformation formData={formData} setFormData={setFormData} />
              <ShippingInformation formData={formData} setFormData={setFormData} />
            </div>
            <div className="border-gray-200 rounded-lg">
              <OrderSummary formData={formData} />
              <DeliveryMethod formData={formData} setFormData={setFormData} />
              <Payment formData={formData} setFormData={setFormData} />
              <div className="mt-6">
                <button className="w-full py-2 text-lg font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Checkout;
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMode, setPaymentMode] = useState("COD");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="mb-4">Enter your details before proceeding to payment.</p>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Phone Number"
          required
        />
        
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your Address"
          required
        ></textarea>

        <label className="block font-semibold mb-2">Payment Mode</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="Card">Card Payment</option>
        </select>

        {paymentMode === "Card" && (
          <div className="mb-4">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
              className="w-full p-2 border rounded mb-2"
              placeholder="Card Number"
              maxLength={16}
              required
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value.replace(/[^0-9/]/g, ""))}
                className="w-1/2 p-2 border rounded"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                className="w-1/2 p-2 border rounded"
                placeholder="CVV"
                maxLength={3}
                required
              />
            </div>
          </div>
        )}

        <Button
          className="w-full bg-[#28b4a4] mt-4"
          onClick={handleCheckout}
          disabled={isProcessing || !phone || !address || (paymentMode === "Card" && (!cardNumber || !expiryDate || !cvv))}
        >
          {isProcessing ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useOrder } from "./OrderContext";

const steps = [
    { id: 1, label: "Cart", icon: "🛒" },
    { id: 2, label: "Details", icon: "📝" },
    { id: 3, label: "Confirm", icon: "✅" },
];

export default function OrderModal() {
    const {
        items,
        isModalOpen,
        closeModal,
        removeItem,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems,
    } = useOrder();

    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");
    const [deliveryType, setDeliveryType] = useState<"Delivery" | "Pickup">("Delivery");
    const [contactPreference, setContactPreference] = useState<"phone" | "sms" | "email">("phone");
    const [orderTiming, setOrderTiming] = useState<"asap" | "schedule">("asap");
    const [leaveAtDoor, setLeaveAtDoor] = useState(false);
    const [addCutlery, setAddCutlery] = useState(true);
    const [subscribeToDeals, setSubscribeToDeals] = useState(false);
    const [isPlaced, setIsPlaced] = useState(false);
    const [orderId, setOrderId] = useState("");

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    // Reset step on open
    useEffect(() => {
        if (isModalOpen) {
            setCurrentStep(items.length > 0 ? 1 : 1);
            setIsPlaced(false);
        }
    }, [isModalOpen, items.length]);

    const handlePlaceOrder = () => {
        const id = `CP-${Math.floor(1000 + Math.random() * 9000)}`;
        setOrderId(id);
        setIsPlaced(true);
        setCurrentStep(3);
        toast.success("Order placed!", { description: `Order ${id} confirmed. We'll get started on it right away.` });
    };

    const handleClose = () => {
        if (isPlaced) {
            clearCart();
            setIsPlaced(false);
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setSpecialInstructions("");
            setContactPreference("phone");
            setOrderTiming("asap");
            setLeaveAtDoor(false);
            setAddCutlery(true);
            setSubscribeToDeals(false);
            setOrderId("");
            setCurrentStep(1);
        }
        closeModal();
    };

    const canGoToDetails = items.length > 0;
    const canPlaceOrder = name.trim() && phone.trim() && (deliveryType === "Pickup" || address.trim());

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-modal-backdrop"
            onClick={handleClose}
        >
            <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-900/20 bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white px-6 pt-4 pb-0 rounded-t-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-neutral-900">
                            {isPlaced ? "Order Confirmed! 🎉" : steps[currentStep - 1].label}
                        </h2>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700"
                            aria-label="Close"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* -------- Progress Bar -------- */}
                    <div className="flex items-center justify-between px-2 pb-4">
                        {steps.map((step, index) => {
                            const isActive = currentStep === step.id;
                            const isCompleted = currentStep > step.id || isPlaced;
                            return (
                                <div key={step.id} className="flex flex-1 items-center">
                                    {/* Step circle + label */}
                                    <div className="flex flex-col items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (step.id < currentStep && !isPlaced) setCurrentStep(step.id);
                                            }}
                                            disabled={isPlaced || step.id > currentStep}
                                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${isCompleted
                                                    ? "bg-green-500 text-white shadow-md shadow-green-500/30"
                                                    : isActive
                                                        ? "bg-[#ea580c] text-white shadow-lg shadow-orange-500/30 ring-4 ring-orange-200"
                                                        : "bg-neutral-100 text-neutral-400"
                                                } ${step.id < currentStep && !isPlaced ? "cursor-pointer" : ""}`}
                                        >
                                            {isCompleted ? (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <span>{step.icon}</span>
                                            )}
                                        </button>
                                        <span
                                            className={`text-[11px] font-semibold tracking-wide ${isActive ? "text-[#ea580c]" : isCompleted ? "text-green-600" : "text-neutral-400"
                                                }`}
                                        >
                                            {step.label}
                                        </span>
                                    </div>
                                    {/* Connector line */}
                                    {index < steps.length - 1 && (
                                        <div className="relative mx-2 h-1 flex-1 rounded-full bg-neutral-100 overflow-hidden">
                                            <div
                                                className="absolute inset-y-0 left-0 rounded-full"
                                                style={{
                                                    width: isCompleted ? "100%" : isActive ? "50%" : "0%",
                                                    background: isCompleted
                                                        ? "linear-gradient(90deg, #22c55e, #16a34a)"
                                                        : "linear-gradient(90deg, #ea580c, #f97316)",
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="px-6 py-5">
                    {/* ===== STEP 1: Cart ===== */}
                    {currentStep === 1 && !isPlaced && (
                        <>
                            {items.length === 0 ? (
                                <div className="py-12 text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-neutral-400">
                                            <circle cx="9" cy="21" r="1" />
                                            <circle cx="20" cy="21" r="1" />
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                        </svg>
                                    </div>
                                    <p className="text-neutral-500 font-medium">Your cart is empty</p>
                                    <p className="text-sm text-neutral-400 mt-1">Add items from the menu to get started</p>
                                </div>
                            ) : (
                                <>
                                    {/* Items count */}
                                    <p className="mb-3 text-sm text-neutral-500">
                                        {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
                                    </p>

                                    {/* Order Summary Table */}
                                    <div className="overflow-hidden rounded-xl border border-neutral-200 mb-6">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-neutral-200 bg-neutral-50">
                                                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Item</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-neutral-700">Qty</th>
                                                    <th className="px-4 py-3 text-right font-semibold text-neutral-700">Price</th>
                                                    <th className="px-4 py-3 text-right font-semibold text-neutral-700">Subtotal</th>
                                                    <th className="px-2 py-3 w-10"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item) => (
                                                    <tr key={item.id} className="border-b border-neutral-100 last:border-0 group">
                                                        <td className="px-4 py-3">
                                                            <span className="font-medium text-neutral-900">{item.name}</span>
                                                            {/* Mini progress: share of total */}
                                                            <div className="mt-1.5 h-1.5 w-full max-w-[120px] rounded-full bg-neutral-100 overflow-hidden">
                                                                <div
                                                                    className="h-full rounded-full bg-gradient-to-r from-orange-400 to-[#ea580c]"
                                                                    style={{
                                                                        width: `${totalPrice > 0 ? ((item.price * item.quantity) / totalPrice) * 100 : 0}%`,
                                                                    }}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center justify-center gap-1">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-300"
                                                                    aria-label="Decrease quantity"
                                                                >
                                                                    −
                                                                </button>
                                                                <span className="w-6 text-center font-semibold text-neutral-900">{item.quantity}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-300"
                                                                    aria-label="Increase quantity"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-right text-neutral-600">${item.price.toFixed(2)}</td>
                                                        <td className="px-4 py-3 text-right font-semibold text-neutral-900">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </td>
                                                        <td className="px-2 py-3">
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                removeItem(item.id);
                                                                toast("Removed from cart", { description: item.name });
                                                            }}
                                                                className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 hover:bg-red-50 hover:text-red-500"
                                                                aria-label={`Remove ${item.name}`}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr className="bg-neutral-50">
                                                    <td colSpan={3} className="px-4 py-3 text-right font-bold text-neutral-900">
                                                        Total
                                                    </td>
                                                    <td className="px-4 py-3 text-right text-lg font-bold text-[#ea580c]">
                                                        ${totalPrice.toFixed(2)}
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    {/* Next Step Button */}
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        disabled={!canGoToDetails}
                                        className="w-full rounded-full bg-[#ea580c] py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#c2410c] hover:shadow-xl hover:shadow-orange-500/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                                    >
                                        Continue to Details →
                                    </button>
                                </>
                            )}
                        </>
                    )}

                    {/* ===== STEP 2: Details ===== */}
                    {currentStep === 2 && !isPlaced && (
                        <>
                            {/* Order summary mini bar */}
                            <div className="mb-5 flex items-center justify-between rounded-xl bg-neutral-50 border border-neutral-200 px-4 py-3">
                                <span className="text-sm text-neutral-600">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
                                <span className="text-base font-bold text-[#ea580c]">${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-neutral-900">Your Details</h3>

                                {/* Delivery / Pickup – radio group */}
                                <div>
                                    <p className="mb-2 text-sm font-medium text-neutral-700">Delivery or pickup</p>
                                    <div className="flex gap-2">
                                        {(["Delivery", "Pickup"] as const).map((type) => (
                                            <label
                                                key={type}
                                                className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-semibold ${deliveryType === type
                                                        ? "bg-neutral-900 text-white"
                                                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="deliveryType"
                                                    value={type}
                                                    checked={deliveryType === type}
                                                    onChange={() => setDeliveryType(type)}
                                                    className="sr-only"
                                                />
                                                {type === "Delivery" ? "🚚 " : "🏪 "}
                                                {type}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Text inputs */}
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="order-name" className="mb-1 block text-sm font-medium text-neutral-700">Name</label>
                                        <input
                                            id="order-name"
                                            type="text"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="order-phone" className="mb-1 block text-sm font-medium text-neutral-700">Phone</label>
                                        <input
                                            id="order-phone"
                                            type="tel"
                                            placeholder="Phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="order-email" className="mb-1 block text-sm font-medium text-neutral-700">Email</label>
                                    <input
                                        id="order-email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                    />
                                </div>

                                {deliveryType === "Delivery" && (
                                    <div>
                                        <label htmlFor="order-address" className="mb-1 block text-sm font-medium text-neutral-700">Delivery address</label>
                                        <input
                                            id="order-address"
                                            type="text"
                                            placeholder="Street, city, ZIP"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                        />
                                    </div>
                                )}

                                {/* Radio: Preferred contact */}
                                <div>
                                    <p className="mb-2 text-sm font-medium text-neutral-700">Preferred contact</p>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            { value: "phone" as const, label: "Phone call", icon: "📞" },
                                            { value: "sms" as const, label: "Text (SMS)", icon: "💬" },
                                            { value: "email" as const, label: "Email", icon: "✉️" },
                                        ].map(({ value, label, icon }) => (
                                            <label
                                                key={value}
                                                className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-medium ${contactPreference === value
                                                        ? "border-[#ea580c] bg-orange-50 text-[#ea580c]"
                                                        : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="contactPreference"
                                                    value={value}
                                                    checked={contactPreference === value}
                                                    onChange={() => setContactPreference(value)}
                                                    className="sr-only"
                                                />
                                                <span>{icon}</span>
                                                {label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Radio: Order timing (visible radio circles) */}
                                <div>
                                    <p className="mb-2 text-sm font-medium text-neutral-700">When do you want your order?</p>
                                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                                        {[
                                            { value: "asap" as const, label: "As soon as possible" },
                                            { value: "schedule" as const, label: "Schedule for later" },
                                        ].map(({ value, label }) => (
                                            <label
                                                key={value}
                                                className="flex cursor-pointer items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
                                            >
                                                <input
                                                    type="radio"
                                                    name="orderTiming"
                                                    value={value}
                                                    checked={orderTiming === value}
                                                    onChange={() => setOrderTiming(value)}
                                                    className="h-4 w-4 border-neutral-300 text-[#ea580c] focus:ring-[#ea580c] focus:ring-offset-0"
                                                />
                                                {label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-3 rounded-xl border border-neutral-200 bg-neutral-50/50 p-4">
                                    <p className="text-sm font-medium text-neutral-700">Options</p>
                                    {deliveryType === "Delivery" && (
                                        <label className="flex cursor-pointer items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={leaveAtDoor}
                                                onChange={(e) => setLeaveAtDoor(e.target.checked)}
                                                className="h-4 w-4 rounded border-neutral-300 text-[#ea580c] focus:ring-[#ea580c] focus:ring-offset-0"
                                            />
                                            <span className="text-sm text-neutral-700">Leave at door</span>
                                        </label>
                                    )}
                                    <label className="flex cursor-pointer items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={addCutlery}
                                            onChange={(e) => setAddCutlery(e.target.checked)}
                                            className="h-4 w-4 rounded border-neutral-300 text-[#ea580c] focus:ring-[#ea580c] focus:ring-offset-0"
                                        />
                                        <span className="text-sm text-neutral-700">Add cutlery & napkins</span>
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={subscribeToDeals}
                                            onChange={(e) => setSubscribeToDeals(e.target.checked)}
                                            className="h-4 w-4 rounded border-neutral-300 text-[#ea580c] focus:ring-[#ea580c] focus:ring-offset-0"
                                        />
                                        <span className="text-sm text-neutral-700">Subscribe to deals & offers</span>
                                    </label>
                                </div>

                                {/* Special instructions – text */}
                                <div>
                                    <label htmlFor="order-instructions" className="mb-1 block text-sm font-medium text-neutral-700">Special instructions</label>
                                    <textarea
                                        id="order-instructions"
                                        placeholder="Allergies, extra sauce, delivery notes…"
                                        value={specialInstructions}
                                        onChange={(e) => setSpecialInstructions(e.target.value)}
                                        rows={3}
                                        className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
                                    />
                                </div>

                                {/* Form completion progress */}
                                <div className="pt-2">
                                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
                                        <span>Form completion</span>
                                        <span className="font-semibold">
                                            {[name.trim(), phone.trim(), deliveryType === "Pickup" || address.trim()].filter(Boolean).length}/
                                            {deliveryType === "Delivery" ? 3 : 2} fields
                                        </span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                                        <div
className="h-full rounded-full"
                                        style={{
                                                width: `${(
                                                        [name.trim(), phone.trim(), deliveryType === "Pickup" || address.trim()].filter(Boolean).length /
                                                        (deliveryType === "Delivery" ? 3 : 2)
                                                    ) * 100
                                                    }%`,
                                                background:
                                                    canPlaceOrder
                                                        ? "linear-gradient(90deg, #22c55e, #16a34a)"
                                                        : "linear-gradient(90deg, #ea580c, #f97316)",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="mt-6 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(1)}
                                    className="flex-1 rounded-full border-2 border-neutral-200 py-3 text-base font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300"
                                >
                                    ← Back
                                </button>
                                <button
                                    type="button"
                                    onClick={handlePlaceOrder}
                                    disabled={!canPlaceOrder}
                                    className="flex-[2] rounded-full bg-[#ea580c] py-3 text-base font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#c2410c] hover:shadow-xl hover:shadow-orange-500/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                                >
                                    Place Order — ${totalPrice.toFixed(2)}
                                </button>
                            </div>
                        </>
                    )}

                    {/* ===== STEP 3: Confirmation ===== */}
                    {isPlaced && (
                        <div className="text-center py-8">
                            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10 text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank you, {name || "Customer"}!</h3>
                            <p className="text-neutral-600 mb-1">Your order has been placed successfully.</p>
                            <p className="text-sm text-neutral-500 mb-6">
                                Order ID: <span className="font-semibold text-[#ea580c]">{orderId}</span>
                            </p>

                            {/* Order tracking progress */}
                            <div className="mx-auto max-w-sm mb-6">
                                <div className="flex items-center justify-between text-xs font-medium mb-2">
                                    <span className="text-green-600">Received</span>
                                    <span className="text-orange-500">Preparing</span>
                                    <span className="text-neutral-400">On the way</span>
                                    <span className="text-neutral-400">Delivered</span>
                                </div>
                                <div className="h-2.5 w-full rounded-full bg-neutral-100 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-green-500 via-green-400 to-orange-400"
                                        style={{ width: "35%" }}
                                    />
                                </div>
                            </div>

                            <div className="mx-auto max-w-sm rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-left text-sm">
                                <p className="mb-1">
                                    <span className="font-medium text-neutral-700">Type:</span> {deliveryType}
                                </p>
                                {deliveryType === "Delivery" && address && (
                                    <p className="mb-1">
                                        <span className="font-medium text-neutral-700">Address:</span> {address}
                                    </p>
                                )}
                                {phone && (
                                    <p className="mb-1">
                                        <span className="font-medium text-neutral-700">Phone:</span> {phone}
                                    </p>
                                )}
                                {email && (
                                    <p className="mb-1">
                                        <span className="font-medium text-neutral-700">Email:</span> {email}
                                    </p>
                                )}
                                <p className="mb-1">
                                    <span className="font-medium text-neutral-700">Contact:</span>{" "}
                                    {contactPreference === "phone" ? "Phone call" : contactPreference === "sms" ? "Text (SMS)" : "Email"}
                                </p>
                                <p className="mb-1">
                                    <span className="font-medium text-neutral-700">Timing:</span>{" "}
                                    {orderTiming === "asap" ? "As soon as possible" : "Schedule for later"}
                                </p>
                                {deliveryType === "Delivery" && (
                                    <p className="mb-1">
                                        <span className="font-medium text-neutral-700">Leave at door:</span> {leaveAtDoor ? "Yes" : "No"}
                                    </p>
                                )}
                                <p className="mb-1">
                                    <span className="font-medium text-neutral-700">Cutlery & napkins:</span> {addCutlery ? "Yes" : "No"}
                                </p>
                                <p className="mb-1">
                                    <span className="font-medium text-neutral-700">Subscribe to deals:</span> {subscribeToDeals ? "Yes" : "No"}
                                </p>
                                {specialInstructions && (
                                    <p className="mb-1">
                                        <span className="font-medium text-neutral-700">Notes:</span> {specialInstructions}
                                    </p>
                                )}
                                <p>
                                    <span className="font-medium text-neutral-700">Total:</span>{" "}
                                    <span className="font-bold text-neutral-900">${totalPrice.toFixed(2)}</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="mt-6 rounded-full bg-[#ea580c] px-6 py-2.5 font-semibold text-white hover:bg-[#c2410c]"
                            >
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        @keyframes modalBackdropFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-modal-backdrop {
          animation: modalBackdropFadeIn 0.25s ease-out;
        }
      `}</style>
        </div>
    );
}

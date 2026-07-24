import { useEffect, useState } from "react";
import {
  CreditCard,
  Camera,
  FileText,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
} from "lucide-react";

export default function PaymentRegister() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState(false);

  // ===========================
  // CHANGE THESE LINKS
  // ===========================
  const PAYMENT_LINK = "https://your-payment-link.com";
  const GOOGLE_FORM = "https://forms.gle/your-google-form";
  // ===========================

  const close = () => {
    setOpen(false);
    setStep(1);
    setChecked(false);
  };

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", esc);

    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <>
      {/* Register Button */}

      <button
        onClick={() => setOpen(true)}
        className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-xl md:text-2xl font-bold text-blue-950 shadow-[0_0_25px_rgba(250,204,21,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(250,204,21,0.9)]"
      >
        Register Now →
      </button>

      {/* Modal */}

      {open && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md md:max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-300"
          >
            {/* HEADER */}

            <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 p-6 md:p-8 text-white relative">

              <button
                onClick={close}
                className="absolute right-5 top-5 rounded-full bg-white/20 p-2 hover:bg-white/30"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl md:text-4xl font-extrabold">
                Event Registration
              </h2>

              <p className="mt-2 text-blue-100">
                Complete all the steps below.
              </p>

              {/* Progress */}

              <div className="mt-8 flex items-center">

                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-1 items-center">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition

                      ${
                        step >= i
                          ? "bg-yellow-400 text-blue-900"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {i}
                    </div>

                    {i !== 3 && (
                      <div
                        className={`h-1 flex-1 transition

                        ${
                          step > i
                            ? "bg-yellow-400"
                            : "bg-white/20"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-3 text-sm">
                Step {step} of 3
              </div>
            </div>

            {/* BODY */}

            <div className="p-6 md:p-8">

              {/* STEP 1 */}

              {step === 1 && (
                <>
                  <div className="flex items-center gap-3">

                    <CreditCard
                      size={34}
                      className="text-blue-700"
                    />

                    <div>

                      <h3 className="text-2xl font-bold text-blue-900">
                        Registration Fee
                      </h3>

                      <p className="text-gray-600">
                        Complete the payment first.
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 rounded-2xl bg-yellow-50 border-l-8 border-yellow-500 p-5">

                    <p className="text-lg">
                      Registration Fee
                    </p>

                    <p className="text-4xl font-extrabold text-blue-900 mt-2">
                      ₹500
                    </p>

                    <p className="mt-3 text-gray-700">
                      Click below to pay securely.
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        PAYMENT_LINK,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 py-4 text-lg font-bold text-white transition hover:scale-[1.02]"
                  >
                    Pay ₹500
                  </button>

                  <button
                    onClick={() => setStep(2)}
                    className="mt-5 w-full rounded-2xl bg-yellow-400 py-4 text-lg font-bold text-blue-900 transition hover:bg-yellow-300"
                  >
                    Continue
                    <ArrowRight className="inline ml-2" size={20} />
                  </button>
                </>
              )}

              {/* STEP 2 */}

              {step === 2 && (
                <>
                  <div className="flex items-center gap-3">

                    <Camera
                      size={34}
                      className="text-blue-700"
                    />

                    <div>

                      <h3 className="text-2xl font-bold text-blue-900">
                        Payment Screenshot
                      </h3>

                      <p className="text-gray-600">
                        Save your payment proof.
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-200 p-5">

                    <p className="font-semibold text-blue-900">
                      After payment:
                    </p>

                    <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
                      <li>Take a screenshot.</li>
                      <li>Keep it safe.</li>
                      <li>You must upload it in the Google Form.</li>
                    </ul>

                  </div>

                  <label className="mt-6 flex gap-4 rounded-2xl border-2 border-blue-200 p-5 cursor-pointer hover:border-blue-500">

                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) =>
                        setChecked(e.target.checked)
                      }
                      className="mt-1 h-5 w-5 accent-blue-700"
                    />

                    <div>

                      <p className="font-bold text-blue-900">
                        I have completed payment.
                      </p>

                      <p className="text-gray-600">
                        I have taken the payment screenshot.
                      </p>

                    </div>

                  </label>

                  <div className="mt-8 flex gap-3">

                   <button
  
                        onClick={() => {
                        setChecked(false); 
                        setStep(1);
                        }}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-blue-200 py-3 font-bold text-blue-900 hover:bg-blue-50 transition"
                        >
                        <ArrowLeft size={20} strokeWidth={2.5} />
                        Back
                        </button>

                    <button
                      disabled={!checked}
                      onClick={() => setStep(3)}
                      className={`flex-1 rounded-xl py-3 font-bold transition

                      ${
                        checked
                          ? "bg-yellow-400 text-blue-900 hover:bg-yellow-300"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Continue
                    </button>

                  </div>
                </>
              )}

              {/* STEP 3 */}

              {step === 3 && (
                <>
                  <div className="flex items-center gap-3">

                    <FileText
                      size={34}
                      className="text-green-600"
                    />

                    <div>

                      <h3 className="text-2xl font-bold text-blue-900">
                        Registration Form
                      </h3>

                      <p className="text-gray-600">
                        Final step.
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5">

                    <div className="flex gap-3">

                      <CheckCircle2
                        className="text-green-600 mt-1"
                        size={22}
                      />

                      <div>

                        <p className="font-bold text-green-700">
                          Before submitting:
                        </p>

                        <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
                          <li>Fill all details correctly.</li>
                          <li>Upload payment screenshot.</li>
                          <li>Submit the Google Form.</li>
                        </ul>

                      </div>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        GOOGLE_FORM,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="mt-8 w-full rounded-2xl bg-gradient-to-r from-green-600 to-green-700 py-4 text-lg font-bold text-white transition hover:scale-[1.02]"
                  >
                    Open Google Form
                  </button>

                  <div className="mt-6 flex gap-3">

                    <button
                      onClick={() => setStep(2)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-blue-200 py-3 font-bold text-blue-900 hover:bg-blue-50 transition"
>
                    <ArrowLeft size={20} strokeWidth={2.5} />
                    
                      Back
                    </button>

                    <button
                      onClick={close}
                      className="flex-1 rounded-xl bg-blue-900 py-3 font-bold text-white"
                    >
                      Finish
                    </button>

                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
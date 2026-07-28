export default function PaymentRegister() {
  const GOOGLE_FORM = "https://forms.gle/cUNLDUxD4YeBbxUNA";

  return (
    <button
      onClick={() =>
        window.open(
          GOOGLE_FORM,
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-xl md:text-2xl font-bold text-blue-950 shadow-[0_0_25px_rgba(250,204,21,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(250,204,21,0.9)]"
    >
      Register Now →
    </button>
  );
}
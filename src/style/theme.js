export const ButtonStyle = {
  productPage: {
    addToCart:
      "border border-white rounded-full bg-secondary-300/70 px-4 py-2 hover:bg-secondary-300 w-full h-[44.5px]",
    amountButton: "px-4 bg-secondary-300 border border-secondary-300",
    amountButtonBorder:
      "text-[27px] flex flex-row justify-between items-center border border-secondary-300 w-full rounded-full",
  },
  storePage: {
    addToCart:
      "hover:bg-white/40 hover:shadow-xl active:bg-white/70 active:border-white/0  active:drop-shadow-xl border border-solid border-black rounded-3xl p-2 grow w-full h-[42.5px]",
    amountButton: "px-6 transition duration-150 hover:text-white hover:bg-black/80",
    amountButtonBorder:
      "text-[27px] flex flex-row justify-between items-center border border-black w-full rounded-full",
  },
  cart: {
    addToCart: "",
    amountButton: "px-2 bg-secondary-300 border border-secondary-300",
    amountButtonBorder:
      "text-base flex flex-row justify-between items-center border border-secondary-300 w-[75px] h-full rounded-lg",
  },
};

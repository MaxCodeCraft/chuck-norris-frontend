function BurglarButton() {
  return (
    <div className="button relative top-28">
      <img
        src="/burglar.png"
        alt="burglar"
        className="absolute -translate-x-1/2 -translate-y-[45%] left-1/2 -top-full z-50"
      />
      <div className="clickMe flex justify-center items-center z-0">
        <p className="p-5 bg-[#35505D] border-4 border-black text-white font-jomhuria text-4xl hover:cursor-pointer">
          Voler une blague
        </p>
      </div>
    </div>
  );
}

export default BurglarButton;

import Time from "./time";

export default function Footer() {
  return (
    <footer className="h-fit relative flex items-center justify-center w-full">
      <img
        src="/img/pura.svg"
        className="absolute top-[-90px] w-[100px] z-[-1]"
      />
      <img src="/img/footer.svg" className="w-full h-[100px] object-cover" />
      <div className="absolute w-full text-center">
        <Time />
      </div>
      <img
        src="/img/arrow-right.svg"
        className="absolute h-full left-[15%] 2xl:left-[20%]"
      />
      <img
        src="/img/arrow-left.svg"
        className="absolute h-full right-[15%] 2xl:right-[20%]"
      />
    </footer>
  );
}

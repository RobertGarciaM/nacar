import Image from "next/image";
import { MainMenu } from "../MainMenu";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-ritual-cream/70 px-6 py-5 backdrop-blur-md md:px-12 md:py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="/"
          className="flex items-center transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/logo-nacar.png"
            alt="Nácar"
            width={220}
            height={108}
            priority
            className="h-auto w-[118px] object-contain md:w-[150px]"
          />
        </a>

        <MainMenu />
      </div>
    </header>
  );
}
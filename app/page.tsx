import { Navbar } from "@/components/navbar/Navbar";
import dynamic from "next/dynamic";

import Image from "next/image";

const SearchPage = dynamic(() => import("@/components/search/SearchPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="divTitle">
        <div>
          <h1 className="text-5xl fw-bold text-white ">Nuestros usuarios</h1>
          <h3 className="text-md fw-normal text-white pt-4">
            ¡Conoce los correos de cada usuario de nuestra plataforma!
          </h3>
        </div>
        <div>
          <Image
            src="./personIcon.svg"
            alt="person icon"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="divTitleDivider" />
      <div className="flex justify-center p-12">
        <SearchPage />
      </div>
    </main>
  );
}

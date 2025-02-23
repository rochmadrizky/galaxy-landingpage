"use client";

import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
import { useState, useRef } from "react";
import Image from "next/image";

const Partner = () => {
  const konten = [
    {
      gambar: "/partner/partner1.png",
    },
    {
      gambar: "/partner/partner2.png",
    },
    {
      gambar: "/partner/partner3.png",
    },
    {
      gambar: "/partner/partner4.jpeg",
    },
    {
      gambar: "/partner/partner5.png",
    },
    {
      gambar: "/partner/partner6.png",
    },
  ];

  const [indeksSaatIni, mengaturIndeksSaatIni] = useState(0);
  const [titikAktif, mengaturTitikAktif] = useState(0);
  const penggeser = useRef<HTMLDivElement>(null);

  const sebelumnya = () => {
    const pengechekan =
      indeksSaatIni === 0 ? konten.length - 1 : indeksSaatIni - 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const selanjutnya = () => {
    const pengechekan =
      indeksSaatIni === konten.length - 1 ? 0 : indeksSaatIni + 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const titik = konten.map((_, urutan) => (
    <span
      key={urutan}
      className={`h-3 w-3 bg-[#980000] rounded-full mx-1 cursor-pointer ${
        urutan === titikAktif && "bg-[#C4C4C4]"
      }`}
      onClick={() => ubahKontenDenganTitik(urutan)}
    />
  ));

  const ubahKontenDenganTitik = (urutanIndex: number) => {
    mengaturTitikAktif(urutanIndex);
    mengaturIndeksSaatIni(urutanIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="p-4">
          <h1 className="text-center text-3xl font-bold">
            Lebih dari
            <span className="text-[#972421] px-1">10.000++</span>Properti dari
            Berbagai Developer,
          </h1>
          <h1 className="text-center text-3xl font-bold">
            Siap untuk Kamu Jual!
          </h1>
        </div>
      </div>

      <div
        className="w-full m-auto px-4 flex flex-col items-center justify-center"
        ref={penggeser}
      >
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={sebelumnya}
            className={`${
              indeksSaatIni === 0
                ? "pointer-events-none"
                : "pointer-events-auto"
            } `}
          >
            <IconPlayerTrackPrev />
          </button>

          <div className="w-[280px] h-[280px] rounded-3xl overflow-hidden relative flex items-center justify-center">
            <Image
              src={konten[indeksSaatIni].gambar}
              width={102}
              height={102}
              className="object-cover"
              alt={"partner"}
            />
          </div>

          <button
            onClick={selanjutnya}
            className={`${
              indeksSaatIni === konten.length - 1
                ? "pointer-events-none"
                : "pointer-events-auto"
            } `}
          >
            <IconPlayerTrackNext />
          </button>
        </div>

        <div className="flex items-center justify-center pb-24">{titik}</div>
      </div>
    </div>
  );
};

export default Partner;

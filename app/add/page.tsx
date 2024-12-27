"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cekData, setSaveData } from "../models/mahasiswa";

export default function addPage() {
  // Buat hook use State untuk baca nilai input
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");
  const [getCek, setCek] = useState({});

  // Buat fungsi untuk ambil nilai dari fungsi cek data
  const getCekData = async (npmParameter: string) => {
    setCek(await cekData(npmParameter));
  };

  // Buat fungsi untuk simpan data
  const saveData = async () => {
    // if(!getNPM){
    //   alert("NPM WAJIB DIISI")
    // } else{

    //   alert(getNPM);
    // }
    // Ternary Operator
    // getCekData(getNPM)
    // setCek(await cekData(getNPM));
    !getNPM || !getNama || !getProdi
      ? [
          alert("Semua Data wajib diisi")
        ]
      : [
          (Object.values(getCek)?.length==0)
          ? [
            await setSaveData(getNPM, getNama, getProdi),
            alert("Data Berhasil Disimpan"),
            location.reload()
          ]
          : alert('Npm Sudah Digunakan')

        ];
    // setCek({});
  };
  return (
    <div>
      <title>Tambah Data Mahasiswa</title>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-1 ">
          <label htmlFor="">NPM :</label>
        </div>
        <div className="col-span-3">
          <input
            type="text"
            placeholder="223xxxx"
            maxLength={8}
            className="input input-bordered input-success w-full "
            onChange={(e) => {
              setNPM(e.target.value);
              getCekData(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Nama :</div>
        <div className="col-span-3">
          <input
            type="text"
            placeholder="John Kopi"
            maxLength={100}
            className="input input-bordered input-success w-full "
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">Program Studi :</div>
        <div className="col-span-3">
          <select
            defaultValue={""}
            className="select select-success w-full"
            onChange={(e) => {
              setProdi(e.target.value);
            }}
          >
            <option value={""}>--Pilih Jurusan Mahasiswa--</option>
            <option value={"INFORMATIKA"}>INFORMATIKA</option>
            <option value={"SISTEM INFORMATIKA"}>SISTEM INFORMATIKA</option>
            <option value={"TEKNOLOGI INFORMASI"}>TEKNOLOGI INFORMASI</option>
            <option value={"TEKNIK KOMPUTER"}>TEKNIK KOMPUTER</option>
            <option value={"SASTRA MESIN"}>SASTRA MESIN</option>
            <option value={"BAHASA MESIN"}>BAHASA MESIN</option>
            <option value={"TUKANG KOPI"}>TUKANG KOPI</option>
          </select>
        </div>
        <div className="col-start-2 col-span-3">
          <Link href={"/"} className="btn btn-outline btn-error mr-5px w-36">
            Batal
          </Link>
          <button
            className="btn btn-outline btn-primary ml-5px w-36"
            onClick={saveData}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

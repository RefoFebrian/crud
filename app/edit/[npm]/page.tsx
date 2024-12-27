"use client";

import { detailData } from '@/app/models/mahasiswa';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function editPage({ params }: { params: { npm: string } }) {
  // BUat HOOK useState
  // nilai awal tipe object
  const [getValue, setValue] = useState({})
  // Buat hook use State untuk baca nilai input
    const [getNPM, setNPM] = useState("");
    const [getNama, setNama] = useState("");
    const [getProdi, setProdi] = useState("");
    const [getCek, setCek] = useState({});

  // Buat Fungsi untuk respon get data
  async function fetchData() {

    // Isi nilai setValue
    setValue(await detailData(atob(decodeURIComponent(params.npm))))
  }
  // BBUat Hook useEffect
  useEffect(() => {
    // Panggil fungsi fetchData
    fetchData();

  }, [])

  // Buat fungsi untuk ubah data
  const editData = async () => {

      !getNPM || !getNama || !getProdi
        ? [
            alert("Semua Data wajib diisi")
          ]
        : [
            
          ];
      // setCek({});
    };

  return (
    <>
      <title>Ubah Data Mahasiswa</title>

      {Object.values(getValue)?.map((data: any, index: number) => (

        <div key={index} className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-1 ">
            <label htmlFor="">NPM :</label>
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="223xxxx"
              defaultValue={data.npm}
              maxLength={8}
              className="input input-bordered input-success w-full "
              onChange={(e) => {
                setNPM(e.target.value);
                // getCekData(e.target.value);
              }}
            />
          </div>
          <div className="col-start-1">Nama :</div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="John Kopi"
              defaultValue={data.nama}
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
              defaultValue={data.prodi}
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
              onClick={editData}
            >
              Ubah
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

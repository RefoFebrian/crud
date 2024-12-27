"use client"

import React, { useEffect, useState } from "react";
// import font awesome (icon)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { deleteMahasiswa, getData } from "./models/mahasiswa";

export default function MainPage() {
  // BUat HOOK useState
  // nilai awal tipe object
  const [getValue, setValue] = useState({})

    // Buat Fungsi untuk respon get data
    async function fetchData() {
    
      // Isi nilai setValue
      setValue(await getData())
    }
    // BBUat Hook useEffect
  useEffect(() => {
    // Panggil fungsi fetchData
    fetchData();
   
  }, [])
  
  // Buat Fungsi Hapus Data
  async function setDelete( npm: string, nama: string){
    // alert("Hapus")
    if(confirm(`Data Mahasiswa : ${npm} - ${nama}, \nIngin Dihapus?`) == true){
      await deleteMahasiswa(npm);
      location.reload()
    } 
    // else{
    //   alert("tombol Cancel")
    // }
    }
  return (
    <>
    <title>View Data Mahasiswa</title>
      {/* menampilkan semua data mahasiswa/ findall/ findmany */}
      
      <nav className="mb-2.5 text-right">
        <Link href={"/add"}>
      <button className="btn btn-outline btn-info w-75"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Tambah Data Mahasiswa</button>
        </Link>
        </nav>
      <table className="w-full">
        <thead>
          <tr className="bg-lime-300 h-40px">
            <th className="w-10% border border-black">Aksi</th>
            <th className="w-10% border border-black">NPM</th>
            <th className="w-50% border border-black">Nama</th>
            <th className="w-30% border border-black">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue)?.map((data: any, index: number) => (
            // Tampilkan Data Mahasiswa
            <tr key={index}>
              <td className="border border-black text-center px-2.5 py-1">
                <Link href={`/edit/${btoa(data.npm)}`} className="px-2 py-1 bg-emerald-700 text-white rounded mr-0.5" title="Ubah Data">
                  <FontAwesomeIcon
                    icon={faPen}
                    size="1x"
                    shake
                  ></FontAwesomeIcon>
                </Link>
                <Link href={"/"} className="px-2 py-1 bg-rose-700 text-white rounded ml-0.5" title="Hapus Data" onClick={() =>{setDelete(data.npm,data.nama)}}>
                      
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="1x"
                    shake
                  ></FontAwesomeIcon>
                </Link>
              </td>
              <td className="border border-black text-center">{data.npm}</td>
              <td className="border border-black text-justify px-2.5">
                {data.nama}
              </td>
              <td className="border border-black text-center">{data.prodi}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.npm}  */}
    </>
  );
}

// export function Home() {
//     return (
//       <div>
//       <div>Halaman Mahasiswa</div>
//       <h1> Daftar Mahasiswa IF22dx</h1>
//       </div>
//     )
//   }

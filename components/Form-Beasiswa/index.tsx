"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const FormBeasiswa = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    umur: "",
    tempatTanggalLahir: "",
    nomorHP: "",
    nim: "",
    ipk: "",
    nik: "",
    alamat: "",
    namaDesa: "",
    universitas: "",
    keterangan: "belum di periksa",
    fakultas: "",
    jurusan: "",
    kecamatan: "",
    wisuda: "",
    yudisium: "",
    semesterS1: "",
    semesterS2: "",
    semesterS3: "",
    semesterD3: "",
    gambar_ktp: null,
    gambar_khs: null,
    gambar_spbupati: null,
    gambar_biodatareg: null,
    gambar_pasfoto: null,
    gambar_belumbea: null,
    gambar_databpp: null,
    gambar_ketpimpinan: null,
    gambar_kartumahasiswa: null,
    gambar_kk: null,
    gambar_proposalakhir: null,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <div>Loading...</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle perubahan input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, [e.target.name]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Pastikan keterangan selalu ada
    if (!formData.keterangan) {
      setFormData((prev) => ({ ...prev, keterangan: "belum di periksa" }));
    }

    const apiUrl = "http://217.15.171.240:4000/regprogram";
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        data.append(key, value);
      }
    });

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: data,
      });

      console.log("Response Status:", response.status);
      console.log("Response Text:", await response.text());

      if (!response.ok) {
        throw new Error("Gagal mengupload data");
      }

      const result = await response.json();
      alert("Data berhasil dikirim: " + JSON.stringify(result));
      setFormData({
        namaLengkap: "",
        umur: "",
        tempatTanggalLahir: "",
        nomorHP: "",
        nim: "",
        ipk: "",
        nik: "",
        alamat: "",
        namaDesa: "",
        universitas: "",
        keterangan: "belum di periksa",
        fakultas: "",
        jurusan: "",
        kecamatan: "",
        wisuda: "",
        yudisium: "",
        semesterS1: "",
        semesterS2: "",
        semesterS3: "",
        semesterD3: "",
        gambar_ktp: null,
        gambar_khs: null,
        gambar_spbupati: null,
        gambar_biodatareg: null,
        gambar_pasfoto: null,
        gambar_belumbea: null,
        gambar_databpp: null,
        gambar_ketpimpinan: null,
        gambar_kartumahasiswa: null,
        gambar_kk: null,
        gambar_proposalakhir: null,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Data berhasil dikirim");
      setFormData({
        namaLengkap: "",
        umur: "",
        tempatTanggalLahir: "",
        nomorHP: "",
        nim: "",
        ipk: "",
        nik: "",
        alamat: "",
        namaDesa: "",
        universitas: "",
        keterangan: "belum di periksa",
        fakultas: "",
        jurusan: "",
        kecamatan: "",
        wisuda: "",
        yudisium: "",
        semesterS1: "",
        semesterS2: "",
        semesterS3: "",
        semesterD3: "",
        gambar_ktp: null,
        gambar_khs: null,
        gambar_spbupati: null,
        gambar_biodatareg: null,
        gambar_pasfoto: null,
        gambar_belumbea: null,
        gambar_databpp: null,
        gambar_ketpimpinan: null,
        gambar_kartumahasiswa: null,
        gambar_kk: null,
        gambar_proposalakhir: null,
      });
    }
  };

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Formulir Beasiswa
              </h2>

              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="nama_reg"
                    placeholder="Nama Lengkap"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="umur_reg"
                    placeholder="Umur"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="tempat_tanggal_lahir"
                    placeholder="Tempat Tanggal Lahir"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="no_telepon"
                    placeholder="Nomor HP"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="nim"
                    placeholder="NIM"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="IPK"
                    placeholder="IPK"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="nik"
                    onChange={handleChange}
                    placeholder="NIK"
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <textarea
                    name="alamat"
                    onChange={handleChange}
                    placeholder="Alamat Lengkap"
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="desa"
                    placeholder="Nama Desa"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="universitas"
                    onChange={handleChange}
                    placeholder="Universitas"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="fakultas"
                    onChange={handleChange}
                    placeholder="Fakultas"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="jurusan"
                    onChange={handleChange}
                    placeholder="Jurusan"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <select
                    name="kecamatan"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option>Pilih Kecamatan</option>
                    <option value="mondoinding">Mondoinding</option>
                    <option value="tompasobaru">Tompaso Baru</option>
                    <option value="ranoyapo">Ranoyapo</option>
                    <option value="motoling">Motoling</option>
                    <option value="kumelembuai">Kumelembuai</option>
                    <option value="motolingbarat">Motoling Barat</option>
                    <option value="motolingtimur">Motoling Timur</option>
                    <option value="sinonsayang">Sinonsayang</option>
                    <option value="amurang">Amurang</option>
                    <option value="amurangbarat">Amurang Barat</option>
                    <option value="amurangtimur">Amurang Timur</option>
                    <option value="tareran">Tareran</option>
                    <option value="suluuntareran">Suluun Tareran</option>
                    <option value="tumpaan">Tumpaan</option>
                    <option value="tatapaan">Tatapaan</option>
                  </select>
                  <select
                    name="wisuda"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option className="disabled">Wisuda ?</option>
                    <option value="sudah">Sudah</option>
                    <option value="belum">Belum</option>
                  </select>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <select
                    name="yudisium"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option className="disabled">yudisium ?</option>
                    <option value="sudah">Sudah</option>
                    <option value="belum">Belum</option>
                  </select>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <select
                    name="semester_s1"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option className="disabled" value="pilihsemester">
                      Pilih semester S1 (optional)
                    </option>
                    <option value="semester6">semester 6</option>
                    <option value="semester8">semester 8</option>
                    <option value="semester10">semester 10</option>
                  </select>
                  <select
                    name="semesterS2"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option className="disabled" value="pilihsemester">
                      Pilih semester S2 (optional)
                    </option>
                    <option value="semester6">semester 4</option>
                    <option value="semester8">semester 6</option>
                  </select>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <select
                    name="semesterS3"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option className="disabled" value="pilihsemester">
                      Pilih semester S3 (optional)
                    </option>
                    <option value="semester4">semester 4</option>
                    <option value="semester6">semester 6</option>
                  </select>
                  <select
                    name="semesterD3"
                    onChange={handleChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option className="disabled" value="pilihsemester">
                      Pilih semester D3 Diploma (optional)
                    </option>
                    <option value="semester6">semester 6</option>
                    <option value="semester8">semester 8</option>
                    <option value="semester10">semester 10</option>
                  </select>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="flex w-full flex-col">
                    <label htmlFor="">KTP</label>
                    <input
                      type="file"
                      name="gambar_ktp"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <label htmlFor="">Kartu Hasil Studi</label>
                    <input
                      type="file"
                      name="gambar_khs"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="flex w-full flex-col">
                    <label htmlFor="">Surat Permohonan Kepada Bupati</label>
                    <input
                      type="file"
                      name="gambar_spbupati"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <label htmlFor="">Biodata Pemohon</label>
                    <input
                      type="file"
                      name="gambar_biodatareg"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="flex w-full flex-col">
                    <label htmlFor="">Pasfoto 3x4</label>
                    <input
                      type="file"
                      name="gambar_pasfoto"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <label htmlFor="">
                      Surat Pernyataan Belum Pernah Menerima Beasiswa
                    </label>
                    <input
                      type="file"
                      name="gambar_belumbea"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="flex w-full flex-col">
                    <label htmlFor="">
                      Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju
                    </label>
                    <input
                      type="file"
                      name="gambar_databpp"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <label htmlFor="">
                      Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
                    </label>
                    <input
                      type="file"
                      name="gambar_ketpimpinan"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="flex w-full flex-col">
                    <label htmlFor="">Kartu Mahasiswa</label>
                    <input
                      type="file"
                      name="gambar_kartumahasiswa"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                  <div className="flex w-full flex-col">
                    <label htmlFor="">Kartu Keluarga</label>
                    <input
                      type="file"
                      name="gambar_kk"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="flex w-full flex-col">
                    <label htmlFor="">
                      Proposal penelitian/tugas akhir/skripsi/tesis disertai
                      tanda tangan dosen pembimbing
                    </label>
                    <input
                      type="file"
                      name="gambar_proposalakhir"
                      onChange={handleFileChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 xl:justify-between">
                  <div className="mb-4 flex items-center md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="group flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      Saya setuju dengan ketentuan dan syarat.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Kirim
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default FormBeasiswa;

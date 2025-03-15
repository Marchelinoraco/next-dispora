import { Metadata } from "next";
import FBeasiswa from "@/components/Form-Beasiswa";

export const metadata: Metadata = {
  title: "Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan",
  description: "DISPORA",
  // other metadata
};

const FormBeasiswa = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <FBeasiswa />
      </section>
    </>
  );
};

export default FormBeasiswa;

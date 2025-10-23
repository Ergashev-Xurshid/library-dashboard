import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Minus, Plus } from "lucide-react";
import bookIMG from "../../assets/B07PPX4Z86.jpg";
import { bookArry } from "../../data/BookData";
function BookManagement() {
  const [toggle, setToggle] = useState(false);

  // get doc
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookArry);
    setFilteredBooks(bookArry); // 🔥 dastlab barcha kitoblar chiqadi
  }, []);

  const [filters, setFilters] = useState({
    bookName: "",
    author: "",
    type: "",
  });
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const filtered = books.filter((book) => {
      return (
        book.title
          .toLowerCase()
          .includes(filters.bookName.trim().toLowerCase()) &&
        book.author
          .toLowerCase()
          .includes(filters.author.trim().toLowerCase()) &&
        book.type.toLowerCase().includes(filters.type.trim().toLowerCase())
      );
    });

    // Agar inputlar bo‘sh bo‘lsa, barcha kitoblarni ko‘rsatish
    if (
      !filters.bookName.trim() &&
      !filters.author.trim() &&
      !filters.type.trim()
    ) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(filtered);
    }
  }, [filters, books]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <section className="ml-[20%] p-8 bg-[#221c17] h-[100vh]">
      <div className="fixed top-0 left-[20%] w-[80%] bg-[#221c17] z-50 p-8 pb-4 ">
        <div className="h-[70px]">
          <Card>
            <h1 className="font-medium text-2xl text-white select-none">
              Kitoblarni boshqarish
            </h1>
          </Card>
        </div>
        <div className="bg-[#2d2721] text-white rounded-2xl p-6 shadow-lg mt-6">
          <h2
            className="text-xl font-semibold cursor-pointer select-none"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle && <Plus className="inline-block mr-2" />}
            {toggle && <Minus className="inline-block mr-2" />}
            Yangi kitob qo‘shish
          </h2>

          <form
            className={`grid grid-cols-2 overflow-hidden gap-4 transition-all duration-500
            ${toggle ? "mt-5 h-auto" : "mt-0 h-0"}
            `}
          >
            <input
              type="text"
              placeholder="📖 Kitob nomi"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              type="text"
              placeholder="✍️ Muallif"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              type="text"
              placeholder="🏷️ Janr (masalan: Badiiy, Fantastik)"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              type="number"
              placeholder="💰 Narxi (so‘mda)"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              type="file"
              accept="image/*"
              className="cursor-pointer p-2 rounded-lg outline-none col-span-2"
            />
            <button
              type="submit"
              className="col-span-2 bg-[#ff7806] hover:bg-[#e56d05] rounded-lg py-2 font-semibold transition-all cursor-pointer"
            >
              Saqlash
            </button>
          </form>
        </div>
        <div className="mt-5 w-full bg-[#2d2721] rounded-lg ">
          <form
            className="flex gap-3 justify-between items-center w-full p-5"
          >
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="bookName"
              placeholder="Kitob nomi"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="author"
              placeholder="Muallif"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="type"
              placeholder="Turi"
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
          </form>
        </div>
      </div>
      <table className="w-full text-white bg-[#2d2721] mt-70 rounded-xl overflow-hidden">
        <thead className="bg-[#3e3329]">
          <tr>
            <th className="text-left p-3">Rasm</th>
            <th className="text-left p-3">Nomi</th>
            <th className="text-left p-3">Muallif</th>
            <th className="text-left p-3">Janr</th>
            <th className="text-left p-3">Narx</th>
            <th className="text-left p-3">Amallar</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks ? (
            filteredBooks.map((book) => (
              <tr key={book.id} className="border-b border-[#333]">
                <td className="p-3">
                  <img
                    src={bookIMG}
                    alt="book"
                    className="w-12 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3">{book.title}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3">{book.type}</td>
                <td className="p-3">{book.sale.toLocaleString()} so‘m</td>
                <td className="p-3 flex  gap-2 flex-col ">
                  <button className=" border-1 border-gray-400 px-3 py-1 rounded-md cursor-pointer hover:text-gray-300">
                    Tahrirlash
                  </button>
                  <button className="bg-[#ff7806] hover:bg-[#ec7311] text-gre-400 px-3 py-1 rounded-md cursor-pointer">
                    O‘chirish
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-gray-400 italic p-3">Hech narsa topilmadi</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default BookManagement;

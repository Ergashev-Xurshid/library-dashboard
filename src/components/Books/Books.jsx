import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card";
import { BookHeart, BookMarked, Rocket, UserSearch } from "lucide-react";

import bookIMG from "../../assets/B07PPX4Z86.jpg"

function Books() {
  const [filters, setFilters] = useState({
    bookName: "",
    author: "",
    type: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(filters); // bitta obyektni yuborasiz backendga
  };

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/books?_quantity=15")
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="ml-[20%] p-8 bg-[#221c17] h-[100vh]">
      <div className="fixed top-0 left-[20%] w-[80%] bg-[#221c17] z-50 p-8 pb-4">
        <div className="h-[70px]">
          <Card>
            <h1 className="font-medium text-2xl text-white">Kitoblar</h1>
          </Card>
        </div>
        <div className="mt-5 w-full bg-[#2d2721] rounded-lg ">
          <form
            onSubmit={handleSearch}
            className="flex gap-3 justify-between items-center w-full p-5"
          >
            <input
              type="text"
              name="bookName"
              placeholder="Kitob nomi"
              value={filters.bookName}
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              type="text"
              name="author"
              placeholder="Muallif"
              value={filters.author}
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <input
              type="text"
              name="type"
              placeholder="Turi"
              value={filters.type}
              onChange={handleChange}
              className="border px-3 py-2 rounded-lg outline-none text-gray-400 w-full"
            />
            <button
              type="submit"
              className="bg-[#ff7806] hover:bg-[#f67e1c] cursor-pointer text-white px-4 py-2 rounded-lg"
            >
              Qidirish
            </button>
          </form>
        </div>
      </div>
      <div className="pt-45">
        <div className="w-full flex gap-5 justify-between mt-5">
          <div className="w-full shadow-lg hover:scale-105 transition-all duration-300">
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Badiy</h4>
                <BookMarked />
              </div>
              <p className="text-4xl text-white font-medium mt-5">100</p>
            </Card>
          </div>
          <div className="w-full shadow-lg hover:scale-105 transition-all duration-300">
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Fantastik</h4>
                <Rocket />
              </div>
              <p className="text-4xl text-white font-medium mt-5">40</p>
            </Card>
          </div>
          <div className="w-full shadow-lg hover:scale-105 transition-all duration-300">
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Romantik</h4>
                <BookHeart />
              </div>
              <p className="text-4xl text-white font-medium mt-5">90</p>
            </Card>
          </div>
          <div className="w-full shadow-lg hover:scale-105 transition-all duration-300">
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Detektiv</h4>
                <UserSearch />
              </div>
              <p className="text-4xl text-white font-medium mt-5">140</p>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {books.map((book) => (
            <div
              key={book.isbn}
              className="bg-[#1e1e2f] text-white rounded-lg shadow-lg p-4 hover:scale-105 transition-all duration-300"
            >
              <img
                src={bookIMG}
                alt={book.title}
                className="rounded-lg w-1/2 h-[200px] my-0 mx-auto object-cover object-center"
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-400">{book.author}</p>
                <p className="text-xs mt-1 text-gray-400">{book.genre}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-400 font-bold">45 000 so‘m</span>
                  <button className="bg-[#ff7a00] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#ff9433] transition-all cursor-pointer">
                    Sotildi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;

import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card";
import {
  ArrowDownWideNarrow,
  BookHeart,
  BookMarked,
  Rocket,
  UserSearch,
} from "lucide-react";

import bookIMG from "../../assets/B07PPX4Z86.jpg";
import { bookArry } from "../../data/BookData";

function Books() {
  // get doc
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookArry);
    setFilteredBooks(bookArry);
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

  const handleClick = (value) => {
    setFilters({ ...filters, type: value });
  };

  

  return (
    <section className="ml-[20%] p-8 bg-[#221c17] h-[100vh]">
      <div className="fixed top-0 left-[20%] w-[80%] bg-[#221c17] z-50 p-8 pb-4">
        <div className="h-[70px]">
          <Card>
            <h1 className="font-medium text-2xl text-white select-none">
              Kitoblar
            </h1>
          </Card>
        </div>
        <div className="mt-5 w-full bg-[#2d2721] rounded-lg ">
          <form className="flex gap-3 justify-between items-center w-full p-5">
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
      <div className="pt-45">
        <div className="w-full flex gap-5 justify-between mt-5">
          <div
            onClick={() =>
              setFilters({
                bookName: "",
                author: "",
                type: "",
              })
            }
            className="w-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Hammasi</h4>
                <ArrowDownWideNarrow />
              </div>
              <p className="text-4xl text-white font-medium mt-5">100</p>
            </Card>
          </div>
          <div
            onClick={() => handleClick("badiy")}
            className="w-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Badiy</h4>
                <BookMarked />
              </div>
              <p className="text-4xl text-white font-medium mt-5">30</p>
            </Card>
          </div>
          <div
            onClick={() => handleClick("fantastik")}
            className="w-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Fantastik</h4>
                <Rocket />
              </div>
              <p className="text-4xl text-white font-medium mt-5">15</p>
            </Card>
          </div>
          <div
            onClick={() => handleClick("romantik")}
            className="w-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Romantik</h4>
                <BookHeart />
              </div>
              <p className="text-4xl text-white font-medium mt-5">25</p>
            </Card>
          </div>
          <div
            onClick={() => handleClick("detektiv")}
            className="w-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Card>
              <div className="flex justify-between items-center text-gray-400">
                <h4 className="text-lg font-semibold ">Detektiv</h4>
                <UserSearch />
              </div>
              <p className="text-4xl text-white font-medium mt-5">30</p>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
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
                <p className="text-xs mt-1 text-gray-400">{book.type}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-400 font-bold">
                    {book.sale.toLocaleString()} so‘m
                  </span>
                  <button
                    
                    className={`bg-[#ff7a00]  px-3 py-1 rounded-md text-sm font-medium hover:bg-[#ff9433] transition-all cursor-pointer`}
                  >
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

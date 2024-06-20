// import { Book } from "../interface/interface"

// const initialBook:Book[] =  JSON.parse(localStorage.getItem("books") || "[]");
let initialBook = [
  {
    id: 1,
    status: "true",
    browwerName: "Nguyen Van A",
    browwerDate: "20/4/2024",
    returnDate: "26/4/2024",
    name: "Nha Gia Kim",
  },
  {
    id: 2,
    status: "false",
    browwerName: "Tran Thi B",
    browwerDate: "15/4/2024",
    returnDate: "20/4/2024",
    name: "Hoang Tu Be",
  },
  {
    id: 3,
    status: "true",
    browwerName: "Le Van C",
    browwerDate: "18/4/2024",
    returnDate: "25/4/2024",
    name: "Harry Potter",
  },
  {
    id: 4,
    status: "false",
    browwerName: "Pham Thi D",
    browwerDate: "10/4/2024",
    returnDate: "15/4/2024",
    name: "Chien Binh Cau Vong",
  },
  {
    id: 5,
    status: "true",
    browwerName: "Hoang Van E",
    browwerDate: "22/4/2024",
    returnDate: "28/4/2024",
    name: "Dac Nhan Tam",
  },
  {
    id: 6,
    status: "false",
    browwerName: "Ngo Thi F",
    browwerDate: "12/4/2024",
    returnDate: "18/4/2024",
    name: "Toi Tai Gioi Ban Cung The",
  },
  {
    id: 7,
    status: "true",
    browwerName: "Vu Van G",
    browwerDate: "16/4/2024",
    returnDate: "22/4/2024",
    name: "Kinh Van Hoa",
  },
  {
    id: 8,
    status: "false",
    browwerName: "Dao Thi H",
    browwerDate: "14/4/2024",
    returnDate: "19/4/2024",
    name: "Cay Cam Ngot Cua Toi",
  },
  {
    id: 9,
    status: "true",
    browwerName: "Dinh Van I",
    browwerDate: "19/4/2024",
    returnDate: "25/4/2024",
    name: "Nguoi Ban",
  },
  {
    id: 10,
    status: "false",
    browwerName: "Bui Thi K",
    browwerDate: "13/4/2024",
    returnDate: "18/4/2024",
    name: "Nha Nam",
  },
];

const initialState = {
  books: initialBook,
  filteredBooks: initialBook,
  filterStatus: null,
};

// tạo hàm bookreducer
const bookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "FILTER":
      if (action.payload === null) {
        return {
          ...state,
          filterStatus: null,
          filteredBooks: state.books,
        };
      }
      let resultFilter = state.books.filter((item: any) => {
        return item.status === action.payload;
      });
      return {
        ...state,
        filterStatus: action.payload,
        filteredBooks: resultFilter,
      };
    case "EDIT":
      const updatedBooks = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      return {
        ...state,
        books: updatedBooks,
        filteredBooks: updatedBooks,
      };
    case "DELETE":
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload
      );
      return {
        ...state,
        books: filteredBooks,
        filteredBooks: filteredBooks,
      };    
    default:
      return state;
  }
};

export default bookReducer;

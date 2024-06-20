import React, { useEffect, useState } from "react";
import { Book } from "./store/interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { actionBook, deleteBook, editBook } from "./action/action";

export default function App() {
  const [date, setDate] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const [newMinDate, setNewMinDate] = useState<string>("");
  const [book, setBook] = useState<Book[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  useEffect(() => {
    let newDate = new Date().toISOString().split("T")[0];
    setMinDate(newDate);
  }, []);

  const state = useSelector((state: any) => state.bookReducer);
  const stateBook = state.filteredBooks;

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let dateValue = event.target.value;
  //   setNewMinDate(dateValue);
  // };

  // dùng useSelector de lay cac cuon sach
  // hàm chọn select
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let valueSelect = event.target.value;
    dispatch(actionBook("FILTER", valueSelect));
  };

  const handleEdit = (book: Book) => {
    setEditMode(true);
    setCurrentBook(book);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sách này?");
    if (confirmDelete) {
      dispatch(deleteBook(id));
    }
  };

  const handleSubmitEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentBook) {
      dispatch(editBook(currentBook));
      setEditMode(false);
      setCurrentBook(null);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentBook) {
      setCurrentBook({
        ...currentBook,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (currentBook) {
      setCurrentBook({
        ...currentBook,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <div>
      <div>
        <h2>Quản lí mượn sách</h2>
        <button style={{ backgroundColor: "blue" }}>Thêm thông tin</button>
        <select name="" id="" onChange={handleChangeSelect}>
          <option value="">Lọc theo</option>
          <option value="true">Đã trả</option>
          <option value="false">Chưa trả</option>
        </select>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Sinh viên mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateBook.map((item: Book, index: number) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.browwerName}</td>
                <td>{item.browwerDate}</td>
                <td>{item.returnDate}</td>

                <td>
                  {item.status === "true" ? (
                    <button>đã trả</button>
                  ) : (
                    <button>chưa trả</button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(item)}
                    style={{ backgroundColor: "yellow" }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {editMode && currentBook && (
        <form onSubmit={handleSubmitEdit}>
          <h3>Sửa Thông Tin Sách</h3>
          <input
            type="text"
            name="name"
            value={currentBook.name}
            onChange={handleInputChange}
            placeholder="Tên sách"
          />
          <input
            type="text"
            name="browwerName"
            value={currentBook.browwerName}
            onChange={handleInputChange}
            placeholder="Tên người mượn"
          />
          <input
            type="date"
            name="browwerDate"
            min={minDate}
            value={currentBook.browwerDate}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="returnDate"
            min={newMinDate}
            value={currentBook.returnDate}
            onChange={handleInputChange}
          />
          <select
            name="status"
            value={currentBook.status}
            onChange={handleSelectChange}
          >
            <option value="true">Đã trả</option>
            <option value="false">Chưa trả</option>
          </select>
          <button type="submit">Lưu</button>
        </form>
      )}
      <br />
    </div>
  );
}

import { Book } from "../store/interface/interface";

export const actionBook = (type:string,payload:any)=>{
    return {
        type,
        payload
    }
}

export const editBook = (book: Book) => {
    return {
      type: "EDIT",
      payload: book,
    };
  };
  
export const deleteBook = (id: number) => {
    return {
      type: "DELETE",
      payload: id,
    };
};
  

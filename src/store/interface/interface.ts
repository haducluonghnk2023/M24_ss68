// tạo tất cả các interface hoặc type
// export ra các file khác cần dùng type,interface thì import vào
export  interface Book {
    id:number;
    name:string;
    status:string;
    browwerName:string;
    browwerDate:string;
    returnDate:string;
}
export interface Action {
    type:string;
    payload:any;
}
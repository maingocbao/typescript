
import { useState } from 'react';
import './App.css';
const STATUSES = [
  { label: "Tất cả", value: 2 },
  { label: "Đang kinh doanh", value: 1 },
  { label: "Ngừng kinh doanh", value: 0 },
];
const DATA = [
  {
    BrandCode: "SAMSUNG",
    CateProCode: "DIENTHOAI",
    ProductCode: "GALAXYS22ULTRA",
    ProductName: "Galaxy S22 Ultra 5G 128GB",
    Price: 27000000,
    UPDc: 2000000,
    UPRateDc: 0,
    FlagPrice: 1,
    FlagActive: 0,
  },
  {
    BrandCode: "SAMSUNG",
    CateProCode: "DIENTHOAI",
    ProductCode: "GALAXYZFLIP3",
    ProductName: "Galaxy Z Flip3 5G 256GB",
    Price: 17000000,
    UPDc: 1700000,
    UPRateDc: 10,
    FlagPrice: 0,
    FlagActive: 1,
  },
  {
    BrandCode: "IPHONE",
    CateProCode: "DIENTHOAI",
    ProductCode: "IPHONE13PROMAX",
    ProductName: "iPhone 13 Pro Max 128GB",
    Price: 29000000,
    UPDc: 2900000,
    UPRateDc: 10,
    FlagPrice: 0,
    FlagActive: 1,
  },
  {
    BrandCode: "IPHONE",
    CateProCode: "DIENTHOAI",
    ProductCode: "IPHONE13MINI",
    ProductName: "iPhone 13 Mini 526GB",
    Price: 24000000,
    UPDc: 3000000,
    UPRateDc: 0,
    FlagPrice: 1,
    FlagActive: 0,
  },
  {
    BrandCode: "OPPO",
    CateProCode: "DIENTHOAI",
    ProductCode: "OPPORENO7",
    ProductName: "Oppo Reno7",
    Price: 9990000,
    UPDc: 1500000,
    UPRateDc: 0,
    FlagPrice: 1,
    FlagActive: 1,
  },
  {
    BrandCode: "XIAOMI",
    CateProCode: "DIENTHOAI",
    ProductCode: "XIAOMIREDMINOTE11",
    ProductName: "Xiaomi Redmi Note 11",
    Price: 4490000,
    UPDc: 449000,
    UPRateDc: 10,
    FlagPrice: 0,
    FlagActive: 1,
  },
];

function App() {
  const [data , setData] =useState <any>(DATA)
  const [listDelete, setListDelete] = useState (['']);
  const [thuonghieu, setThuonghieu] = useState("");
  const [product, setProduct] = useState("");
  const [masp, setMasp] = useState("");
  const [tensp, setTensp] = useState("");
  const [price, setPrice] = useState(0);
  const [updc, setUpdc] = useState <number>();
  const [upratedc, setUpratedc] = useState <number>();
  const [edittingRow, setEdittingRow] = useState <boolean>();
  const [gia, setGia] = useState <any>();
  const [trangthai, setTrangthai] = useState <any>();
  const handleChange =(e:any)=>{
   const value = e.target.value;
   if(value === "2"){
    setData(DATA);
   } else{
    setData(DATA.filter((item) => item.FlagActive === Number(value)))
   }
  }
  const handleDetel =(id:number) =>{
    let Newdata = [...data];
    console.log(Newdata)
    let index = data.findIndex((item:any) => item.id === id);
    Newdata.splice(index, 1);
    setData(Newdata);
  }
const handleListDeltel =() =>{
  if (listDelete.length === 1) {
    alert("Bạn chưa chọn các sản phẩm để xóa nhiều");
    return;
  }

  let index = DATA.filter((item) => !listDelete.includes(item.ProductCode));
  setData(index);
}
 const handeDelete =( item:any) =>{
  const isFind = listDelete.includes(item.ProductCode); 
  if (isFind) {
    const newArr = [...listDelete].filter((itemDelete) => {
      return itemDelete !== item.ProductCode;
    });
   console.log(newArr)
    setListDelete(newArr);
  } else {
    setListDelete((p) => [...p, item.ProductCode]);
  }
 }
const onchangeThuonghieu = (e:any) =>{
  setThuonghieu(e.target.value);
}
const onchangeSanpham = (e:any) =>{
  setProduct(e.target.value);
}
const onchangeMasp = (e:any) =>{
  setMasp(e.target.value);
}
const onchangeTensp = (e:any) =>{
  setTensp(e.target.value);
}
const onchangeGia = (e:any) =>{
  setGia(e.target.value);
}
const onchangeTrangthai = (e:any) =>{
  setTrangthai(e.target.value);
}


const handleSumbit = () =>{
  let Datas: {
    BrandCode: string;
    CateProCode: string;
    ProductCode: string;
    ProductName: string;
    Price : number  ;
    FlagPrice: number ;
} = {
      BrandCode:thuonghieu,
    CateProCode: product,
    ProductCode: masp,
    ProductName: tensp,
    Price: gia,
    FlagPrice:trangthai,
};
var checkData = data.filter((item:any) => {
  return item.ProductCode === Datas.ProductCode;
});
if(checkData.length === 0){
  setData([...data, Datas])
} else {
  window.alert("trùng mã sản phẩm")
}
setThuonghieu("")
setProduct("")
setMasp("")
setGia("")
setTensp("")
setTrangthai("")
}
const onPresEditingRow= (item:any)=>{
  setThuonghieu(item.BrandCode);
  setProduct(item.CateProCode);
  setMasp(item.ProductCode);
  setTensp(item.ProductName);
  setGia(item.Price);
  setTrangthai(item.FlagActive);
  setEdittingRow(item.BrandCode);
}

const handleChangeUpdate =() =>{
  console.log(edittingRow)
  let index = data.findIndex((item:any) => item.BrandCode === edittingRow);
  console.log(index)
  let Datas = [...data];
  Datas[index] = {
    BrandCode:thuonghieu,
    CateProCode: product,
    ProductCode: masp,
    ProductName: tensp,
    Price: gia,
    FlagPrice:trangthai,
  };
  setData(Datas);
  setThuonghieu("");
  setProduct("");
  setMasp("");
  setTensp("");
  setTrangthai("");
  setGia("");
  setEdittingRow(false)
}
const onchangePrice = (e:any) => {
  let a = (e.target.checked)
  if(a === true){
    setPrice(1);
  } else{
    setPrice(0);
  }

};
const onchangeUpdc = (e:any) => {
  setUpdc(e.currentTarget.value);
  setUpratedc(0);
};
const onchangeUpdca = (e:any) => {
  let math = e.currentTarget.value;
  let maths = (math / 100) * gia;
  console.log(maths);
  if (maths > 650000) {
    setUpdc(650000);
  } else {
    setUpdc(maths);
  }
  setUpratedc(math);
};

  return (
    <div>
<select name ="" id ="" onChange={handleChange} >
  {STATUSES.map((item, index)=>(
    <option key={index} value={item.value}>{item.label}</option>
    
  ))}

</select>
<button type="button" onClick={() => handleListDeltel()} >
        Tiến hành xóa nhiều 
      </button>
      <table border={1}>
        <tbody>
        <tr>
          <td>STT</td>
          <td>Action</td>
          <td>Tiến Hành xóa nhiều</td>
          <td>Mã sản phẩm</td>
          <td>Tên sản phẩm</td>
          <td>Giá sản phẩm</td>
          <td>% Khuyến mại</td>
          <td>Gía khuyến mại</td>
          <td>Khuyến mại theo giá</td>
          <td>Thương hiệu</td>
          <td>Nhóm sản phẩm</td>
          <td>Trạng thái</td>
        </tr>
        </tbody>
        <tbody>
        {data.map((item:any , id:number) =>{
          return (
            <tr key={id}>
            <td>{++id}</td>
            <td>
              <button onClick={() =>handleDetel(id)}>Xóa</button>
            </td>
            <td>
              <input
                type={"checkbox"}
                checked={listDelete.includes(item.ProductCode) ? true : false}
                onChange={() => handeDelete(item)}
              />
            </td>
            <td>{item.ProductCode}</td>
            <td>{item.ProductName}</td>
            <td>{item.Price}</td>
            <td>{item.UPRateDc}</td>
            <td>{item.UPDc}</td>
            <td>{item.FlagPrice}</td>
            <td>{item.BrandCode}</td>
            <td>{item.CateProCode}</td>
            <td>{item.FlagActive}</td>
            <td>
              <button onClick={() => onPresEditingRow(item)} >Chỉnh sửa</button>
            </td>
          </tr>
        )}
          )
        }
         
        
        </tbody>
      </table>
      <div>
        Thương Hiệu <input value={thuonghieu} onChange={onchangeThuonghieu} />
      </div>
      <div>
        Nhóm sản phẩm <input value={product} onChange={onchangeSanpham} />
      </div>
      <div>
        Mã sản phẩm
        <input value={masp} disabled={edittingRow}  onChange={onchangeMasp} />
      </div>
      <div>
        Tên sản phẩm <input value={tensp} onChange={onchangeTensp} />
      </div>
      <div>
        Gía
        <input value={gia} onChange={onchangeGia} />
      </div>
      <div>
        Trạng thái
        <input value={trangthai} onChange={onchangeTrangthai} />
      </div>
      <div>
        <input type={"checkbox"} onChange={onchangePrice} />
      </div>
      <div>
        {price ? (
          <>
            <div>giá km </div>
            <input value={updc} onChange={onchangeUpdc} />
          </>
        ) : (
          <>
            <div>phần trăm khuyến mại </div>
            <input value={upratedc} onChange={onchangeUpdca} />
          </>
        )}
      </div>
      {edittingRow ? (
        <button onClick={handleChangeUpdate}>Sửa</button>
      ) : (
        <button onClick={handleSumbit}>Thêm</button>
      )}
    </div>
  );
}

export default App;

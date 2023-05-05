export const userColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "address", headerName: "Address", width: 300 },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

export const userRows = [
  {
    id: 1,
    username: "John Smith",
    img: "https://picsum.photos/id/1015/200/200",
    status: "active",
    email: "example1@ex.com",
    age: 30,
  },
  {
    id: 2,
    username: "Jane Doe",
    img: "https://picsum.photos/id/1020/200/200",
    status: "inactive",
    email: "example2@ex.com",
    age: 25,
  },
  {
    id: 3,
    username: "Bob Johnson",
    img: "https://picsum.photos/id/1025/200/200",
    status: "pending",
    email: "example3@ex.com",
    age: 40,
  },
  {
    id: 4,
    username: "Sara Lee",
    img: "https://picsum.photos/seed/picsum/200/300",
    status: "inactive",
    email: "example4@ex.com",
    age: 50,
  },
  {
    id: 5,
    username: "Tom Smith",
    img: "https://picsum.photos/id/1035/200/200",
    status: "active",
    email: "example5@ex.com",
    age: 28,
  },
  {
    id: 6,
    username: "Mary Johnson",
    img: "https://picsum.photos/id/1040/200/200",
    status: "inactive",
    email: "example6@ex.com",
    age: 35,
  },
  {
    id: 7,
    username: "David Lee",
    img: "https://picsum.photos/id/1045/200/200",
    status: "active",
    email: "example7@ex.com",
    age: 45,
  },
  {
    id: 8,
    username: "Lisa Jones",
    img: "https://picsum.photos/id/1050/200/200",
    status: "inactive",
    email: "example8@ex.com",
    age: 32,
  },
  {
    id: 9,
    username: "Steve Smith",
    img: "https://picsum.photos/id/1055/200/200",
    status: "active",
    email: "example9@ex.com",
    age: 27,
  },
  {
    id: 10,
    username: "Emily Johnson",
    img: "https://picsum.photos/id/1060/200/200",
    status: "inactive",
    email: "example10@ex.com",
    age: 42,
  },
];

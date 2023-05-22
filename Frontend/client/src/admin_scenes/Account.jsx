import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { mockDataTeam } from "../data/mockData";
import Header from "../components/charts/Header";
import { DeleteOutline } from "@mui/icons-material";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../contexts/AuthContext";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { getListAccount } = useContext(AuthContext)

  const [keySearch, setKeySearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [listAccount, setListAccount] = useState([])


  const getPostDate = (date) => {
    const myDate = new Date(date);
    const day = ("0" + myDate.getDate()).slice(-2);
    const month = ("0" + (myDate.getMonth() + 1)).slice(-2);
    const year = myDate.getFullYear();
    const min = String(myDate.getMinutes()).padStart(2, '0');
    const hour = String(myDate.getHours()).padStart(2, '0');

    return (`${min}:${hour} ${day}/${month}/${year}`)
  }


  const formatData = (arr) => {
    let newData = [];
    arr.map((a) =>
      newData.push({
        id: a.id,
        name: a.name,
        email: a.email,
        createDate: a.createDate === null ? 'Updating' : getPostDate(a.createDate),
        dateCreated: a.name,
        role: a.role === "ROLE_USER" ? "Job seeker" : "Employer",
        status: a.active,
      }))
    return newData;
  };

  const getAccount = async (key) => {
    const res = await getListAccount(key)
    if (res.success) {
      setListAccount(res.data)
    }
  }

  useEffect(() => {
    const key = keySearch.length > 0 ? `?email=${keySearch}` : ''
    getAccount(key)
  }, [keySearch])


  const onChangeInputSearch = (event) => setInputValue(event.target.value)
  const onClickSearch = () => setKeySearch(inputValue)


  // col title table
  const columns = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "createDate",
      headerName: "Date created",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={status ? colors.greenAccent[700] : colors.redAccent[700]}
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} style={{ cursor: 'pointer' }}>
              {status ? 'Active' : 'Unactive'}
            </Typography>
          </Box>
        );
      },
    },
    /* {
      field: "action",
      headerName: "Action",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
            //onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    } */
  ];

  return (
    <Box m="0 20px">
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
        <Header title="USER ACCOUNT" subtitle="User Account Management" />
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          height='50px'
          width='50%'
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search by user email" onChange={onChangeInputSearch} />
          <IconButton type="button" sx={{ p: 2 }} onClick={() => onClickSearch()}>
            <SearchIcon />
          </IconButton>
        </Box>
      </div>
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={formatData(listAccount)} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;

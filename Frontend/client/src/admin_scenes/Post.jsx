import { Box, Typography, useTheme, IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../components/charts/Header";
import { DeleteOutline } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useToast } from "../contexts/Toast";
import './css/form-chang-statepost.css'
import addIcon from '../assets/icons/add-icon.png'

const Post = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { ucacceptPostByAdmin, acceptPostByAdmin, getListPostAdmin, getServiceByAdmin } = useContext(AuthContext)
  const { success, warn } = useToast()

  const [listPost, setListPost] = useState([])

  const [inputValue, setInputValue] = useState('')
  const [inputUserId, setInputUserId] = useState('')
  const [listService, setListService] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [typePost, setTypePost] = useState('')
  const [check1,setCheck1] = useState(false)
  const [check2,setCheck2] = useState(false)
  const [postChosen, setPostChosen] = useState({
    id: '',
    title: '',
  })
  const [keyWord, setKeyWord] = useState({
    keyword: '',
    authorId: '',
    serviceId: '',
    status: '',
  })

  const { serviceId, status } = keyWord

  const onChangeInputSearch = (event) => setInputValue(event.target.value)
  const onClickSearch = () => setKeyWord({
    ...keyWord,
    keyword: inputValue
  })

  const onChangSelectNtd = (event) => setInputUserId(event.target.value)
  const onClickSearchNtd = () => setKeyWord({
    ...keyWord,
    authorId: inputUserId
  })

  const onChangSelectService = (event) => {
    setKeyWord({
      ...keyWord,
      serviceId: String(event.target.value)
    })
  }

  const onChangSelectStatus = (event) => {
    setKeyWord({
      ...keyWord,
      status: event.target.value
    })
  }

  const getAllService = async () => {
    const res = await getServiceByAdmin(true)
    if (res.success) {
      setListService(res.data)
    }
    else warn(res.message)
  }

  const getAllPost = async (keyword) => {
    const res = await getListPostAdmin(keyword)
    if (res.success) {
      setListPost(res.data)
    }
    else warn(res.message)
  }

  const createSearchPararam = (obj) => {
    let searchQuery = ''
    for (let prop in obj) {
      if (obj[prop].length > 0) {
        if (searchQuery.length === 0)
          searchQuery += `?${prop}=${obj[prop]}`
        else searchQuery += `&${prop}=${obj[prop]}`
      }
    }
    if (searchQuery.length === 0)
      searchQuery += `?limit=100`
    else searchQuery += `&limit=100`
    return searchQuery
  }

  useEffect(() => {
    getAllService()
    const query = createSearchPararam(keyWord)
    getAllPost(query)
  }, [keyWord])

  const getPostDate = (date, time) => {
    const myDate = new Date(date);
    const day = ("0" + myDate.getDate()).slice(-2);
    const month = ("0" + (myDate.getMonth() + 1)).slice(-2);
    const year = myDate.getFullYear();
    const min = String(myDate.getMinutes()).padStart(2, '0');
    const hour = String(myDate.getHours()).padStart(2, '0');
    if (time)
      return (`${min}:${hour} ${day}/${month}/${year}`)
    return (`${day}/${month}/${year}`)

  }

  const formatData = (arr) => {
    let newData = [];
    arr.map((a) =>
      newData.push({
        id: a.id,
        title: a.title,
        username: a.author.name,
        dateCreated: getPostDate(a.createDate, false),
        industry: a.industry.name,
        services: a.service.name,
        expiration: getPostDate(a.expirationDate, false),
        status: a.status,
        city: a.city.name,
      }))
    return newData;
  };

  const setFormChange = (id, name) => {
    setPostChosen({
      id: id,
      name: name,
    })
    setIsOpen(true)
  }

  const saveClickAdmin = async () => {
    if (typePost === 'ACTIVE') {
      const res = await acceptPostByAdmin(postChosen.id)
      if (res.success)
        success("Acceped Successfulley")
      else warn(res.message)
    }
    if (typePost === 'DELETED_BY_ADMIN') {
      const res = await ucacceptPostByAdmin(postChosen.id)
      if (res.success)
        success("Acceped Successfulley")
      else warn(res.message)
    }
  }

  const onChangeCheck1 = () => {
    if(typePost==='ACTIVE'&&check1===true){
      setCheck1(false)
      setTypePost('')
    }
    else setCheck1(true)
  }




  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "username",
      headerName: "Employer",
      flex: 1,
    },
    {
      field: "dateCreated",
      headerName: "Date created",
      type: "date",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "services",
      headerName: "Services",
      width: 100,
    },
    {
      field: "industry",
      headerName: "Industry",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "expiration",
      headerName: "Expiration date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "State",
      width: 100,
      renderCell: ({ row: { status, id, title } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "ACTIVE"
                ? colors.greenAccent[700]
                : status === "WAIT_FOR_ACCEPT"
                  ? '#f8bc6e'
                  : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} onClick={() => setFormChange(id, title)} style={{ cursor: 'pointer' }}>
              {status === 'ACTIVE' ? 'Active' : status === "WAIT_FOR_ACCEPT" ? 'Pending' : status === "DELETED_BY_ADMIN" ? 'Denied' : "Deleted"}
            </Typography>
          </Box>
        );
      },
    },
    /* {
      field: "zdelete",
      headerName: "Delete",
      width: 50,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="blogListDelete"
            //onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    } */
  ];

  return (
    <Box m="0 20px 20px 20px">
      <Box
        display='flex'
        justifyContent='space-between'
        padding='5px'
      >
        <Header title="LIST POSTS" subtitle="Manage job postings" />
        <Box
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            height='50px'
            width='50%'
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search by keyword" onChange={onChangeInputSearch} />
            <IconButton type="button" sx={{ p: 2 }} onClick={() => onClickSearch()}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            height='50px'
            width='50%'
            marginLeft='10px'
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search by user ID" onChange={onChangSelectNtd} type="number" />
            <IconButton type="button" sx={{ p: 2 }} onClick={() => onClickSearchNtd()}>
              <SearchIcon />
            </IconButton>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <Select
              style={{
                border: '1px solid #fff'
              }}
              value={serviceId}
              onChange={onChangSelectService}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                Select service type
              </MenuItem>
              {listService.length > 0 ? (
                listService.map((s, id) => (
                  <MenuItem value={s.id} key={id}>{s.name}</MenuItem>
                ))
              ) : (<></>)}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <Select
              style={{
                border: '1px solid #fff'
              }}
              value={status}
              onChange={onChangSelectStatus}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                Select post status
              </MenuItem>
              <MenuItem value='ACTIVE'>Active</MenuItem>
              <MenuItem value='WAIT_FOR_ACCEPT'>Waiting for accept</MenuItem>
              <MenuItem value='DELETED'>Deleted by Employer</MenuItem>
              <MenuItem value='DELETED_BY_ADMIN'>Deleted by Admin</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        m="0 0 0 0"
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
        <DataGrid /* checkboxSelection */ disableRowSelectionOnClick  rows={formatData(listPost)} columns={columns} />
      </Box>
      <div className='change-post-status-form' style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <div className='form-change-state-control'>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
            <div style={{ color: "#0c62ad", fontSize: '18px', fontWeight: '500' }}>{`Change post state: ${postChosen.name}`}</div>
            <div><img src={addIcon} className='close-form-submit' alt='' onClick={() => { setIsOpen(false) }} /></div>
          </div>

          <div className="gr-btn-status-post">
            <div className="btn-accept-post-admin" onClick={() => setTypePost('ACTIVE')}>
              <div className="name-type-state-admin" >
                ACCEPT POST
              </div>
              <div className="checkbox-state-post-admin">
                <input
                  type="checkbox"
                  value="accept"
                />
              </div>
            </div>

            <div className="btn-denied-post-admin" onClick={() => setTypePost('DELETED_BY_ADMIN')}>
              <div className="name-type-state-admin" >
                ACCEPT POST
              </div>
              <div className="checkbox-state-post-admin">
                <input
                  type="checkbox"
                  value="accept"
                />
              </div>
            </div>

          </div>
          <div className="group-buttons flex-row "
            style={{ display: 'flex', justifyContent: 'end', marginTop: '1.2em', gap: '1em' }}>
            <div className="button al-content-btn" onClick={() => saveClickAdmin()}>
              <i className="fa fa-file-text-o" aria-hidden="true" ></i>
              SAVE
            </div>
            <div className="button btn-close al-content-btn" onClick={() => { setIsOpen(false) }}>
              <i className="fa fa-times" aria-hidden="true" style={{ height: '25px', width: 'auto', marginTop: '10px' }}></i>
              CLOSE
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Post;

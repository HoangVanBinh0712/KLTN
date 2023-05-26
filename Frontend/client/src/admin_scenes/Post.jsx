import { Box, Typography, useTheme, IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../components/charts/Header";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import './css/form-chang-statepost.css'
import addIcon from '../assets/icons/add-icon.png'
import swal from "sweetalert";

const Post = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { ucacceptPostByAdmin, acceptPostByAdmin, getListPostAdmin, getServiceByAdmin } = useContext(AuthContext)

  const [listPost, setListPost] = useState([])

  const postDefault = {
    id: '',
    title: "",
    description: "",
    method: "",
    position: "",
    experience: "",
    gender: "",
    requirement: "",
    benifit: "",
    contact: "",
    salary: null,
    currency: "",
    location: "",
    recruit: 0,
    createDate: "2023-01-07 10:56:01",
    expirationDate: "2023-06-06 00:00:00",
    author: {
      id: 0,
      email: "",
      emailConfirm: false,
      name: "",
      phone: "",
      city: { id: 1, name: "TP Hồ Chí Minh" },
      industry: { id: 1, name: "IT" },
      urlAvatar: null,
      urlCover: null,
      address: "",
      description: "",
      role: "",
      createDate: "2023-01-07 00:00:00",
      active: true,
    },
    industry: { id: 1, name: "IT" },
    city: { id: 1, name: "TP Hồ Chí Minh" },
    status: "ACTIVE",
    viewCount: 45,
    service: {
      id: 3,
      name: "Premiun Serivce",
    },
  }

  const [inputValue, setInputValue] = useState('')
  const [inputUserId, setInputUserId] = useState('')
  const [listService, setListService] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [typePost, setTypePost] = useState('')
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [isViewPostDetails, setIsViewPostDetails] = useState(false)
  const [postChosen, setPostChosen] = useState(postDefault)

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
    const res = await getServiceByAdmin('')
    if (res.success) {
      setListService(res.data)
    }
    else swal({
      title: "Error",
      icon: "warning",
      text: res.message,
      dangerMode: true,
    })
  }

  const getAllPost = async (keyword) => {
    const res = await getListPostAdmin(keyword)
    if (res.success) {
      setListPost(res.data)
    }
    else swal({
      title: "Error",
      icon: "warning",
      text: res.message,
      dangerMode: true,
    })
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

  const getPostTime = (date) => {
    const myDate = new Date(date);
    const day = ("0" + myDate.getDate()).slice(-2);
    const month = ("0" + (myDate.getMonth() + 1)).slice(-2);
    const year = myDate.getFullYear();
    const min = String(myDate.getMinutes()).padStart(2, '0');
    const hour = String(myDate.getHours()).padStart(2, '0');
    return (`${min}:${hour} ${day}-${month}-${year}`)
  }

  const setFormChange = (id, name, status) => {
    setPostChosen({
      id: id,
      name: name,
      status: status,
    })
    setIsOpen(true)
  }

  const saveClickAdmin = async () => {
    if (typePost === 'ACTIVE') {
      if (typePost !== postChosen.status) {
        const res = await acceptPostByAdmin(postChosen.id)
        if (res.success) {
          swal({
            title: "Success",
            icon: "success",
            text: "Acceped Successfulley",
            dangerMode: false,
          })
          const query = createSearchPararam(keyWord)
          getAllPost(query)
        }
        else swal({
          title: "Error",
          icon: "warning",
          text: res.message,
          dangerMode: true,
        })
      }
      else swal({
        title: "Error",
        icon: "warning",
        text: "This post was actived",
        dangerMode: true,
      })
    }
    if (typePost === 'DELETED_BY_ADMIN') {
      if (typePost !== postChosen.status) {
        const res = await ucacceptPostByAdmin(postChosen.id)
        if (res.success) {
          swal({
            title: "Success",
            icon: "success",
            text: "Denined Successfulley",
            dangerMode: false,
          })
          const query = createSearchPararam(keyWord)
          getAllPost(query)
        }
        else swal({
          title: "Error",
          icon: "warning",
          text: res.message,
          dangerMode: true,
        })
      }
      else swal({
        title: "Error",
        icon: "warning",
        text: "This post was actived",
        dangerMode: true,
      })
    }
    setIsOpen(false)
  }

  const onClickAcceptbtn = () => {
    if (typePost === 'ACTIVE' && check1 === true) {
      setCheck1(false)
      setTypePost('')
    }
    else {
      setTypePost('ACTIVE')
      setCheck1(true)
      setCheck2(false)
    }
  }


  const onClickDeniedbtn = () => {
    if (typePost === 'DELETED_BY_ADMIN' && check2 === true) {
      setCheck2(false)
      setTypePost('')
    }
    else {
      setTypePost('DELETED_BY_ADMIN')
      setCheck1(false)
      setCheck2(true)
    }
  }

  const DropdownBox = ({ onClick1, index, post }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <Box className="dropdown-box"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <MoreVertIcon
          className="serListDelete"
        />
        {isOpen && (
          <Box className="dropdown-options"
            style={{ top: `${40 + (index + 1) * 40}px`, right: '0px' }}>
            <Box
              className="dropdown-option"
              onClick={() => onClick1(post)}
            >
              View Detail
            </Box>
          </Box>
        )}
      </Box>
    )
  }

  const onClickViewPostDetail = (data) => {
    setPostChosen(data)
    setIsViewPostDetails(true)
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
      renderCell: ({ row: { author } }) => {
        return (
          <Box>
            {author.name}
          </Box>
        );
      },
    },
    {
      field: "createDate",
      headerName: "Date created",
      type: "date",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: ({ row: { createDate } }) => {
        return (
          <Box>
            {getPostDate(createDate, false)}
          </Box>
        );
      },
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      renderCell: ({ row: { city } }) => {
        return (
          <Box>
            {city.name}
          </Box>
        );
      },
    },
    {
      field: "services",
      headerName: "Services",
      width: 100,
      renderCell: ({ row: { service } }) => {
        return (
          <Box>
            {service.name}
          </Box>
        );
      },
    },
    {
      field: "industry",
      headerName: "Industry",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row: { industry } }) => {
        return (
          <Box>
            {industry.name}
          </Box>
        );
      },
    },
    {
      field: "expirationDate",
      headerName: "Expiration date",
      flex: 1,
      renderCell: ({ row: { expirationDate } }) => {
        return (
          <Box>
            {getPostDate(expirationDate, false)}
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "State",
      headerAlign: 'center',
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
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} onClick={() => {
              if (status !== "DELETED")
                setFormChange(id, title, status)
            }
            } style={status !== "DELETED" ? { cursor: 'pointer' } : { cursor: 'default' }}>
              {status === 'ACTIVE' ? 'Active' : status === "WAIT_FOR_ACCEPT" ? 'Pending' : status === "DELETED_BY_ADMIN" ? 'Denied' : "Deleted"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: 'center',
      align: 'center',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <DropdownBox onClick1={onClickViewPostDetail} index={params.rowIndex} post={params.row} />
          </>
        );
      },
    }
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
        <Header title="LIST OF POSTS" subtitle="Manage job postings" />
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
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search by title" onChange={onChangeInputSearch} />
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
        <DataGrid /* checkboxSelection */ disableRowSelectionOnClick rows={listPost} columns={columns} />
      </Box>
      <div className='change-post-status-form' style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <div className='form-change-state-control'>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
            <div style={{ color: "#0c62ad", fontSize: '18px', fontWeight: '500' }}>{`Change post state: ${postChosen.name}`}</div>
            <div><img src={addIcon} className='close-form-submit' alt='' onClick={() => { setIsOpen(false) }} /></div>
          </div>

          <div className="gr-btn-status-post">
            <div className="btn-accept-post-admin" onClick={() => onClickAcceptbtn()}>
              <div className="name-type-state-admin" >
                ACCEPT POST
              </div>
              <div className="checkbox-state-post-admin">
                <input
                  type="checkbox"
                  value="accept"
                  checked={check1}
                />
              </div>
            </div>

            <div className="btn-denied-post-admin" onClick={() => onClickDeniedbtn()}>
              <div className="name-type-state-admin" >
                DENIE POST
              </div>
              <div className="checkbox-state-post-admin">
                <input
                  type="checkbox"
                  value="accept"
                  checked={check2}
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

      {/* Post detail */}
      <div className='change-report-info-form'
        style={isViewPostDetails ? { display: 'block', overflowY: 'auto', paddingTop: '3%' }
          : { display: 'none', overflowY: 'auto', paddingTop: '3%' }}>
        <div className='form-change-report-control'>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ color: "#0c62ad", fontSize: '18px', fontWeight: '500' }}>
                {`Post ID: ${postChosen.id}  -`}
              </div>
              <div style={{ color: "#3da58a", fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}>
                {` ${postChosen.service.name}`}
              </div>
              <div style={{ color: "#6c6c6c", fontSize: '16px', paddingLeft: '40px' }}>
                {`View: ${postChosen.viewCount}`}
              </div>
            </div>
            <div><img src={addIcon} className='close-form-submit' alt=''
              onClick={() => {
                setIsViewPostDetails(false)
              }
              } /></div>
          </div>
          <div className="fram-info-report" style={{ marginTop: '5px' }}>
            <div className="gr-int-value">
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>Post title:</div>
                <input value={postChosen.title}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
                <div style={{ width: '50%', display: 'flex', justifyContent: 'end', color: '#0c62ad' }}>
                  {`Created time: ${getPostTime(postChosen.createDate)}`}
                </div>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'start' }}>
                <div style={{ width: '12%' }}>Description:</div>
                <textarea value={postChosen.description} disabled
                  className="textarea-view-post-details"
                  id='desc-post-report-view'
                  style={{ width: '88%' }}></textarea>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'start' }}>
                <div style={{ width: '12%' }}>Requirement:</div>
                <textarea value={postChosen.requirement} disabled
                  className="textarea-view-post-details"
                  id='desc-post-report-view'
                  style={{ width: '88%' }}></textarea>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'start' }}>
                <div style={{ width: '12%' }}>Benefit:</div>
                <textarea value={postChosen.benifit} disabled
                  className="textarea-view-post-details"
                  id='desc-post-report-view'
                  style={{ width: '88%' }}></textarea>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>
                  {`Salary ${postChosen.currency !== 'AGREEMENT' ? `(${postChosen.currency})` : ''}:`}
                </div>
                <input
                  value={postChosen.currency !== 'AGREEMENT' ? postChosen.salary : postChosen.currency}
                  disabled className="input-view-post-details"
                  style={{ width: '40%' }}>

                </input>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>Method:</div>
                <input value={postChosen.method}
                  disabled className="input-view-post-details"
                  style={{ width: '21%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>Position:</div>
                <input value={postChosen.position}
                  disabled className="input-view-post-details"
                  style={{ width: '21%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>Experience:</div>
                <input value={postChosen.experience}
                  disabled className="input-view-post-details"
                  style={{ width: '22%' }}></input>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>Recruit:</div>
                <input value={postChosen.recruit}
                  disabled className="input-view-post-details"
                  style={{ width: '21%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>Gender:</div>
                <input value={postChosen.gender}
                  disabled className="input-view-post-details"
                  style={{ width: '21%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>Expiration:</div>
                <input value={postChosen.expiration}
                  type="date"
                  disabled className="input-view-post-details"
                  style={{ width: '22%' }}></input>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>Location:</div>
                <input value={postChosen.location}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>Contact:</div>
                <input value={postChosen.contact}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>Industry:</div>
                <input value={postChosen.industry.name}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>City:</div>
                <input value={postChosen.city.name}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
              </div>
            </div>
            <div className="gr-int-value">
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 5px 0' }}>
                <div>Post by:</div>

              </div>
              <div style={{ display: 'flex', paddingBottom: '10px', alignItems: 'end' }}>
                <div style={{ width: '12%' }}>Employer Name:</div>
                <input value={postChosen.author.name}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
                <div style={{ width: '12%', padding: '0 0 0 20px' }}>Email:</div>
                <input value={postChosen.author.email}
                  disabled className="input-view-post-details"
                  style={{ width: '38%' }}></input>
              </div>
            </div>
          </div>
          <div className="group-buttons flex-row "
            style={{ display: 'flex', justifyContent: 'end', marginTop: '1.2em', gap: '1em' }}>
            <div className="button btn-close al-content-btn"
              onClick={() => {
                setIsViewPostDetails(false)
              }}>
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

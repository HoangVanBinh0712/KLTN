import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../components/charts/Header";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import swal from "sweetalert";

const Reports = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { changeReportHandleByAdmin, getReportByAdmin } = useContext(AuthContext)

  const maxDate = new Date()

  const [searchKey, setSearchKey] = useState({
    postId: '',
    handle: '',
    date: '',
  })
  const [listRp, setListRp] = useState([])

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

  const getRpList = async (keyword) => {
    try {
      const res = await getReportByAdmin(keyword)
      if (res.success) setListRp(res.data)
    }
    catch (error) {
      swal({
        title: "Error",
        icon: "warning",
        text: error,
        dangerMode: true,
      })
    }
  }

  useEffect(() => {
    const query = createSearchPararam(searchKey)
    getRpList(query)
  }, [])



  const DropdownBox = ({ onClick1, onClick2, index, indus }) => {

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
            style={{ top: `${40 + (index + 1) * 40}px`, right: '20px' }}>
            <Box
              className="dropdown-option"
              onClick={() => onClick1(indus)}
            >
              View Detail
            </Box>
            <Box
              className="dropdown-option"
              onClick={() => onClick2(indus)}
            >
              Mark as solved
            </Box>
          </Box>
        )}
      </Box>
    )
  }

  const onClickView = (data) => {
    /* setIndustryChosen({
      id: data.id,
      name: data.name,
    })
    setIsUpdateService(false)
    setInfoForm(true) */
  }

  const onClicSetHandle = (data) => {
    /* setIndustryChosen({
      id: data.id,
      name: data.name,
    })
    setIsUpdateService(true)
    setInfoForm(true) */
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "reportContent",
      headerName: "Report content",
      flex: 2,
    },
    {
      field: "name",
      headerName: "Report By",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "date",
      headerName: "Date reported",
      type: "date",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "post",
      headerName: "Post ID/ Post title",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { post } }) => {
        return (
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ color: colors.greenAccent[700], marginRight: '5px', fontSize: '16px' }}>{`${post.id} /`}</Box>
            <Box style={{ color: '#fff' }}>{post.title}</Box>
          </Box>
        );
      },
    },
    {
      field: "postBy",
      headerName: "Posted by",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { post } }) => {
        return (
          <Box style={{ display: 'flex' }}>
            <Box style={{ color: colors.greenAccent[500], textTransform: 'uppercase' }}>{post.author.name}</Box>
          </Box>
        );
      },
    },
    {
      field: "handle",
      headerName: "Processing status",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { handle } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              handle ? colors.greenAccent[700] : '#f8bc6e'
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} onClick={() => {
              if (!handle) {

              }
              /* setFormChange(id, title, status) */
            }}
              style={handle ? { cursor: 'default' } : { cursor: 'pointer' }}>
              {handle ? 'Solved' : "Pending solve"}
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
            <DropdownBox onClick1={onClickView} onClick2={onClicSetHandle} index={params.rowIndex} indus={params.row} />
          </>
        );
      },
    }
  ];

  return (
    <Box m="0 20px 20px 20px">
      <Box
        display='flex'
        justifyContent='space-between'
        padding='5px'
      >
        <Header title="LIST OF USER REPORTS" subtitle="Manager user's reports" />
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
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search by post ID" onChange={'onChangeInputSearch'} />
            <IconButton type="button" sx={{ p: 2 }} onClick={() => 'onClickSearch'()}>
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
            <InputBase sx={{ ml: 2, flex: 1 }} 
            placeholder="Search by date" 
            onChange={'onChangSelectNtd'} 
            type="date" max='2023-05-26'/>
            <IconButton type="button" sx={{ p: 2 }} onClick={() => 'onClickSearchNtd'()}>
              <SearchIcon />
            </IconButton>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 180 }}>
            <Select
              style={{
                border: '1px solid #fff'
              }}
              value={''}
              onChange={'onChangSelectService'}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                Select report status
              </MenuItem>
              <MenuItem value="true">
                Solved
              </MenuItem>
              <MenuItem value="false">
                Not resolved
              </MenuItem>
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
        <DataGrid /* checkboxSelection */ disableRowSelectionOnClick rows={listRp} columns={columns} />
      </Box>
    </Box>
  );
};

export default Reports;

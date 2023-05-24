import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockSevices } from "../data/mockData";
import Header from "../components/charts/Header";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import addIcon from '../assets/icons/add-icon.png'
import swal from "sweetalert";
import './css/drop-box-services-page.css'

const Services = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { getServiceByAdmin } = useContext(AuthContext)

  const [keySearch, setKeySearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [listService, setListService] = useState([])
  const [serviceChosen, setServiceChosen] = useState({
    id: '',
    name: '',
    description: '',
    type: '',
    price: '',
    currency: '',
    postDuration: '',
    active: '',
    canSearchCV: '',
    canFilterCVSubmit: '',
  })
  const [openInfoForm, setInfoForm] = useState(false)
  const [isUpdateService, setIsUpdateService] = useState(false)

  const getListServices = async (keyword) => {
    const res = await getServiceByAdmin(keyword)
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

  useEffect(() => {
    const key = keySearch.length > 0 ? `?active=${keySearch}` : ''
    getListServices(key)
  }, [])

  const onChangeInputSearch = (event) => setInputValue(event.target.value)

  const onClickView = (data) => {
    setServiceChosen({
      id: data.id,
      name: data.name,
      description: data.description,
      type: data.type,
      price: data.price,
      currency: data.currency,
      postDuration: data.postDuration,
      active: data.active,
      canSearchCV: data.canSearchCV,
      canFilterCVSubmit: data.canFilterCVSubmit,
    })
    setIsUpdateService(false)
    setInfoForm(true)
  }

  const onClickUpdate = (data) => {
    setServiceChosen({
      id: data.id,
      name: data.name,
      description: data.description,
      type: data.type,
      price: data.price,
      currency: data.currency,
      postDuration: data.postDuration,
      active: data.active,
      canSearchCV: data.canSearchCV,
      canFilterCVSubmit: data.canFilterCVSubmit,
    })
    setIsUpdateService(true)
    setInfoForm(true)
  }

  const DropdownBox = ({ onClick1, onClick2, index, service }) => {

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
            style={{ top: `${40 + (index + 1) * 40}px` }}>
            <Box
              className="dropdown-option"
              onClick={() => onClick1(service)}
            >
              View
            </Box>
            <Box
              className="dropdown-option"
              onClick={() => onClick2(service)}
            >
              Update
            </Box>
          </Box>
        )}
      </Box>
    )
  }

  const onChangInputName = (event) => {
    setServiceChosen({
      ...serviceChosen,
      name: event.target.value
    })
  }

  const onChangInputType = (event) => {
    setServiceChosen({
      ...serviceChosen,
      type: event.target.value
    })
  }

  const onChangInputDesc = (event) => {
    setServiceChosen({
      ...serviceChosen,
      description: event.target.value
    })
  }

  const onChangInputPrice = (event) => {
    setServiceChosen({
      ...serviceChosen,
      price: event.target.value
    })
  }

  const onChangInputCur = (event) => {
    setServiceChosen({
      ...serviceChosen,
      currency: event.target.value
    })
  }

  const onChangInputDuration = (event) => {
    setServiceChosen({
      ...serviceChosen,
      postDuration: event.target.value
    })
  }



  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 40
    },
    {
      field: "name",
      headerName: "Service Name",
      width: 130,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      cellClassName: "name-column--cell",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: ({ row: { price, currency } }) => {
        return (
          <>
            {`${price} ${currency}`}
          </>
        );
      },
    },
    {
      field: "postDuration",
      headerName: "Post Duration",
      width: 100,
      renderCell: ({ row: { postDuration } }) => {
        return (
          <>
            {`${postDuration} ${postDuration > 1 ? 'months' : 'month'}`}
          </>
        );
      },
    },
    {
      field: "canSearchCV",
      headerName: "Search CV",
      width: 100,

    },
    {
      field: "canFilterCVSubmit",
      headerName: "Filter for CV",
      width: 100,
    },
    {
      field: "action",
      headerName: "Others",
      width: 80,
      renderCell: (params) => {

        return (
          <>
            <DropdownBox onClick1={onClickView} onClick2={onClickUpdate} index={params.rowIndex} service={params.row} />
          </>
        );
      },
    }
  ];

  return (
    <Box m="2px 20px 20px 20px">

      <div style={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
        <Header title="Services list" subtitle="Services management" />
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <Select
            style={{
              border: '1px solid #fff'
            }}
            value={inputValue}
            onChange={onChangeInputSearch}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              Select service type
            </MenuItem>
            <MenuItem value='true'>Active</MenuItem>
            <MenuItem value='false'>Unactive</MenuItem>
          </Select>
        </FormControl>
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
        <DataGrid /* checkboxSelection */ disableRowSelectionOnClick rows={listService} columns={columns} />
      </Box>
      <div className='change-service-info-form' style={openInfoForm ? { display: 'block' } : { display: 'none' }}>
        <div className='form-change-service-control'>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
            <div style={{ color: "#0c62ad", fontSize: '18px', fontWeight: '500' }}>{`Service name: ${serviceChosen.name}`}</div>
            <div><img src={addIcon} className='close-form-submit' alt='' onClick={() => { setInfoForm(false) }} /></div>
          </div>

          <div className="fram-info-services">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1em' }}>
              <div className="gr-int-value">
                <div>Name:</div>
                <input type="text" value={serviceChosen.name} className="input-services" disabled={!isUpdateService}></input>
              </div>
              <div className="gr-int-value">
                <div>Type:</div>
                <select value={serviceChosen.description}
                  className="input-services"
                  disabled={!isUpdateService}>
                  <option value='BASIC'>Basic</option>
                  <option value='PREMIUM'>Premium</option>
                </select>
              </div>
            </div>
            <div className="gr-int-value">
              <div>Description:</div>
              <textarea value={serviceChosen.description}
                className="input-services"
                disabled={!isUpdateService}></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1em' }}>
              <div className="gr-int-value">
                <div>Price:</div>
                <input type="number" value={serviceChosen.price} className="input-services" disabled={!isUpdateService}></input>
              </div>
              <div className="gr-int-value">
                <div>Currency:</div>
                <select value={serviceChosen.description}
                  className="input-services"
                  disabled={!isUpdateService}>
                  <option value='BASIC'>USD</option>
                  <option value='PREMIUM'>VND</option>
                </select>
              </div>
            </div>
            <div className="gr-int-value">
              <div>Post duration (month):</div>
              <input type="number" value={serviceChosen.postDuration}
                className="input-services"
                disabled={!isUpdateService}
                style={{ width: '50%' }}></input>
            </div>
            <div className="row" style={{ justifyContent: 'flex-start', marginBottom: '5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <input
                  className="inp-radio-add-post-page"
                  type="checkbox"
                  name="active"
                  style={{ width: '15%' }}
                  defaultChecked
                  onChange={'onChangeCurencyType'}
                />
                <label for="currency1" style={{ width: '120px', marginLeft: '5px', }}>Normal</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <input
                  className="inp-radio-add-post-page"
                  type="checkbox"
                  name="searchCv"
                  style={{ width: '15%' }}
                  onChange={'onChangeCurencyType'}
                />
                <label for="currency2" style={{ width: '120px', marginLeft: '5px', }}>Search CV</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
                <input
                  className="inp-radio-add-post-page"
                  type="checkbox"
                  name="filterCv"
                  style={{ width: '15%' }}
                  onChange={'onChangeCurencyType'}
                />
                <label for="currency3" style={{ width: '160px', marginLeft: '5px', }}>Filter CV submit</label>
              </div>
            </div>

          </div>
          <div className="group-buttons flex-row "
            style={{ display: 'flex', justifyContent: 'end', marginTop: '1.2em', gap: '1em' }}>
            <div className="button al-content-btn" onClick={() => 'saveClickAdmin()'}>
              <i className="fa fa-file-text-o" aria-hidden="true" ></i>
              SAVE
            </div>
            <div className="button btn-close al-content-btn" onClick={() => { 'setIsOpen(false)' }}>
              <i className="fa fa-times" aria-hidden="true" style={{ height: '25px', width: 'auto', marginTop: '10px' }}></i>
              CLOSE
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Services;

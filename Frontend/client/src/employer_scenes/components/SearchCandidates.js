import '../../employee_scenes/css/search-page.css'
import bannerSearch from '../../assets/picture-banner/banner-search.png'
import leftArrow from "../../assets/icons/left-arow-icon.png"
import rightArrow from "../../assets/icons/right-arow-grey-icon.png"
import SingleCandidateProfile from './SingleCandidateProfile'

import { useState, useContext, useEffect } from 'react'
import { useToast } from '../../contexts/Toast'
import { GlobalContext } from '../../contexts/GlobalContext'
import { AuthContext } from '../../contexts/AuthContext'

const SearchCandidates = () => {

    const { getUserProfileByAnyFilter } = useContext(AuthContext)
    const { globalState: { cities, industries } } = useContext(GlobalContext)
    const { warn, success } = useToast()
    // single-time read
    const [listProfileResult, setListProfileResult] = useState([])

    const [searchInfo, setSearchInfo] = useState({
        keyword: '',
        method: '',
        position: '',
        experience: '',
        industryId: '',
        cityId: '',
    })
    const { method, position, experience } = searchInfo

    const [inputKeyword, setKeyword] = useState('')
    const [selectIndustry, setIndustry] = useState('')
    const [inputCity, setCity] = useState('')
    const onChangeInputKeyword = (event) => {
        setKeyword(event.target.value)
    }
    const onChangeSelectIndustry = (event) => {
        setIndustry(event.target.value)
    }
    const onChangeInputCity = (event) => {
        setCity(event.target.value)
    }

    const onClickSearch = () => {
        setSearchInfo({
            ...searchInfo,
            keyword: inputKeyword,
            cityId: inputCity,
            industryId: selectIndustry,
        })

    }

    const createSearchPararam = (obj) => {
        let searchQuery = '?limit=32'
        for (let prop in obj) {
            if (obj[prop].length > 0) {
                searchQuery += `&${prop}=${obj[prop]}`
            }
        }
        return searchQuery
    }

    const getCvSearch = async (searchQr) => {
        const res = await getUserProfileByAnyFilter(searchQr)
        if (res.success) {
            setListProfileResult(res.data)
        }
        else warn(res.message)
    }

    function chuckPosts(arr, len) {
        const chunks = [];
        let i = 0;
        while (i < arr.length) {
            chunks.push(arr.slice(i, i + len));
            i += len;
        }
        return chunks;
    }

    const allPost = chuckPosts(listProfileResult, 6)

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const searchQuery = createSearchPararam(searchInfo)
        getCvSearch(searchQuery)

    }, [searchInfo])

    const onChangeExp = (event) => {
        setSearchInfo({
            ...searchInfo,
            experience: event.target.value,
        })
    }
    const onChangePosition = (event) => {
        setSearchInfo({
            ...searchInfo,
            position: event.target.value,
        })
    }
    const onChangeType = (event) => {
        setSearchInfo({
            ...searchInfo,
            method: event.target.value,
        })
    }

    const onClickClearSelection = () => {
        setSearchInfo({
            ...searchInfo,
            experience: '',
            position: '',
            method: '',
        })
    }

    const scrollTop = (position) => {
        window.scrollTo({ top: position, behavior: 'smooth' });
      };

    const toPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
        scrollTop(350)
    }
    const toNextPage = () => {
        if (currentPage < allPost.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const toAnyPage = (page) => {
        setCurrentPage(page)
    }

    return (
        <>
            <div className="search-page">

                <img className="banner" src={bannerSearch} alt="" />
                <div className="search-bar">
                    <div className="row-flex-horizon" style={{ marginBottom: '1em' }}>
                        <input className="search-text" type="text"
                            placeholder="Job title, position you want ..."
                            value={inputKeyword}
                            onChange={onChangeInputKeyword} />
                        <select className="search-select option-select-page-search" onChange={onChangeSelectIndustry}>
                            <option value="" selected={selectIndustry === ''}>All industries</option>
                            {industries.map((i) => (
                                <option key={i.id} value={i.id} selected={selectIndustry == i.id}>
                                    {i.name}
                                </option>
                            ))}
                        </select>
                        <select className="search-select option-select-page-search" onChange={onChangeInputCity}>
                            <option value="" selected={inputCity === ''}>All areas</option>
                            {cities.map((c) => (
                                <option key={c.id} value={c.id} selected={inputCity == c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        <div className="button styling-btn-search" onClick={() => { onClickSearch() }}>
                            <i className="fa fa-search" aria-hidden="true" style={{ color: 'white' }}></i>
                            Search
                        </div>
                    </div>
                    <div className="row-flex-horizon row-filter" >
                        <select className="search-select blue-border-select" onChange={onChangeExp}>
                            <option value="" selected={experience === ''}>All experience</option>
                            <option value="NONE" selected={experience === 'NONE'}>None</option>
                            <option value="UNDER_ONE_YEAR" selected={experience === 'UNDER_ONE_YEAR'}>Under one year</option>
                            <option value="ONE_YEAR" selected={experience === 'ONE_YEAR'}>One year</option>
                            <option value="TWO_YEAR" selected={experience === 'TWO_YEAR'}>Two year</option>
                            <option value="THREE_YEAR" selected={experience === 'THREE_YEAR'}>Three year</option>
                            <option value="FOUR_YEAR" selected={experience === 'FOUR_YEAR'}>Four year</option>
                            <option value="FIVE_YEAR" selected={experience === 'FIVE_YEAR'}>Five year</option>
                            <option value="ABOVE_FIVE_YEAR" selected={experience === 'ABOVE_FIVE_YEAR'}>Above five year</option>
                        </select>

                        <select className="search-select blue-border-select" onChange={onChangePosition}>
                            <option value="" selected={position === ''}>Position</option>
                            <option value="Staff" selected={position === 'Staff'}>Staff</option>
                            <option value="Leader" selected={position === 'Leader'}>Leader</option>
                            <option value="Manager" selected={position === 'Manager'}>Manager</option>
                            <option value="Deputy" selected={position === 'Deputy'}>Deputy</option>
                            <option value="Vice_President" selected={position === 'Vice_President'}>Vice president</option>
                            <option value="Branch_Manager" selected={position === 'Branch_Manager'}>Branch manager</option>

                        </select>
                        <select className="search-select blue-border-select" onChange={onChangeType}>
                            <option value="" selected={method === ''}>Type of work</option>
                            <option value="FULL_TIME" selected={method === 'FULL_TIME'}>Full time</option>
                            <option value="PART_TIME" selected={method === 'PART_TIME'}>Part time</option>
                            <option value="INTERN" selected={method === 'INTERN'}>Intern</option>
                        </select>

                        <p className='clear-selection' onClick={onClickClearSelection}>Clear selection</p>
                    </div>

                </div>
                <div className='quantity-number-rusult'> Found <p> {listProfileResult.length} </p> jobs matching your request.</div>
                <div className="search-content">
                    <div className="list-post" style={{ width: '100%' }}>
                        {listProfileResult.length > 0 ? (<>
                            {allPost[currentPage].map((a,id) => (
                                <SingleCandidateProfile data={a} key={id} />
                            ))
                            }
                        </>) : (<></>)}
                        {console.log(allPost)}
                        <div className="paging-post" style={{ marginTop: '15px' }}>
                            <div className="circle-round" onClick={toPreviousPage}>
                                <img src={leftArrow} alt='icon' />
                            </div>
                            {allPost.map((p, id) => (
                                <div className="page-num-round" onClick={() => { toAnyPage(id) }} key={id}
                                    style={currentPage === id ? { backgroundColor: "#0c62ad", border: "2px solid #0c62ad" } : { backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}
                                >

                                </div>
                            ))}
                            <div className="circle-round" onClick={toNextPage}>
                                <img src={rightArrow} alt='icon' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default SearchCandidates;
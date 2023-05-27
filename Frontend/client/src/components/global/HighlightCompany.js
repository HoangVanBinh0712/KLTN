import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "../../contexts/Constants";
import "../css/highlight-company.css";
import TopBar from "./TopBar";
import Footer from "./Footer";
const HighLightCompany = () => {
  const defCover = "https://timviec365.vn/pictures/news/2022/03/12/sqx1647056215.jpg";
  const defAavatar = "https://yt3.ggpht.com/a/AATXAJz7Dr0Z8WKXpTwzvIx3dFSr-34go39Fe5l9MA=s900-c-k-c0xffffffff-no-rj-mo";
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`${apiUrl}/user/highlight-company`);
        if (res.data) setCompanies(res.data);
      } catch (e) {}
    }
    getData();
  }, []);

  return (
    <>
      <TopBar />
      <div className="hightlight-company">
        <h1>List of hightlights company</h1>
        <div className="list-company">
          {companies.map((com, key) => (
            <div className="single-company" key={key}>
              <div
                className="single-company-wrapper"
                onClick={() => {
                  window.open(`/recruiter/${com.id}`);
                }}
              >
                <img src={com.urlCover ? com.urlCover : defCover} alt="Cover" className="cover" />
                <img src={com.urlAvatar ? com.urlAvatar : defAavatar} alt="Avatar" className="avatar" />
                <h3>{com.name}</h3>
                <div className="description" dangerouslySetInnerHTML={{ __html: com.description }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HighLightCompany;

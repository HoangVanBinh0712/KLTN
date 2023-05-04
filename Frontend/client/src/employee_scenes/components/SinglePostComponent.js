import logoIcon from "../../assets/picture-banner/logo.png";

const SinglePost = ({ post }) => {

  const aPost = {
    id: 1,
    title:"Second title",
    description:"Mặc áo vào thứ anh cần là nụ cười của em ?",
    method: "FULL_TIME",
    position:"Manager",
    experience:"THREE_YEAR",
    gender:"MALE",
    requirement:"Toeic 650+ or Ielts 6.0+",
    benifit:"Bao hiem suc khoe",
    contact:"MrBinh: 0337445599",
    salary:null,
    currency:"AGREEMENT",
    location:"Binh An, Di an",
    recruit:15,
    createDate :"2023-01-07 10:56:01",
    expirationDate :"2023-06-06 00:00:00",
    industry:{ id: 1, name: "IT" },
    city:{ id: 1, name: "TP Hồ Chí Minh" },
    status:"ACTIVE",
    viewCount:7,
  }

  function getDaysSince(date) {
    const now = new Date(); 
    const timeDiff = now.getTime() - date.getTime(); 
    return Math.floor(timeDiff / (1000 * 3600 * 24)); 
  }

  return (
    <div className="cart" >
      <img className="avatar" src={logoIcon} alt=""></img>
      <div className="cart-info">
        <p className="title">{aPost.title}</p>
        <div className="cart-description">
          {aPost.requirement}
        </div>
        <div className="row-flex">
          <div className="item">
            <p>{aPost.salary===null?'negotiation':aPost.salary + aPost.currency}</p>
          </div>
          <div className="item">
            <p>{aPost.city.name}</p>
          </div>
          <div className="item">
            <p>1 ngày trước</p>
          </div>
          <div className="item">
            <p>Còn 10 ngày</p>
          </div>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
      </div>
    </div >
  );
};

export default SinglePost;

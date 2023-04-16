import logoIcon from "../../assets/picture-banner/logo.png";

const SingleUser = () => {
  return (
    <div className="cart">
      <img className="avatar" src={logoIcon} alt=""></img>
      <div className="cart-info">
        <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
        <div className="cart-description">
          Không yêu cầu kinh nghiệm, chỉ cần năng nổ ham học hỏi và tiếng anh
          giỏi.
        </div>
        <div className="row-flex">
          <div className="item">
            <p>5 triệu</p>
          </div>
          <div className="item">
            <p>Tp HCM</p>
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
    </div>
  );
};

export default SingleUser;

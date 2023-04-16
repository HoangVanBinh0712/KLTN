import logoIcon from "../../assets/picture-banner/logo.png";

const SingleUser = () => {
  return (
    <div class="cart">
      <img class="avatar" src={logoIcon} alt=""></img>
      <div class="cart-info">
        <p class="title">Tuyển Developer C#, ASP .Net lương cao</p>
        <div class="cart-description">
          Không yêu cầu kinh nghiệm, chỉ cần năng nổ ham học hỏi và tiếng anh
          giỏi.
        </div>
        <div class="row-flex">
          <div class="item">
            <p>5 triệu</p>
          </div>
          <div class="item">
            <p>Tp HCM</p>
          </div>
          <div class="item">
            <p>1 ngày trước</p>
          </div>
          <div class="item">
            <p>Còn 10 ngày</p>
          </div>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;

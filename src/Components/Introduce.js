import ComSuon from "./../Assets/ComSuon.jpg";
import My_Y from "../Assets/My_Y.jpg";
import Hamburger from "../Assets/Hamburger.jpg";
import IceCream from "../Assets/IceCream.jpg";
import OrangeJuice from "../Assets/OrangeJuice.jpg";

const styleIcon = "items-center py-2 px-2";
const standard =
  "float-left text-center box-border border-2 rounded-3xl w-30 ml-5 mr-5 mt-3 mb-3";
const textStandard = "opacity-60 mr-2 ml-2 py-4";
const styleimg =
  " xl:block w-5/6 hover:scale-105 transition-all duration-500 transform ml-auto mr-auto";
const category =
  "container w-5/6 bg-yellow-50 md:mx-auto mx-20 justify-center items-center mt-2 py-12 rounded-3xl border-2 border-opacity-75 border-gray-400 bg-white";
const textCategory =
  "mt-3 font-display font-bold text-medium text-gray-700 text-center px-4";

function Introduce(props) {
  return (
    <div>
      <div className="W-full py-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14936.81555638255!2d108.42160328093186!3d13.424337497566844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316e67f52a0cbedb%3A0x6bc72dfab3ba3453!2sCheo%20Reo%2C%20Ayun%20Pa%2C%20Gia%20Lai%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1638014721178!5m2!1svi!2s"
          className="w-full h-72"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container w-8/12 md:mx-auto mx-20 justify-center items-center my-16 py-8 rounded-3xl border-2 border-opacity-75 border-gray-400 bg-white">
        {/* Introduce */}
        <div className="w-full mr-auto ml-auto text-center">
          <div
            className="text-center font-bold py-2 px-4"
            style={{
              fontSize: "60px",
              fontWeight: "500",
              letterSpacing: "5px",
            }}
          >
            RESTAURANT INTRODUCE
          </div>

          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <hr className="py-2" />
          <div className="text-center py-2 px-3 opacity-70 w-100 ml-20 mr-20">
            Nhà hàng cung cấp món ăn được chế biến từ những thực phẩm sạch đạt
            tiêu chuẩn GlobalGap và đáp ứng tiêu chuẩn hữu cơ: không hoá chất,
            không chất kích thích, không sử dụng các chất biến đổi gen và không
            dùng phân bón hoá học.
          </div>
          <hr className="py-2" />
        </div>
        {/* Standard */}
        <div class="w-100 mt-2 mb-2 mr-auto ml-auto flex flex-col lg:grid lg:grid-cols-3">
          <div className={standard}>
            <div
              className={styleIcon}
              style={{ color: "var(--primary2)", fontSize: "80px" }}
            >
              <i class="fas fa-apple-alt"></i>
            </div>
            <div className={textStandard}>
              Các món ăn được chế biến từ thực phẩm hữu cơ
            </div>
          </div>
          <div className={standard}>
            <div
              className={styleIcon}
              style={{ color: "var(--primary2)", fontSize: "80px" }}
            >
              <i class="fas fa-shower"></i>
            </div>
            <div className={textStandard}>
              Thực phẩm đảm bảo vệ sinh an toàn
            </div>
          </div>
          <div className={standard}>
            <div
              className={styleIcon}
              style={{ color: "var(--primary2)", fontSize: "80px" }}
            >
              <i class="fas fa-store"></i>
            </div>
            <div className={textStandard}>Giao hàng tiện lợi, nhanh chóng</div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div
          className="text-center font-bold py-2 px-4 mt-8"
          style={{ fontSize: "60px", fontWeight: "500", letterSpacing: "5px" }}
        >
          CATEGORIES
        </div>

        <hr className="py-2" />

        <div className="container w-11/12 md:mx-auto mx-20 flex flex-col justify-center items-center lg:grid lg:grid-cols-4 mt-8 py-1">
          <div className={category}>
            <img
              src={ComSuon}
              alt="Mỳ"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              CƠM
              <hr />
            </div>
          </div>
          <div className={category}>
            <img
              src={My_Y}
              alt="Mỳ"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              BÚN & MỲ
              <hr />
            </div>
          </div>
          <div className={category}>
            <img
              src={IceCream}
              alt="Ăn vặt"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              ĂN VẶT
              <hr />
            </div>
          </div>
          <div className={category}>
            <img
              src={ComSuon}
              alt="Món nướng"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              MÓN NƯỚNG
              <hr />
            </div>
          </div>
        </div>
        <div className="container w-8/12 md:mx-auto mx-20 flex flex-col justify-center items-center lg:grid lg:grid-cols-3">
          <div className={category}>
            <img
              src={OrangeJuice}
              alt="Thức uống"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              THỨC UỐNG
              <hr />
            </div>
          </div>
          <div className={category}>
            <img
              src={ComSuon}
              alt="Trái cây"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              TRÁI CÂY
              <hr />
            </div>
          </div>
          <div className={category}>
            <img
              src={Hamburger}
              alt="Bánh"
              className={styleimg}
              style={{ boxShadow: "5px 10px 8px #888888" }}
            />
            <div className={textCategory}>
              BÁNH
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;

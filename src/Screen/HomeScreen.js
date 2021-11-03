import ComChien from './Img/ComChien.jpg'
import ComSuon from './Img/ComSuon.jpg'
import Hamburger from './Img/Hamburger.jpg'
import IceCream from './Img/IceCream.jpg'
import OrangeJuice from './Img/OrangeJuice.jpg'
import My_Y from './Img/My_Y.jpg'
import Carousel from "react-elastic-carousel";

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>



const breakPoints = [
    { width: 300, itemsToShow: 5},
  ];

function HomeScreen(props){
   
    return (
    <div>
        <div className="Heading">
            <h2 class ="TopSale"> &#9734; BÁN CHẠY NHẤT</h2>
        </div>
        {/* -------------TOP SALE------------------ */}
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2500}>
            <div className="SlideContainer">
                <div class="product-item">
                    <div class="product-item-text">
                        <h4>Cơm Chiên </h4>
                        <p class ="price"><b>35.000đ</b></p>
                    </div>
                    <div class ="container">
                        <img src ={ComChien} width ="300" height = "200" alt ="Cơm Chiên"></img>
                        <button type="button" class="btn"> <i class='fas fa-cart-plus'></i> </button>
                    </div>
                </div>
            </div>
            <div className="SlideContainer">
                <div class="product-item">
                    <div class="product-item-text">
                        <h4>Cơm Sườn </h4>
                        <p class ="price"><b>30.000đ</b></p>
                    </div>
                    <div class ="container">
                        <img src ={ComSuon} width ="300" height = "200" alt ="Cơm Sườn"></img>
                        <button type="button" class="btn"> <i class='fas fa-cart-plus'></i> </button>
                    </div>
                </div>
            </div>
          <div className="SlideContainer">
                <div class="product-item">
                    <div class="product-item-text">
                        <h4>Hamburger </h4>
                        <p class ="price"><b>35.000đ</b></p>
                    </div>
                    <div class="container">
                        <img src ={Hamburger} width ="300" height = "200" alt ="Hamburger"></img>
                        <button type="button" class="btn"> <i class='fas fa-cart-plus'></i> </button>
                    </div>
                </div>
            </div>
            <div className="SlideContainer">
                <div class="product-item">
                    <div class="product-item-text">
                        <h4>Kem Dâu </h4>
                        <p class ="price"><b>20.000đ</b></p>
                    </div>
                    <div class="container">
                        <img src ={IceCream} width ="300" height = "200" alt ="Kem Dâu"></img>
                        <button type="button" class="btn"> <i class='fas fa-cart-plus'></i> </button>
                    </div>
                </div>
            </div>
            <div className="SlideContainer">
                <div class="product-item">
                    <div class="product-item-text">
                        <h4>Nước Ép Cam </h4>
                        <p class ="price"><b>25.000đ</b></p>
                    </div>
                    <div class ="container">
                        <img src ={OrangeJuice} width ="300" height = "200" alt ="Nước Ép Cam"></img>
                        <button type="button" class="btn"> <i class='fas fa-cart-plus'></i> </button>
                    </div>
                </div>
            </div>
            <div className="SlideContainer">
                <div class="product-item">
                    <div class="product-item-text">
                        <h4>Mì Ý </h4>
                        <p class ="price"><b>40.000đ</b></p>
                    </div>
                    <div class="container">
                        <img src ={My_Y} width ="300" height = "200"  class = "Image" alt ="Mì Ý"></img>
                        <button type="button" class="btn"> <i class='fas fa-cart-plus'></i> </button>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
    );
}
export default HomeScreen;
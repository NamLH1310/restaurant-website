import React, { Component } from "react";
import ComChien from "./Assets/ComChien.jpg";
import promo from "./Assets/pro2.png";
import MiY from "./Assets/My_Y.jpg"
import ModalProduct from "./Components/ModalProduct";
import EmployeeModalProfile from "./Components/EmployeeModalProfile";
import axios from "axios";

const ContextList = React.createContext();

class ContextProvider extends Component {
  // What the fuck is this component, too much responsibilities, TRASH
  state = {
    oList: [],
    eList: [],
    // Cart: [],
    foods: [],
    topfoods: [],
    promotionfoods: [],
    User: "",
    productModalOpen: false,
    selectedData: null,
    cartModalOpen: false,
    totalPrice: 0,
    cartItems: [],
    checkedItems: [],
    quantity: 1,
    employeeData: null,
  };

  SetUser = (Name, Pass) => {
    switch (Name) {
      case "Employee":
        if (Pass === "123456")
          this.setState(() => {
            return { User: "Employee" };
          });
        return true;
      //break;
      case "Employer":
        if (Pass === "654321")
          this.setState(() => {
            return this.setState(() => {
              return { User: "Employer" };
            });
          });
        return true;
      //break;
      default:
        return false;
    }
  };

  logOut = () => {
    this.setState(() => {
      return { User: '' }
    })
  }

  //Lay du lieu trong set
  setProduct = () => {
    this.setState(() => {
      // axios
      //   .get('http://127.0.0.1:8000/api/categories/')
      //   .then((response) => {
          
      //   })

      return {
        eList: [
          { id: 1, name: "jack", pNumber: "030321316", shift: [1, 2] },
          { id: 2, name: "john", pNumber: "030321316", shift: [1, 2] },
          { id: 3, name: "jim", pNumber: "030321316", shift: [1, 2] },
          { id: 4, name: "jill", pNumber: "030321316", shift: [1, 2] },
        ],
        oList: [
          {
            id: 5465465,
            time: "24/05/1989",
            name: "jack",
            cost: 10000,
            pNumber: "02315654",
          },
          {
            id: 5465485,
            time: "24/05/1989",
            name: "jack",
            cost: 10000,
            pNumber: "02315654",
          },
          {
            id: 5468465,
            time: "24/05/1989",
            name: "jack",
            cost: 10000,
            pNumber: "02315654",
          },
          {
            id: 4465465,
            time: "24/05/1989",
            name: "jack",
            cost: 10000,
            pNumber: "02315654",
          },
        ],
        // Cart: [
        //   { name: "Mi xao hai san", price: 30000, quantity: 2 },
        //   { name: "Com chien duong chau", price: 40000, quantity: 1 },
        //   { name: "Mi y sot bo", price: 50000, quantity: 2 },
        // ],
        foods: [
          { id: 1, name: 'Cơm chiên dương châu', price: 40000, category: 'Cơm', img: ComChien, quantity: 0 },
          { id: 2, name: 'Cơm sườn', price: 30000, category: 'Cơm', img: ComChien, quantity: 0 },
          { id: 3, name: 'Mì ý sốt bò', price: 50000, category: 'Bún & Mì', img: MiY, quantity: 0 },
          { id: 4, name: 'Cơm chiên hải sản', price: 50000, category: 'Cơm', img: ComChien, quantity: 0 },
          { id: 5, name: 'Bánh su kem', price: 20000, category: 'Bánh', img: ComChien, quantity: 0 },
          { id: 6, name: 'Bánh trà xanh', price: 25000, category: 'Bánh', img: ComChien, quantity: 0 },
          { id: 7, name: 'Sườn nướng sa tế', price: 60000, category: 'Món nướng', img: ComChien, quantity: 0 },
          { id: 8, name: 'Cam vắt', price: 30000, category: 'Thức uống', img: ComChien, quantity: 0 },
          { id: 9, name: 'Dâu tây', price: 35000, category: 'Trái cây', img: ComChien, quantity: 0 },
          { id: 10, name: 'Bánh tráng nướng', price: 10000, category: 'Ăn vặt', img: ComChien, quantity: 0 }
        ],
        topfoods: [
          {
            id: 1,
            name: "Cơm chiên dương châu",
            price: 40000,
            img: ComChien,
          },
          { id: 2, name: "Cơm sườn", price: 30000, img: ComChien, quantity: 0 },
          { id: 3, name: "Mì ý sốt bò", price: 50000, img: ComChien, quantity: 0 },
          { id: 4, name: "com chien hai san", price: 50000, img: ComChien, quantity: 0 },
          { id: 5, name: "com chien hai san", price: 50000, img: ComChien, quantity: 0 },
          { id: 6, name: "Cơm chiên dương châu", price: 40000, img: ComChien, quantity: 0 },
          { id: 7, name: "Cơm sườn", price: 30000, img: ComChien, quantity: 0 },
          { id: 8, name: "Mì ý sốt bò", price: 50000, img: ComChien, quantity: 0 },
          { id: 9, name: "com chien hai san", price: 50000, img: ComChien, quantity: 0 },
          { id: 10, name: "com chien hai san", price: 50000, img: ComChien, quantity: 0 },
        ],
        promotionfoods: [
          { id: 1, img: promo },
          //   { id: 2, img: promo },
        ],
        categories: [
          { id: 1, name: "Cơm", icon: "mx-1 fas fa-concierge-bell" },
          { id: 2, name: "Bún & Mì", icon: "mx-1 fas fa-bacon" },
          { id: 3, name: "Ăn vặt", icon: "mx-1 fas fa-cookie" },
          { id: 4, name: "Món nướng", icon: "mx-1 fas fa-hotdog" },
          { id: 5, name: "Thức uống", icon: "mx-1 fas fa-cocktail" },
          { id: 6, name: "Trái cây", icon: "mx-1 fas fa-apple-alt" },
          { id: 7, name: "Bánh", icon: "mx-1 fas fa-birthday-cake" },
          { id: 8, name: "Tất cả", icon: "mx-1 fas fa-utensils" },
        ],
      };
    });
  };

  componentDidMount = () => {
    this.setProduct();
  };

  setProductModalOpen = (flag) => this.setState({ productModalOpen: flag })

  setSelectedData = (data) => this.setState({ selectedData: data })

  setCartModalOpen = (flag) => this.setState({ cartModalOpen: flag })

  setTotalPrice = (price) => this.setState({ totalPrice: price })

  setCartItems = (items) => this.setState({ cartItems: items })

  setCheckedItems = (items) => this.setState({ checkedItems: items })

  setQuantity = (quantity) => this.setState({ quantity: quantity })

  render() {
    return (
      <>
        <ContextList.Provider
          value={{
            ...this.state,
            openModal: this.openModal,
            SetUser: this.SetUser,
            addCart: this.addCart,
            setProductModalOpen: this.setProductModalOpen,
            setSelectedData: this.setSelectedData,
            setCartModalOpen: this.setCartModalOpen,
            setCartItems: this.setCartItems,
            setCheckedItems: this.setCheckedItems,
            setQuantity: this.setQuantity,
            logOut: this.logOut,
            expandProductModal: (data) => {
              this.setProductModalOpen(true);
              this.setSelectedData(data);
              this.setQuantity(1);
            },
          }}
        >
          {this.props.children}
        </ContextList.Provider>
        <ModalProduct
          productModalOpen={this.state.productModalOpen}
          setProductModalOpen={this.setProductModalOpen}
          selectedData={this.state.selectedData}
          setSelectedData={this.setSelectedData}
          cartModalOpen={this.state.cartModalOpen}
          setCartModalOpen={this.setCartModalOpen}
          totalPrice={this.state.totalPrice}
          setTotalPrice={this.setTotalPrice}
          cartItems={this.state.cartItems}
          setCartItems={this.setCartItems}
          checkedItems={this.state.checkedItems}
          setCheckedItems={this.setCheckedItems}
          quantity={this.state.quantity}
          setQuantity={this.setQuantity}
        />
        <EmployeeModalProfile
        />
      </>
    );
  }
}

export { ContextList, ContextProvider };

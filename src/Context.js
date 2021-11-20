import React, { Component } from "react";
import ModalProduct from "./Components/ModalProduct";
import ModalEmployee from "./Components/ModalEmployee";
import EmployeeModalProfile from "./Components/EmployeeModalProfile";
import axios from "axios";

const ContextList = React.createContext();
const api = 'http://127.0.0.1:8000/api/';
class ContextProvider extends Component {
  // What the fuck is this component, too much responsibilities, TRASH
  
  state = {
    oList: [],
    eList: [],
    // Cart: [],
    categories:[],
    foods: [],
    topfoods: [],
    promotionfoods: [],
    User: "",
    productModalOpen: false,
    selectedData: null,
    cartModalOpen: false,
    orderModalOpen: false,
    totalPrice: 0,
    cartItems: [],
    checkedItems: [],
    checkAll: false,
    quantity: 1,
    payment: false,
    modalEmployeeOpen: false,
    selectedEmployee: null,
    employeeData: null,
    payment: false,
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
      return { User: "" };
    });
  };

  setProducts = () => {
    axios.get("http://127.0.0.1:8000/api/products/").then((response) => {
      this.foods = response.data;
      console.log(response.data, "api");
      console.log(this.foods, "food");
    });
    // this.foods.map(()=>this,this.foods.img="../public/Assets/ComChien.jpg")
    this.setState(()=>{
      return this.foods
    })
  };

  setEmployee = () => {
    axios.get(
      'http://127.0.0.1:8000/api/employees/'
    ).then(res => {
      this.setState(() => {
        return { eList: [...res.data] }
      })
    }).catch(res => {
      alert(res)
    })
  }
  
  //Lay du lieu trong set
  setProduct = () => {
    console.log('start')
    axios.get(
     'http://127.0.0.1:8000/api/products/',
    ).then((res)=>{
      console.log(res.data);
      this.setState(() => {
        return {foods:[...res.data]}
      })
      let top = res.data.filter(food => { return food.is_top })
      this.setState(() => {
        return {topfoods:[...top]}
      })
      console.log(top)
    }).catch(res => {
      alert(res)
    })
    axios.get(
      'http://127.0.0.1:8000/api/categories/'
    ).then(res => {
      console.log(res.data)
      this.setState(() => {
        return {categories:[...res.data]}
      })
      
    }).catch(res => {
      alert(res)
    })
    axios.get(
      'http://127.0.0.1:8000/api/employees/'
    ).then(res => {
      this.setState(() => {
        return {eList:[...res.data]}
      })
    }).catch(res => {
      alert(res)
    })
    axios.get(
      'http://127.0.0.1:8000/api/orders/'
    ).then(res => {
      this.setState(() => {
        return {oList:[...res.data]}
      })

      
    }).catch(res => {
      alert(res)
    })
    console.log('end')
    this.setState(() => {
      return {
        /*eList: [
          { id: 1, name: "jack", pNumber: "030321316", shift: [1, 2] },
          { id: 2, name: "john", pNumber: "030321316", shift: [1, 2] },
          { id: 3, name: "jim", pNumber: "030321316", shift: [1, 2] },
          { id: 4, name: "jill", pNumber: "030321316", shift: [1, 2] },
        ],*/
       /* oList: [
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
        ],*/
        // Cart: [
        //   { name: "Mi xao hai san", price: 30000, quantity: 2 },
        //   { name: "Com chien duong chau", price: 40000, quantity: 1 },
        //   { name: "Mi y sot bo", price: 50000, quantity: 2 },
        // ],
        /*foods: [
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
        ],*/
       /* topfoods: [
          {
            id: 1,
            name: "Cơm chiên dương châu",
            price: 40000,
            img: ComChien,
          },
          { id: 2, name: "Cơm sườn", price: 30000, img: ComChien, quantity: 0 },
          {
            id: 3,
            name: "Mì ý sốt bò",
            price: 50000,
            img: ComChien,
            quantity: 0,
          },
          {
            id: 4,
            name: "com chien hai san",
            price: 50000,
            img: ComChien,
            quantity: 0,
          },
          {
            id: 5,
            name: "com chien hai san",
            price: 50000,
            img: ComChien,
            quantity: 0,
          },
          {
            id: 6,
            name: "Cơm chiên dương châu",
            price: 40000,
            img: ComChien,
            quantity: 0,
          },
          { id: 7, name: "Cơm sườn", price: 30000, img: ComChien, quantity: 0 },
          { id: 8, name: "Mì ý sốt bò", price: 50000, img: ComChien, quantity: 0 },
          { id: 9, name: "com chien hai san", price: 50000, img: ComChien, quantity: 0 },
          { id: 10, name: "com chien hai san", price: 50000, img: ComChien, quantity: 0 },
        ],*/
        // promotionfoods: [
        //   { id: 1, img: poster },
        //   //   { id: 2, img: promo },
        // ],
        /*categories: [
          { id: 1, name: "Cơm", icon: "mx-2 fas fa-concierge-bell" },
          { id: 2, name: "Bún & Mì", icon: "mx-2 fas fa-bacon" },
          { id: 3, name: "Ăn vặt", icon: "mx-2 fas fa-cookie" },
          { id: 4, name: "Món nướng", icon: "mx-2 fas fa-hotdog" },
          { id: 5, name: "Thức uống", icon: "mx-2 fas fa-cocktail" },
          { id: 6, name: "Trái cây", icon: "mx-2 fas fa-apple-alt" },
          { id: 7, name: "Bánh", icon: "mx-2 fas fa-birthday-cake" },
          { id: 8, name: "Tất cả", icon: "mx-2 fas fa-utensils" },
        ],*/
      };
    });
  };

  componentDidMount = () => {
    this.setProduct();
  };

  setProductModalOpen = (flag) => this.setState({ productModalOpen: flag });

  setSelectedData = (data) => this.setState({ selectedData: data });

  setCartModalOpen = (flag) => {
    this.setState({ cartModalOpen: flag });
  };

  setOrderModalOpen = (flag) => this.setState({ orderModalOpen: flag });

  setCheckAll = (flag) => this.setState({ checkAll: flag });

  setTotalPrice = (price) => this.setState({ totalPrice: price });

  setCartItems = (items) => this.setState({ cartItems: items });

  setCheckedItems = (items) => this.setState({ checkedItems: items });

  setQuantity = (quantity) => this.setState({ quantity: quantity });

  setPayment = (flag) => this.setState({ payment: flag });

  setModalEmployeeOpen = (flag) => this.setState({ modalEmployeeOpen: flag })

  setSelectedEmployee = (employee) => this.setState({ selectedEmployee: employee })
  render() {
    return (
      <>
        <ContextList.Provider
          value={{
            ...this.state,
            setEmployee:this.setEmployee,
            openModal: this.openModal,
            SetUser: this.SetUser,
            addCart: this.addCart,
            setProductModalOpen: this.setProductModalOpen,
            setSelectedData: this.setSelectedData,
            setCartModalOpen: this.setCartModalOpen,
            setOrderModalOpen: this.setOrderModalOpen,
            setCheckAll: this.setCheckAll,
            setCartItems: this.setCartItems,
            setCheckedItems: this.setCheckedItems,
            setQuantity: this.setQuantity,
            logOut: this.logOut,
            setPayment: this.setPayment,
            setModalEmployeeOpen: this.setModalEmployeeOpen,
            setSelectedEmployee: this.setSelectedEmployee,
            expandProductModal: (data) => {
              this.setProductModalOpen(true);
              this.setSelectedData(data);
              this.setQuantity(1);
            },
            setPayment: this.setPayment,
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
          orderModalOpen={this.state.orderModalOpen}
          setOrderModalOpen={this.setOrderModalOpen}
          checkAll={this.checkAll}
          setCheckAll={this.setCheckAll}
          totalPrice={this.state.totalPrice}
          setTotalPrice={this.setTotalPrice}
          cartItems={this.state.cartItems}
          setCartItems={this.setCartItems}
          checkedItems={this.state.checkedItems}
          setCheckedItems={this.setCheckedItems}
          quantity={this.state.quantity}
          setQuantity={this.setQuantity}
          setPayment={this.setPayment}
        />
        <ModalEmployee
          modalEmployeeOpen={this.state.modalEmployeeOpen}
          setModalEmployeeOpen={this.setModalEmployeeOpen}
          selectedEmployee={this.state.selectedEmployee}
          setSelectedEmployee={this.setSelectedEmployee}
          setEmployee={ this.setEmployee}/>
        <EmployeeModalProfile
        />
      </>
    );
  }
}

export { ContextList, ContextProvider };

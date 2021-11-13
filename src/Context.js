import React, { Component } from "react";
import ComChien from "./Assets/ComChien.jpg";
import promo from "./Assets/pro2.png"
const ContextList = React.createContext();

class ContextProvider extends Component {
  state = {
    oList: [],
    eList: [],
    Focus: {},
    Cart: [],
    Food: [],
    ModalVisible: -1,
    User: "",
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
  //Lay du lieu trong set
  setProduct = () => {
    this.setState(() => {
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
        Cart: [
          { name: "Mi xao hai san", price: 30000, quantity: 2 },
          { name: "Com chien duong chau", price: 40000, quantity: 1 },
          { name: "Mi y sot bo", price: 50000, quantity: 2 },
        ],
        foods: [
          {
            id: 1,
            name: "Cơm chiên dương châu",
            price: 40000,
            img: ComChien,
          },
          { id: 2, name: "Cơm sườn", price: 30000, img: ComChien },
          { id: 3, name: "Mì ý sốt bò", price: 50000, img: ComChien },
          { id: 4, name: "com chien hai san", price: 50000, img: ComChien },
          {
            id: 5,
            name: "Cơm chiên dương châu",
            price: 40000,
            img: ComChien,
          },
          { id: 6, name: "Cơm sườn", price: 30000, img: ComChien },
          { id: 7, name: "Mì ý sốt bò", price: 50000, img: ComChien },
          { id: 8, name: "com chien hai san", price: 50000, img: ComChien },
        ],
        topfoods: [
          {
            id: 1,
            name: "Cơm chiên dương châu",
            price: 40000,
            img: ComChien,
          },
          { id: 2, name: "Cơm sườn", price: 30000, img: ComChien },
          { id: 3, name: "Mì ý sốt bò", price: 50000, img: ComChien },
          { id: 4, name: "com chien hai san", price: 50000, img: ComChien },
          { id: 5, name: "com chien hai san", price: 50000, img: ComChien },
          { id: 6, name: "Cơm chiên dương châu", price: 40000, img: ComChien },
          { id: 7, name: "Cơm sườn", price: 30000, img: ComChien },
          { id: 8, name: "Mì ý sốt bò", price: 50000, img: ComChien },
          { id: 9, name: "com chien hai san", price: 50000, img: ComChien },
          { id: 10, name: "com chien hai san", price: 50000, img: ComChien },
        ],
        promotionfoods: [
          { id: 1, img: promo },
        //   { id: 2, img: promo },
        ],
      };
    });
  };
  componentDidMount = () => {
    this.setProduct();
  };

  getList(id) {
    console.log(id);
    const item = this.state.eList.find((e) => {
      return e.id === id;
    });
    return item;
  }

  openModal = (x, y) => {
    const fc = this.getList(y);
    this.setState(() => {
      return { ModalVisible: x, Focus: fc };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { ModalVisible: -1 };
    });
  };

  render() {
    return (
      <ContextList.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          SetUser: this.SetUser,
        }}
      >
        {this.props.children}
      </ContextList.Provider>
    );
  }
}

export { ContextList, ContextProvider };

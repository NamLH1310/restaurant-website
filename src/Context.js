import React, { Component } from 'react'

const ContextList = React.createContext()

class ContextProvider extends Component {
	state = {
		oList: [],
		eList: [],
		Focus: {},
		Cart: [],
		Food: [],
		ModalVisible: -1,
		User: '',

	}

	SetUser = (Name, Pass) => {
		switch (Name) {
			case "Employee":
				if (Pass === "123456") this.setState(() => {
					return { User: "Employee" }
				})
				return true;
			//break;
			case "Employer":
				if (Pass === "654321") this.setState(() => {
					return this.setState(() => {
						return { User: "Employer" }
					})
				})
				return true;
			//break;
			default:
				return false;
		}

	}
	//Lay du lieu trong set 
	setProduct = () => {
		this.setState(() => {
			return {
				eList: [
					{ id: 1, name: 'jack', pNumber: '030321316', shift: [1, 2] },
					{ id: 2, name: 'john', pNumber: '030321316', shift: [1, 2] },
					{ id: 3, name: 'jim', pNumber: '030321316', shift: [1, 2] },
					{ id: 4, name: 'jill', pNumber: '030321316', shift: [1, 2] }
				],
				oList: [
					{ id: 5465465, time: '24/05/1989', name: 'jack', cost: 10000, pNumber: '02315654' },
					{ id: 5465485, time: '24/05/1989', name: 'jack', cost: 10000, pNumber: '02315654' },
					{ id: 5468465, time: '24/05/1989', name: 'jack', cost: 10000, pNumber: '02315654' },
					{ id: 4465465, time: '24/05/1989', name: 'jack', cost: 10000, pNumber: '02315654' }
				],
				Cart: [
					{ name: 'Mi xao hai san', price: 30000, quantity: 2 },
					{ name: 'Com chien duong chau', price: 40000, quantity: 1 },
					{ name: 'Mi y sot bo', price: 50000, quantity: 2 }
				],
				foods: [
					{ id: 1, name: 'Cơm chiên dương châu', price: 40000, category: 'Cơm', img: "./../Assets/ComChien" },
					{ id: 2, name: 'Cơm sườn', price: 30000, category: 'Cơm', img: "./../Assets/ComSuon" },
					{ id: 3, name: 'Mì ý sốt bò', price: 50000, category: 'Bún & Mì', img: "./../Assets/My_Y" },
					{ id: 4, name: 'Cơm chiên hải sản', price: 50000, category: 'Cơm', img: "" },
					{ id: 5, name: 'Bánh su kem', price: 20000, category:'Bánh', img:""},
					{ id: 6, name: 'Bánh trà xanh', price: 25000, category:'Bánh', img:""},
					{ id: 7, name: 'Sườn nướng sa tế', price: 60000, category:'Món nướng', img:""},
					{ id: 8, name: 'Cam vắt', price: 30000, category:'Thức uống', img:""},
					{ id: 9, name: 'Dâu tây', price: 35000, category:'Trái cây', img:""},
					{ id: 10, name: 'Combo Burger & Pepsi',price: 70000, category: 'Combo', img:""},
					{ id: 11, name: 'Bánh tráng nướng',price: 10000, category:'Ăn vặt', img:""}
				],
				categories: [
					{ id: 1, name: 'Cơm', icon: "fas fa-concierge-bell" },
					{ id: 2, name: 'Bún & Mì', icon: "fas fa-bacon" },
					{ id: 3, name: 'Ăn vặt', icon: "fas fa-cookie" },
					{ id: 4, name: 'Món nướng', icon: "fas fa-hotdog" },
					{ id: 5, name: 'Thức uống', icon: "fas fa-cocktail" },
					{ id: 6, name: 'Trái cây', icon: "fas fa-apple-alt" },
					{ id: 7, name: 'Bánh', icon: "fas fa-birthday-cake" },
					{ id: 8, name: 'Combo', icon: "fas fa-gifts" }
				]
			}
		})
	}
	componentDidMount = () => {
		this.setProduct()
	}

	getList(id) {
		console.log(id)
		const item = this.state.eList.find(e => { return e.id === id })
		return item
	}

	openModal = (x, y) => {
		const fc = this.getList(y)
		this.setState(() => { return { ModalVisible: x, Focus: fc } })

	}

	closeModal = () => {
		this.setState(() => { return { ModalVisible: -1 } })
	}

	render() {
		return (
			<ContextList.Provider
				value={{
					...this.state,
					openModal: this.openModal,
					SetUser: this.SetUser,
				}}>
				{this.props.children}
			</ContextList.Provider>
		)
	}
}


export { ContextList, ContextProvider }
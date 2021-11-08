
import React, { Component } from 'react'

const ContextList=React.createContext()

class ContextProvider extends Component {
	state = {
		oList:[],
		eList: [],
		Focus: {},
		Cart: [],
		ModalVisible: -1,
		User: '',
	
	}
	
	SetUser = (Name, Pass) => {
		switch (Name) {
			case "Employee":
				if (Pass === "123456") this.setState(() => {
					return {User:"Employee"}
				})
				return true;
				//break;
			case "Employer":
				if (Pass === "654321") this.setState(() => {
					return { User: "Employer" }
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
					{ name: 'Mi xao hai san', price: 30000},
					{ name: 'Com chien duong chau' , price: 40000},
					{ name: 'My y sot bo', price: 50000}
				],
				
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
		const fc=this.getList(y)
		this.setState(() => { return { ModalVisible: x, Focus: fc } })

	}
	
	closeModal = ()=>{
		this.setState(()=>{return {ModalVisible:-1}})
	}
	logOut = () => {
		this.setState(() => { return { User: '' } })
		console.log(this.User)
	}
	
	render() {
		return (
			<ContextList.Provider
				value={{
					...this.state,
					openModal: this.openModal,
					SetUser: this.SetUser,
					logOut: this.logOut,
					
				}}>
				{this.props.children}
			</ContextList.Provider>
		)
	}
}


export {ContextList,ContextProvider}
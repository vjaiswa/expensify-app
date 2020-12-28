import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description :"",
            amount:props.expense ? (props.expense.amount / 100).toString() :"",
            note:props.expense ? props.expense.note :"",
            createdAt:props.expense ? moment(props.expense.createdAt) :moment(),
            calandarFocused : false,
            error:""
        }
    }
    

    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(() =>({description}))
    }

    onDateChange = (createdAt) =>{
        this.setState(()=> ({createdAt}))
    }

    onFocusChange = ({focused}) =>{
        this.setState(() =>({calandarFocused:focused}))
    }
    
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(() =>({note}))
    }

    onAmountChange = (e) =>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() =>({amount}))
        }    
    }

    onSubmit = (e) =>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error:"Description and amount is manadatory!"}))
        }else{
            this.setState(() => ({error:""}))
            this.props.onFormSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,2)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.onSubmit}>
                    {this.state.error != "" &&  <p>{this.state.error}</p>}
                    <input 
                        type = "text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder = "Enter amount here"
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calandarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder = "Please provide a note here (optional)"
                        value = {this.state.note}
                        onChange = {this.onNoteChange}
                    >
                    </textarea>
                   <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
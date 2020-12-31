import moment from 'moment'

export default (expenses,{text, sortBy, startDate,endDate}) =>{
    return expenses.filter((expense) =>{
        const createdDateMoment = moment(expense.createdAt)
        const startDatematch = startDate ? startDate.isSameOrBefore(createdDateMoment,'day') :true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdDateMoment,'day') :true;
        let textMatch = true;

        if(expense.description.toLowerCase().indexOf(text.toLowerCase()) <= -1){
            textMatch = false
        }

        if(startDatematch && endDateMatch && textMatch){
            return expense
        }
    }).sort((a,b) =>{
        if(sortBy == "date"){
            return a.createdAt < b.createdAt ? 1 : -1 
        }else if(sortBy = "amount"){
            return a.amount < b.amount ? 1 : -1
        }
    })
    
}


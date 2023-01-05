import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
    console.log(props);
    const exspenseTitle = props.title
  
    const expenseAmout = props.amout
    return (
     <div className='expense-item'>
       <ExpenseDate date={props.date}/>
        <h2 className='expense-item__description'>{exspenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmout}</div>
    </div>
    );
};
export default ExpenseItem
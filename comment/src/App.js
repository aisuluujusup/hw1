// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Car Insuranse',
      date: new Date(2022, 1, 25),
      prise: 4,
    },
    {
      id: 'el2',
      title: 'Tualet paper',
      date: new Date(2022, 1, 25),
      prise: 200,
    },
    {
      id: 'el3',
      title: 'lipstic',
      date: new Date(2023, 6, 12),
      prise: 150,
    },
    
  ]
  return (
    <div>
      <Expenses expense = {expenses}/>
    </div>
  ); 
}

export default App;


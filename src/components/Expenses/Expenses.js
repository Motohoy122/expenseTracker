import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import './ExpensesFilter';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedFilterYear) => {
        setFilteredYear(selectedFilterYear);
    };

    const filteredExpenses = props.items.filter(expense => (
        expense.date.getFullYear().toString() === filteredYear
    ));

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilterYear={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const yearSelectHandler = (event) => {
        props.onChangeFilter(event.target.value);       // forwarding or lifting
    };

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearSelectHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

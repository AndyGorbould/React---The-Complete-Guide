const Form = (props) => {
    const submitHandler = (event) => {
        event.preventDefault(); // page does not get reloaded
        console.log('submit handler')
    };

    const resetHandler = () => {
        console.log('reset handler')
    };
    
    const inputChangetHandler = (input, value) => {
        console.log('change handler')
    };
    
    return (
    <form onSubmit={submitHandler} className="form">
        <div className="input-group">
            <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
                onChange={(event) =>
                    inputChangetHandler('current-savings', event.target.value)
                }
                type="number"
                id="current-savings"
            />
            </p>
            <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
                onChange={(event) =>
                    inputChangetHandler('yearly-contribution', event.target.value)
                }
                type="number"
                id="yearly-contribution"
            />
            </p>
        </div>
        <div className="input-group">
            <p>
            <label htmlFor="expected-return">
                Expected Interest (%, per year)
            </label>
            <input
                onChange={(event) =>
                    inputChangetHandler('expected-return', event.target.value)
                }
                type="number"
                id="expected-return"
            />
            </p>
            <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
                onChange={(event) =>
                    inputChangetHandler('duration', event.target.value)
                }
                type="number"
                id="duration"
            />
            </p>
        </div>
        <p className="actions">
            <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
            </button>
            <button type="submit" className="button">
            Calculate
            </button>
        </p>
    </form>
    )
}

export default Form;
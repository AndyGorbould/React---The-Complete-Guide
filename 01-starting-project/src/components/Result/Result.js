const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

const Result = (props) => {

    return (
    /* Todo: Show below table conditionally (only once result data is available) */
    /* Show fallback text if no data is available */

    <table className="result">
    <thead>
        <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
        </tr>
    </thead>
    <tbody>
        {props.data.map((yearData) => (
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
            </tr>
        ))}
        
    </tbody>
    </table>
    )
}

export default Result;
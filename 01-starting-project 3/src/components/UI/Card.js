import classes from './Card.module.css';    // CSS Modules can have any name
// import iAmAStyle from './Card.module.css';    // this was to test the commented div below

const Card = (props) => {
    return (
        <div className={classes.card}>
        {/* <div className={iAmAStyle.card}> */}
            {props.children}
        </div>
    )
}

export default Card;
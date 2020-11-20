const Button = (props) => {
    const handleChange = (e) => {
        props.change(props.value + e.target.value);
    }
    return (
        <button 
        type="button" 
        id={ props.num } 
        value={ props.num } 
        onClick={ handleChange } 
        className={ `cell ${ props.classy } text-center` } key={ props.keys }>{ props.num }</button>
    );
}

export default Button;
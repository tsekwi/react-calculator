const Button = (props) => {
    const handleChange = (e) => {
        switch (props.num) {
            case 'C':
                props.change('');
                break;
            case 'CE':
                props.change(props.value.slice(0,-1));
                break;
            default:
                props.change(props.value + e.target.value);
                break;
        }
    }
    if (props.num !== '=') {
        return (
            <button 
            type="button" 
            id={ props.num } 
            value={ props.num } 
            onClick={ handleChange } 
            className="button text-center" key={ props.keys }>{ props.num }</button>
        );
    } 
    else return <button className="button text-center" type="submit" key="submit">=</button>;
}

export default Button;
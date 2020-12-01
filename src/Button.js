import styles from './Button.module.css';

const Button = ({ num, value, change, classy, keys }) => {
    const handleChange = (e) => {
        switch (num) {
            case 'C':
                change('');
                break;
            case 'CE':
                change(value.slice(0,-1));
                break;
            default:
                change(value + e.target.value);
                break;
        }
    }
    if (num !== '=') {
        return (
            <button 
            type="button" 
            id={ num } 
            value={ num } 
            onClick={ handleChange } 
            className={ styles.button + ` ${classy} text-center` } key={ keys }>{ num }</button>
        );
    } 
    else 
    return <button className={ styles.button + ` text-center ` + styles.submit } type="submit" key="submit">=</button>;
}

export default Button;
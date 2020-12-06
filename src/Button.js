import styles from './Button.module.css';

const Button = ({ num, value, change, classy, idx }) => {
    const handleChange = e => {
        switch (num) {
            case 'C':
                change('');
                break;
            case 'CE':
                change(value.slice(0,-1));
                break;
            default:
                if (e.target.value !== undefined) 
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
            className={ styles.button + ` ${classy} text-center` } key={ classy + idx }>{ num }</button>
        );
    } 
    else 
    return (
        <button className={ styles.button + ` text-center ` + styles.submit } type="submit" key={ 'group_' + idx }>=</button>
    );
}

export default Button;
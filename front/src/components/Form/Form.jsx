import { useState } from 'react';
import styles from './Form.module.css';
import { validate } from './validation';

export const Form = ({login}) => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleInputChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validate({...userData, [event.target.name]: event.target.value}
        ));
      }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }
      
  return (
    <>
      <h1 className={styles.login}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="Ingresa tu usuario" className={styles.input} value={userData.username} onChange={handleInputChange} />
            <p className={styles.err}>{errors.username}</p>
            <label className={styles.label} htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Ingresa tu contraseña" className={styles.input} value={userData.password} onChange={handleInputChange} />
            <p className={styles.err}>{errors.password}</p>
            <br/>
            <button className={styles.button} type="submit" >Ingresar</button>
          </form>
    </>
        
        
 
  )
}

import styles from './Header.module.css';
import logoToDoList from '../assets/logo_header.svg';

export function Header(){
  return(
    <header className={styles.header}>
      <img  src={logoToDoList} alt="Logotipo To do List" />
    </header>
    
  )
}
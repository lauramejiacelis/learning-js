import styles from '../styles/Card.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Card = ({url, title, status, species, location, origin}) => {
  const [color, setColor] = useState('gray')

  useEffect(()=>{
    {
      if (status === 'Alive') {
        setColor('green')
      } else if(status === 'Dead') {
        setColor('red')
      } 
    }
  },[status])
  
  return ( 
    <div className={styles.card}>
      <Image src={url} width={229} height={220} alt={`${title}`} />
      <div className={styles.cardContent}>
        <div>
          <p className={styles.title}>{title}</p>
          <div 
            style={{backgroundColor: color, 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            display: 'inline-flex'}}></div>
          <span>  {status} - {species}</span>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>Last known location: </span>
          <p className={styles.info}>{location}</p>
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>First seen in: </span>
          <p className={styles.info}>{origin}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
import styles from './weatherMainInfo.module.css'

export default function WeatherMainInfo({weather}){
    return<div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>
        <div></div>
        <div className={styles.row}>
            <div>
                <img 
                src={`http:${weather?.current.condition.icon}`} 
                width='128' 
                alt={weather?.current.condition.text}
                />
            </div>
            <div className={styles.weatherConditions}>
                <div className={styles.condition}>{weather?.current.condition.text}</div>
                <div className={styles.current}>{weather?.current.temp_c}°</div>
            </div>

        </div>

        <iframe 
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d174261.3296051588!2d${weather?.location.lon}91!3d${weather?.location.lat}4!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1652322703303!5m2!1ses!2scl`}
        width="100%" 
        height="450" 
        style={{border: 0}} 
        loading="lazy"></iframe>
    </div>
}
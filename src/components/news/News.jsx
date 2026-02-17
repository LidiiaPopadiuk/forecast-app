import x from './News.module.scss'
import imageNo from '../../img/no-image.png'

export const News = ({ petsInfo, addPage, isLoading }) => {
    return (
        <div className={x.news}>
            <div className="container">
                <h2 className={x.news__title}>Interacting with our pets</h2>
                <ul className={x.news__list}>
                    {petsInfo.map((pet, index) => {
                        return (
                            <li key={index} className={x.news__item}>
                                <a target='_blank' className={x.news__link} href={pet.url}>
                                    <img className={x.news__img} src={pet.urlToImage || imageNo} alt={pet.title} />
                                    <p className={x.news__parag}>{pet.title}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className={x.news__wrapper}>
                    <button onClick={addPage} className={x.news__btn}>{isLoading ? 'Loading...' : 'See more'}</button>
                </div>
            </div>
        </div>
    )
}
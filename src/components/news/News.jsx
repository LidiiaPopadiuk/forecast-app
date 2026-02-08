import x from './News.module.scss'

export const News = ({ petsInfo }) => {
    return (
        <div className={x.news}>
            <div className="container">
                <h2 className={x.news__title}>Interacting with our pets</h2>
                <ul className={x.news__list}>
                    {petsInfo.map((pet, index) => {
                        return (
                            <li key={index} className={x.news__item}>
                                 <img className={x.news__img} src={pet.urlToImage} alt={pet.author} />
                                <p className={x.news__parag}><a className={x.news__link} href={pet.url}>{pet.title}</a></p>
                            </li>
                        )
                    })}
                </ul>
                <div className={x.news__wrapper}>
                    <button className={x.news__btn}>See more</button>
                </div>
            </div>
        </div>
    )
}
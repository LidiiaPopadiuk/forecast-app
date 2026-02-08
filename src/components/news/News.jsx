import x from './News.module.scss'

export const News = () => {
    return (
        <div className={x.news}>
            <div className="container">
                <h2 className={x.news__title}>Interacting with our pets</h2>
                <ul className={x.news__list}>
                    <li className={x.news__item}>
                        <img src="" alt="" />
                        <p><a href=""></a></p>
                    </li>
                </ul>
                <button className={x.news__btn}>See more</button>
            </div>
        </div>
    )
}
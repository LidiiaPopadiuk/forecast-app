import x from './Gallery.module.scss'
export const Gallery = ({natureInfo}) => {
    return (
        <div className={x.gall}>
            <div className="container">
                <h2 className={x.gall__title}>Beautiful nature</h2>
                <ul>
                    {natureInfo.map(img => {
                        return (
                            <li></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
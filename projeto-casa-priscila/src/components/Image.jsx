import photo from '../assets/pri_foto.png'

export function Image() {
    return (
        <div className="image_footer">
    
            <div>
                <img src={photo} alt="Foto Autora" className="photo_author" />
            </div>

            <div>
                <p> &copy; Copyright Autora Projeto: Priscila Silva</p>
                <p>Desenvolvedora Front-End</p>
                <p>Reprograma</p>
            </div>
        </div>
    )
}
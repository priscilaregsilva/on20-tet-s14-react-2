import filmes from '../service/dados'

export const Lista = () => {
    return (
        <div>
            {
                filmes.map(item => {
                    return (
                        <div className="lista" key={item.id}>
                            <h2>{item.nome}</h2>
                            <img src={item.imagem} alt="" />
                            <p>{item.descricao}</p>
                        </div>
                    )
                }
                )
            }
        </div>

    )
}

import { useState, useEffect } from 'react'
import Axios from 'axios'

export function Repositories() {
    const [reposFromApi, setReposFromApi] = useState([])
    const [reposFromApiCopy, setReposFromApiCopy] = useState([])
    const baseURL = 'https://api.github.com/users/priscilaregsilva/repos'

    useEffect(() => {
        async function getData() {
            const response = await Axios.get(baseURL)
            setReposFromApiCopy(response.data)
            setReposFromApi(response.data)
        }
        getData()
    }, [])

    function pegaRepositoriesName(event) {
        let respositoriesName = event.target.value
        let reposFromApiFilter = reposFromApiCopy
        if(respositoriesName != "") {
            reposFromApiFilter = reposFromApiCopy.filter(v => v.name.includes(respositoriesName))
        }
        setReposFromApi(reposFromApiFilter)
    }

    console.log(reposFromApi)
    return (
        <div>
            <div>
                <input onChange={pegaRepositoriesName} />
            </div>
            {
                reposFromApi.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    )

                })
            }
        </div>
    )
}
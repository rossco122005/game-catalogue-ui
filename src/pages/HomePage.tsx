import HomePageGame from "@/components/Game/HomePageGame"
import FF7Rebirth from '../images/games/final-fantasy-7-rebirth.jpg'
import FF16 from '../images/games/final-fantasy-16.jpg'
import Frostpunk2 from '../images/games/frostpunk-2.jpg'
import Hogwarts from '../images/games/hogwarts-legacy.jpg'
import Humanity from '../images/games/humanity.jpg'
import RE4 from '../images/games/resident-evil-4.jpg'
import Robocop from '../images/games/robocop-rogue-city.jpg'
import Witcher from '../images/games/the-witcher-3.jpg'
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios'

const games = [
    {name: "Final Fantasy VII Rebirth", genre: "JRPG", image: FF7Rebirth},
    {name: "Final Fantasy XVI", genre: "JRPG", image: FF16},
    {name: "Frostpunk 2", genre: "JRPG", image: Frostpunk2},
    {name: "Hogwarts Legacy", genre: "RPG", image: Hogwarts},
    {name: "Humanity", genre: "Puzzle", image: Humanity},
    {name: "Resident Evil 4", genre: "Survival Horror", image: RE4},
    {name: "Robocop Rougue City", genre: "FPS", image: Robocop},
    {name: "The Witcher 3: Wild Hunt", genre: "RPG", image: Witcher},
]

interface Game {
    name: string
    genre: string
    image: string
}

function HomePage() {
    const {data: gamesData, isLoading} = useQuery({
        queryKey: ['games'],
        queryFn: () => axios.get('http://127.0.0.1:5000/get-games').then((res) => res.data)
    })

    if (isLoading) return 'Loading...'
    
    return (
        <div className="bg-slate-800 text-white">
            <div className="text-4xl text-center mb-4">Game Catalogue</div>
                <div className="grid grid-cols-12 gap-5">
                        {gamesData.map((game: Game, key: number) => {
                                return(
                                    <div className="col-span-3 p-5" key={key}>
                                        <HomePageGame name={game.name} genre={game.genre} image={games.find(x => x.name === game.name)?.image}/>
                                    </div>
                                )
                            }
                        )}
                </div>
        </div>
    )
}

export default HomePage
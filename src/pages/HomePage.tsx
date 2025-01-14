import HomePageGame from "@/components/Game/HomePageGame"
import FF7Rebirth from '../images/games/final-fantasy-7-rebirth.jpg'
import FF16 from '../images/games/final-fantasy-16.jpg'
import Frostpunk2 from '../images/games/frostpunk-2.jpg'
import Hogwarts from '../images/games/hogwarts-legacy.jpg'
import Humanity from '../images/games/humanity.jpg'
import RE4 from '../images/games/resident-evil-4.jpg'
import Robocop from '../images/games/robocop-rogue-city.jpg'
import Witcher from '../images/games/the-witcher-3.jpg'

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

function HomePage() {
    return (
        <div className="bg-slate-800 text-white">
            <div className="text-4xl text-center mb-4">Game Catalogue</div>
                <div className="grid grid-cols-12 gap-5">
                        {games.map((game) => {
                                return(
                                    <div className="col-span-3 p-5">
                                        <HomePageGame name={game.name} genre={game.genre} image={game.image}/>
                                    </div>
                                )
                            }
                        )}
                </div>
        </div>
    )
}

export default HomePage
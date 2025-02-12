import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

interface IGame {
    name: string
    genre: string
    image: string | undefined
}

function HomePageGame({name, genre, image}: IGame) {
    return (
        <div>
            <Card className="bg-slate-300">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{genre}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img src={image} alt={name} />
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    )
}

export default HomePageGame
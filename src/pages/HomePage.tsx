import { useState } from "react"
import { Button } from "@/components/ui/button"



function HomePage() {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count+1)
    }

    return (
        <>
            <div className='text-lg'>
                False
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="">Test</div>
                <div>Test</div>
                <div className="">Test</div>
                <div>{count}</div>
                <div className="">Test</div>
                <div>Test</div>
                <div className="">Test</div>
                <div>{count}</div>
            </div>
            <Button className='m-4' onClick={add}>Increase Count</Button>
        </>
        
    )
}

export default HomePage
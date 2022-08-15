import type { NextPage } from 'next'
import Author from '../component/Author/Author';

const Home: NextPage = () => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
            </div>
            <div className={'p-6'}>x</div>
            <div>
                <div className="text-xl font-medium text-black text p-6">ccccc</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>
    )
}

export default Home

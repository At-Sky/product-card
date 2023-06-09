import Head from 'next/head'
import {Inter, Roboto} from '@next/font/google'
import ProductsList from "@/components/ProductsList/ProductsList";

import headphone from '/public/headphone.png'
import headphoneBlue from '/public/Inkedheadphone.jpg'

import {Product} from "@/interfaces/Product";

const inter = Inter({subsets: ['latin']})

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
    const data: Product[] = [
        {
            id: 1,
            img: [headphone, headphoneBlue, headphone],
            description: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
            colors: ['#EE4444', '#3C81F6', 'black'],
            title: 'Zebronics head phone',
            price: 100,
        },
        {
            id: 2,
            img: [headphone, headphoneBlue, headphone, headphone],
            description: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
            colors: ['#EE4444', '#3C81F6', 'black', 'purple'],
            title: 'Zebronics head phone',
            price: 100,
        },
        {
            id: 3,
            img: [headphone, headphoneBlue, headphone],
            description: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
            colors: ['#EE4444', '#3C81F6', 'black', 'green'],
            title: 'Zebronics head phone',
            price: 100,
        }
    ]

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={roboto.className}>
                <ProductsList data={data}/>
            </main>
        </>
    )
}

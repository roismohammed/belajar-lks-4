import React, { useEffect, useState } from 'react'
import Guest from './layouts/Guest'
import supabase from './supabaseClient'
import { Link } from 'react-router-dom'

export default function Index() {
    const [products, setProducts] = useState([])
    const getProduct = async () => {
        const { data, error } = await supabase.from('public').select('*')
        if (error) {
            console.log(error);
        } else {
            setProducts(data)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <Guest title={'Home'} subTitle={'Halaman Home'}>
            <div className="row">
                <h1>Selamat Datang di Halaman Home</h1>
                <>
                    {products.map(product => (
                        <div className="col-md-4 shadow mt-3">
                            <Link className='text-decoration-none' to={'/detail-product/' + product.id}>
                                <div className="card" key={product.id}>
                                    {/* Photo */}
                                    <div
                                        className="img-responsive img-responsive-21x9 card-img-top"
                                        style={{ backgroundImage: "url(...)" }}
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">{product.judul}</h3>
                                        <p className="text-secondary">
                                            {product.deskripsi}
                                        </p>
                                        <p>{product.harga}</p>
                                    </div>


                                </div>
                            </Link>
                        </div>
                    ))}
                </>

            </div>
        </Guest>
    )
}

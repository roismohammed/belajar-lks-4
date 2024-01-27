import React, { useEffect, useState } from 'react'
import Guest from '../../layouts/Guest'
import supabase from '../../supabaseClient'
import { RiDeleteBack2Fill, RiEdit2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Get() {
    const [products, setProducts] = useState([])
    const getProduct = async () => {

        //perintah untuk mengambil data dari supabase
        const { data, error } = await supabase.from('public').select('*')

        //kalau ada error akan di console log errornya
        if (error) {
            console.log(error)
        } else {
            //kalau berhasil data product akan di isi dari data yang di dapat dari supabase
            setProducts(data)
            console.log(data);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

   

    return (
        <Guest>
            <div className="table-responsive">
                <table className="table table-vcenter">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Action</th>
                            <th className="w-1" />
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td className="text-secondary">{product.judul}</td>

                                <td className="text-secondary">{product.deskripsi}</td>
                                <td>
                                    <a href="#">{product.harga}</a>
                                </td>

                                <td className='d-flex gap-3'>
                                    <Link to={'/edit/' + product.id} className='btn btn-sm btn-primary'><RiEdit2Fill /></Link>
                                    <button onClick={() => handleDelete(product.id)} className='btn btn-danger btn-sm'><RiDeleteBack2Fill /></button>
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </Guest>
    )
}

import React, { useEffect, useState } from 'react'
import Guest from '../../layouts/Guest'
import { useParams } from 'react-router-dom'
import supabase from '../../supabaseClient'

export default function DetailProduct() {
    const { id } = useParams()
    const [form, setForm] = useState({
        judul: '',
        deskripsi: '',
        harga: ''
    })

    const getProduct = async () => {
        const { data, error } = await supabase.from('public').select('*').eq('id', id).single()
        if (error) {
            console.log(error);
        } else {
            setForm(data);
        }
        console.log(data);
    }


    useEffect(() => {
        getProduct()
    })
    return (
        <Guest title={'Detail'} subTitle={'Detail Product'}>
            <div className="row">
                <div className="col-md-4">
                    <div className="card p-3">
                        <h1>{form.judul}</h1>
                    </div>


                </div>
                <div className="col-md-6">
                    <p>{form.deskripsi}</p>
                    <p>{form.harga}</p>
                </div>
            </div>
        </Guest>
    )
}

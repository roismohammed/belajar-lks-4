import React, { useEffect, useState } from 'react'
import Guest from '../../layouts/Guest'
import { RiAddBoxFill, RiBook2Fill, RiMoneyDollarBoxFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import supabase from '../../supabaseClient'
import toast from 'react-hot-toast'

export default function Edit() {
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
            setForm({
                judul: data.judul,
                deskripsi: data.deskripsi,
                harga: data.harga
            })
        }

        return data
    }

    useEffect(() => {
        getProduct()
    }, [id])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form);
        const { data, error } = await supabase.from('public').update(form).select('*').eq('id',id)
        if(error){
         toast.error('Kesalahan dalam meng update product')
        }else{
           toast.success('Product berhasil di Update')
        }
    }


    return (
        <>
            <Guest title={'Edit'} subTitle={'Halaman Edit'}>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <h2 className=' bg-primary text-white p-1 rounded-2'>Edit Product</h2>
                        <div className="col-md-4">
                            <div className="input-group">
                                <div className="input-group-text"><RiAddBoxFill /></div>
                                <input type="text" className="form-control" placeholder='Tambah Product' onChange={handleChange} name='judul' value={form.judul} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <div className="input-group-text"><RiBook2Fill /></div>
                                <input type="text" className="form-control" placeholder='Deskripsi Product' onChange={handleChange} name='deskripsi' value={form.deskripsi} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="input-group">
                                <div className="input-group-text"><RiMoneyDollarBoxFill /></div>
                                <input type="text" className="form-control" placeholder='Harga Product' onChange={handleChange} name='harga' value={form.harga} />
                            </div>
                        </div>
                    </div>

                    <button type='submit' className="btn btn-primary mt-4">Update product</button>
                </form>
            </Guest>
        </>
    )
}

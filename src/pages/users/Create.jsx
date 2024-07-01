import React, { useState } from 'react'
import Guest from '../../layouts/Guest'
import { RiAddBoxFill, RiBook2Fill, RiMoneyDollarBoxFill } from 'react-icons/ri'
import supabase from '../../supabaseClient'
import toast from 'react-hot-toast'

export default function Create() {
    const [form, setForm] = useState({
        judul: '',
        deskripsi: '',
        harga: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // console.log(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        const { data, error } = await supabase.from('public').insert(form).single()
        if (error) {
            toast.error('Kesalahan dalam menambah product')
        } else {
            toast.success('Product di tambah')
            setForm({ judul: '', deskripsi: '', harga: '' })
        }
    }
    return (
        <Guest title={'Product'} subTitle={'Tambah Product'}>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <h2 className=' bg-primary xt-white p-1 rounded-2'>Tambah Product</h2>
                    <div className="col-md-4">
                        <div className="input-group">
                            <div className="input-group-text"><RiAddBoxFill /></div>
                            <input type="text" className="form-control" placeholder='Tambah Product' name='judul' onChange={handleChange} value={form.judul} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="input-group">
                            <div className="input-group-text"><RiBook2Fill /></div>
                            <input type="text" className="form-control" placeholder='Deskripsi Product' name='deskripsi' onChange={handleChange} value={form.deskripsi} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="input-group">
                            <div className="input-group-text"><RiMoneyDollarBoxFill /></div>
                            <input type="text" className="form-control" placeholder='Harga Product' name='harga' onChange={handleChange} value={form.harga} />
                        </div>
                    </div>
                </div>

                <button type='submit' className="btn btn-primary mt-4">Create-product</button>
            </form>
        </Guest>
    )
}

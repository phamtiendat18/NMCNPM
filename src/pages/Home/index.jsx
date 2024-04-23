import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { loginAtom } from '../../atoms/loginAtom'
import RootLayout from '../../components/RootLayout'
import axios from 'axios'
import { baseUrl } from '../Login'
import Film from '../../components/Film'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { adminAtom } from '../../atoms/roleAtom'

const queries = {
    page: 1,
    pageSize: 9
}

const Home = () => {
    
    const isAdmin = useRecoilValue(adminAtom)
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${baseUrl}/Phim/getAll?page=${queries?.page}&pageSize=${queries?.pageSize}`).then(res => 
        {
            const { data, status} = res
            if (+status === 200) {
                setFilms(data?.data)
                setLoading(false)
            }
        })
    }, [])
  return (
    <RootLayout>
        <div className='w-[60%] mx-auto my-[100px]'>
            <h2 className='uppercase font-bold text-2xl my-[20px]'>Phim nổi bật</h2>
            <div className=' flex flex-wrap justify-between gap-y-[20px]'>
                {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 50, }} spin /> } /> : films.map((film) => <Film film={film} key={film?.pK_iPhimID}/>)}
            </div>
        </div>
    </RootLayout>
  )
}

export default Home
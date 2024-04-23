import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../Login'
import { Pagination, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Film from '../../components/Film'
import RootLayout from '../../components/RootLayout'
import Category from '../../components/Category'
const queries = {
    page: 1,
    pageSize: 9
}
const FIlms = () => {
    const [totalItem, setTotalItem] = useState(0)
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [categoryName, setCategoryName] = useState("Tất cả các phim")

    const handleSelectPage = (value) => {
        setPage(value);
    }

    const handleGetFilmByCategory = (value) => {
        setCategoryName(value.name)
        axios.get(`${baseUrl}/Phim/getByCategory?idCategpry=${value.id}&page=${page}&pageSize=${queries?.pageSize}`).then(res => 
            {
                const { data, status} = res
                if (+status === 200) {
                    setFilms(data?.data)
                    setTotalItem(data?.totalItem)
                }
            })
    }

    useEffect(() => {
        axios.get(`${baseUrl}/Phim/getAll?page=${page}&pageSize=${queries?.pageSize}`).then(res => 
            {
                const { data, status} = res
                if (+status === 200) {
                    setFilms(data?.data)
                    setLoading(false)
                }
            })
    },[page])
    useEffect(() => {
        axios.get(`${baseUrl}/Phim/getAll`).then(res => 
            {
                const { data, status} = res
                if (+status === 200) {
                    setTotalItem(data?.totalItem)
                }
            });
            axios.get(`${baseUrl}/TheLoai/GetAll`).then(res => 
                {
                    const { data, status} = res
                    if (+status === 200) {
                        setCategories(data)
                    }
                });
    },[])
  return (
    <RootLayout>
        <div className='w-[60%] mx-auto my-[100px]'>
            <div className='flex justify-between'>
                {categories.map((categorie) => <Category key={categorie?.pK_iTheLoaiID} path={"hanh-dong"} getFilm={handleGetFilmByCategory} name={categorie?.sTenTheLoai} id={categorie?.pK_iTheLoaiID}/>)}
            </div>
            <h2 className='uppercase font-bold text-2xl my-[20px]'>{categoryName}</h2>
            <div className=' flex flex-wrap gap-x-[40px] gap-y-[40px]'>
                {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 50, }} spin /> } /> : films.map((film) => <Film film={film} key={film?.pK_iPhimID}/>)}
            </div>
            <div className='flex justify-center my-[40px]'>
                <Pagination defaultCurrent={1} pageSize={queries.pageSize} total={totalItem} onChange={handleSelectPage} />
            </div>
        </div>
    </RootLayout>
  )
}

export default FIlms
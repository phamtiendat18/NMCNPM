import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../Login'
import { Pagination, Spin, Button, Modal } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Film from '../../components/Film'
import RootLayout from '../../components/RootLayout'
import AddFilm from '../../components/AddFilm'
import ManagementTable from '../../components/ManagementTable'
import ManagementLayout from '../../components/ManagementLayout'
const queries = {
    page: 1,
    pageSize: 9
}
const FIlmManagement = () => {
    const [totalItem, setTotalItem] = useState(0)
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true)
    const [openModalAdd, setOpenModalAdd] = useState(false)
    const [page, setPage] = useState(1)

    const handleSelectPage = (value) => {
        setPage(value);
    }


    useEffect(() => {
        axios.get(`${baseUrl}/Phim/getAll?page=${page}&pageSize=${queries?.pageSize}`).then(res => 
            {
                const { data, status} = res
                if (+status === 200) {
                    setFilms(data?.data)
                    setLoading(false)
                    setTotalItem(data?.totalItem)
                }
            })
    },[page])
  return (
    <ManagementLayout>
            <div className='w-full flex flex-col justify-center p-[50px]'>
                <Button type="primary" style={{background: 'blue', width: 100}} onClick={() => setOpenModalAdd(true)}>
                    Thêm
                </Button>
                <Modal
                title={`Thêm Phim`}
                centered
                open={openModalAdd}
                onCancel={() => setOpenModalAdd(false)}
                footer=""
                width={800}
                >
                    <AddFilm />
                </Modal>
                <ManagementTable/>
            </div>
    </ManagementLayout>
  )
}

export default FIlmManagement;
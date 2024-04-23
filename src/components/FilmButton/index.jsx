import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import FilmDetail from '../FilmDetail';

const FilmButton = ({ film}) => {
    const { sAnhQuangCao, sTrailer, sTenPhim } = film;
    const [openTrailer, setOpenTrailer] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [openChart, setOpenChart] = useState(false);
  return (
    <div>
        <div className='flex items-center justify-center'>
            <Button type="primary" style={{background: 'red'}} onClick={() => setOpenTrailer(true)}>
            Trailer
            </Button>
            <Modal
            title={sTenPhim}
            centered
            open={openTrailer}
            onCancel={() => setOpenTrailer(false)}
            footer=""
            width={800}
            >
                <iframe src={sTrailer} className='w-full h-[500px]'></iframe>
            </Modal>
        </div>
        <div className='mt-[100px] bg-slate-950/40 pb-[30px]'>
            <div className='text-center py-[20px] text-md text-white font-bold'>{sTenPhim}</div>
            <div className='px-[10%] flex justify-between'>
                <Button type="primary" style={{background: 'red'}} onClick={() => setOpenDetail(true)}>
                    Chi tiết
                </Button>
                <Modal
                title={`Chi tiết phim ${sTenPhim}`}
                centered
                open={openDetail}
                onCancel={() => setOpenDetail(false)}
                footer=""
                width={800}
                >
                    <FilmDetail film={film} />
                </Modal>
                <Button type="primary" style={{background: 'red'}} onClick={() => setOpenChart(true)}>
                    Mua vé
                </Button>
                <Modal
                title={`Sơ đồ ghế ngồi phim ${sTenPhim}`}
                centered
                open={openChart}
                onCancel={() => setOpenChart(false)}
                footer=""
                width={800}
                >
                    Hiện tại đã hết vé
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default FilmButton
import { Button } from 'antd';
import React, { useCallback } from 'react'

const FilmDetail = ({ film }) => {
    const { sAnhQuangCao, sNoiDung, sTrangThai, iThoiLuong, fGia, dNgayChieu } = film;
    const convertDateToShort = useCallback(() => {
        const day = new Date(dNgayChieu);
        const newDay = day.toLocaleDateString();
        return newDay;
    }, [dNgayChieu])
  return (
    <div className='flex'>
        <div className='max-w-[40%]'>
            <img src={sAnhQuangCao} alt="" />
        </div>
        <div className='pl-[30px]'>
            <div className='mb-[10px]'><span className='font-bold'>Nội dung:</span> {sNoiDung}</div>
            <div className='mb-[10px]'><span className='font-bold'>Khởi chiếu:</span> {convertDateToShort()}</div>
            <div className='mb-[10px]'><span className='font-bold'>Thời lượng:</span> {iThoiLuong} phút</div>
            <div className='mb-[10px]'><span className='font-bold'>Trạng thái:</span> {sTrangThai}</div>
            <div className='mb-[10px]'><span className='font-bold'>Giá vé:</span> <span className='font-bold text-red-700'>{fGia} VNĐ</span></div>
        </div>
    </div>
  )
}

export default FilmDetail
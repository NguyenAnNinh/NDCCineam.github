import React from 'react'
import Booking from '../../Booking/Booking';
import './InfoHeader.scss'


export default function Danhgiaphim() {
    return (
        <div className='danhgiaphim'>
            <div className='side-left'>
                <h1>ĐÁNH GIÁ PHIM</h1>
                <div className='card-review'>
                    <img src={require('../../../Image/Header/phim-con-lac-ta-thuat-thumbnail.jpg')} alt='img' />
                    <div className='content-card-review'>
                        <h2>REVIEW PHIM CON LẮC TÀ THUẬT – THE HYPNOSIS</h2>
                        <p>Vài năm trở lại đây điện ảnh Hàn Quốc ngày càng cho ra đời nhiều bộ phim kinh dị chất lượng, và Con lắc tà thuật – The Hypnosis là tác phẩm mới...</p>
                    </div>
                </div>
                <div className='card-review'>
                    <img src={require('../../../Image/Header/phim-nguoi-nhan-ban-thumbnail.jpg')} alt='img' />
                    <div className='content-card-review'>
                        <h2>REVIEW PHIM SEOBOK (NGƯỜI NHÂN BẢN) – VÌ SAO CON NGƯỜI LUÔN SỢ HÃI TRƯỚC CÁI CHẾT?</h2>
                        <p>Nhiều tuần liền thống trị bảng xếp hạng phòng vé Hàn Quốc, Seobok (Người nhân bản) đang là tác phẩm ăn khách nhất tại xứ sở kim chi thời điểm này. Đến...</p>
                    </div>
                </div>
                <div className='card-review'>
                    <img src={require('../../../Image/Header/phim-con-lac-ta-thuat-thumbnail.jpg')} alt='img' />
                    <div className='content-card-review'>
                        <h2>REVIEW PHIM CON LẮC TÀ THUẬT – THE HYPNOSIS</h2>
                        <p>Vài năm trở lại đây điện ảnh Hàn Quốc ngày càng cho ra đời nhiều bộ phim kinh dị chất lượng, và Con lắc tà thuật – The Hypnosis là tác phẩm mới...</p>
                    </div>
                </div>
                <div className='card-review'>
                    <img src={require('../../../Image/Header/phim-nguoi-nhan-ban-thumbnail.jpg')} alt='img' />
                    <div className='content-card-review'>
                        <h2>REVIEW PHIM SEOBOK (NGƯỜI NHÂN BẢN) – VÌ SAO CON NGƯỜI LUÔN SỢ HÃI TRƯỚC CÁI CHẾT?</h2>
                        <p>Nhiều tuần liền thống trị bảng xếp hạng phòng vé Hàn Quốc, Seobok (Người nhân bản) đang là tác phẩm ăn khách nhất tại xứ sở kim chi thời điểm này. Đến...</p>
                    </div>
                </div>
                <div className='card-review'>
                    <img src={require('../../../Image/Header/phim-con-lac-ta-thuat-thumbnail.jpg')} alt='img' />
                    <div className='content-card-review'>
                        <h2>REVIEW PHIM CON LẮC TÀ THUẬT – THE HYPNOSIS</h2>
                        <p>Vài năm trở lại đây điện ảnh Hàn Quốc ngày càng cho ra đời nhiều bộ phim kinh dị chất lượng, và Con lắc tà thuật – The Hypnosis là tác phẩm mới...</p>
                    </div>
                </div>
                <div className='card-review'>
                    <img src={require('../../../Image/Header/phim-nguoi-nhan-ban-thumbnail.jpg')} alt='img' />
                    <div className='content-card-review'>
                        <h2>REVIEW PHIM SEOBOK (NGƯỜI NHÂN BẢN) – VÌ SAO CON NGƯỜI LUÔN SỢ HÃI TRƯỚC CÁI CHẾT?</h2>
                        <p>Nhiều tuần liền thống trị bảng xếp hạng phòng vé Hàn Quốc, Seobok (Người nhân bản) đang là tác phẩm ăn khách nhất tại xứ sở kim chi thời điểm này. Đến...</p>
                    </div>
                </div>
            </div>
            <div className='side-right'>
                <Booking />
            </div>
        </div>
    )
}

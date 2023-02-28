import React, { Component } from 'react'
import Booking from '../../Booking/Booking'
import './InfoFooter.scss'

export default class Huongdandatveonline extends Component {
  render() {
    return (
      <div className='huongdandatve'>
        <div className='side-left'>
          <h1>Hướng dẫn đặt vé online tại rạp NDC Cinema bằng thẻ ATM</h1>
          <p>Đến ngày 01/01/2024</p>
          <div className='img'><img width={800} src={require('../../../Image/Footer/1f46eb8e9c887ed62799.png')} alt='img' /></div>
          <p>Hướng dẫn cách đặt vé và thanh toán online rạp chiếu phim NDC Cinema nhanh chóng. Với hình thức đặt vé online này
            các bạn hoàn toàn có thể chủ động về thời gian, giúp giữ được chỗ ngồi tốt mà không phải đến quầy sớm để lấy vé.
            Hình thức đặt vé và thanh toán online này rất phù hợp cho những bạn ở xa, những bạn không có thời gian để đến quầy vé sớm,
            hoặc những bạn có thói quen thanh toán qua mạng.
          </p>
          <p>**<span className='span1'>ĐỂ LÀM THÀNH VIÊN ONLINE MUA VÉ ƯU ĐÃI: </span>`</p>
          <p>1. Tài khoản online đăng ký số điện thoại trùng với số điện thoại mà bạn đã đăng ký THẺ THÀNH VIÊN.</p>
          <p>2. Số điện thoại online của bạn <b>được xác thực</b> trong mục TÀI KHOẢN ONLINE.</p>
          <h2>BƯỚC 1: CHỌN PHIM</h2>
          <p>Các bạn vào website <a href='https://ndccinema.com'>https://ndccinema.com</a></p>
          <p>Hoặc vào ứng dụng NDC CINEMA trên điện thoại để chọn phim muốn đặt vé tại link:
            <ul>
              <li>Android: <a href='https://goo.gl/X2e873'>https://goo.gl/X2e873</a></li>
              <li>iOS: <a href='https://goo.gl/L3epjj'>https://goo.gl/L3epjj</a></li>
            </ul>
          </p>
          <h2>BƯỚC 2: CHỌN SUẤT CHIẾU BẠN MUỐN ĐẶT VÉ</h2>
          <p>Chọn suất chiếu và ngày chiếu mà bạn muốn đặt vé</p>
          <h2>BƯỚC 3: CHỌN VỊ TRÍ CHỖ NGỒI PHÙ HỢP VÀ XÁC NHẬN ĐẶT CHỖ</h2>
          <div className='img'><img width={431} src={require('../../../Image/Footer/buoc-3-chon-ghe.png')} /></div>
          <p>Nếu như bạn chưa đăng nhập vào hệ thống, thì ở bước này bạn sẽ được yêu cầu đăng nhập bằng tài khoản của bạn tại NDC Cinema.</p>
          <p>Bạn có thể đăng ký tài khoản mới, hoặc sử dụng chức năng đăng nhập đồng bộ bằng tài khoản Facebook / Google nhanh chóng, hoặc nếu
            không bạn cũng có thể điền thông tin Họ Tên, SĐT, Email để mua vé không cần tài khoản</p>
          <h2>BƯỚC 4: XÁC NHẬN THÔNG TIN VÀ CHUYỂN SANG BƯỚC THANH TOÁN</h2>
          <p>Các bạn nhớ kiểm tra lại các thông về phim, suất chiếu, ghế ngồi, và số tiền thanh toán như bên dưới. Sau đó chọn hình thức thanh
            toán thẻ / VN QRCODE hoặc Ví điện tử Momo/ ZaloPay / Shopee Pay . Nhấn vào nút Thanh Toán để tiến hành thanh toán</p>
          <p>Đừng quên đọc điều kiện thanh toán và nhấn vào nút "Tôi đã đọc và đồng ý với điều khoản thanh toán" các bạn nhé!</p>
          <p>Ngoài ra tại bước này trên ứng dụng, bạn có thể chọn thêm đồ ăn, thức uống yêu thích.</p>
          <div className='img'><img width={430} src={require('../../../Image/Footer/buoc-4-xac-nhan.jpg')} /></div>
          <h2>BƯỚC 5: ĐIỀN CÁC THÔNG TIN THANH TOÁN CẦN THIẾT</h2>
          <p>Xác nhạn thẻ và ví điện tử của bạn</p>
          <p>Sau đó click vào nút tiếp tục để hoàn tất giao dịch</p>
          <p><span className='span2'>*** Trước khi mua vé bạn cần phải đăng ký dịch vụ Internet Banking (hay Online Banking).
            Nếu chưa đăng ký bạn có thể đến ngân hàng để đăng ký trong 5 phút là có ngay tài khoản để bạn có thể thanh toán mua vé thương mại điện tử.</span></p>
          <p>Ngay lập tức màn hình hiển thị đặt vé thành công sẽ hiện ra, và có email gửi về cho bạn để bạn lưu lại thông tin vé.</p>
          <ul>
            <li>Các bạn nhớ lưu lại MÃ SỐ ĐẶT VÉ để đưa cho nhân viên quầy tiến hành in vé nhé!</li>
            <li>Trước khi mua vé online các bạn nên dành thời gian để đọc kỹ về quy định, các điều khoản giao dịch trực tuyến tại NDC Cinema: </li>
            <li><a href='dieukhoangiaodich'>https://ndccinema.com/dieu-khoan-giao-dich</a></li>
            <li>Mọi thắc mắc các bạn xin vui lòng liên hệ quầy vé để được giải đáp, hoặc qua fanpage https://facebook.com/ndccinema, hoặc tổng đài NDC Cinema 0925 566 103 or 0356 729 138</li>
          </ul>
          <p><b>Các bạn có thể tham khảo thêm hình thức thanh toán <a href='#'>PAYOO: tại cửa hàng gần nhất nếu không sử dụng thẻ ATM</a></b></p>
          <p><i>Cảm ơn các bạn đã lựa chọn NDC Cinema Hải Phòng!</i></p>
        </div>
        <div className='side-right'>
          <Booking />
          <h2>Phim đang chiếu </h2>
          <div className='showingfilm'>
            <div className='cardfilm'>
              <img width={300} src={require('../../../Image/slide/avar.png')} alt='img' />
            </div>
            <div className='cardfilm'>
              <img width={300} src={require('../../../Image/slide/avar.png')} alt='img' />
            </div>
            <div className='cardfilm'>
              <img width={300} src={require('../../../Image/slide/avar.png')} alt='img' />
            </div>
            <div className='cardfilm'>
              <img width={300} src={require('../../../Image/slide/avar.png')} alt='img' />
            </div>
            <div><a href='#'>{'<<'} Xem Thêm {'>>'}</a></div>
          </div>
        </div>
      </div>
    )
  }
}

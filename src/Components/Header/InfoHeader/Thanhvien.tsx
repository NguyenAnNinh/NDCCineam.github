import React from 'react'

export default function Thanhvien() {
  return (
    <div className='thanhvien'>
      <h1>Chương trình thành viên NDC Cinema Membership | Tích điểm và đổi thưởng</h1>
      <h2>THỂ LOẠI VÀ QUY ĐỊNH VỀ CHƯƠNG TRÌNH THÀNH VIÊN NDC CINEMA</h2>
      <h2>1. Cách đăng ký để thành khách hàng thanh viên NDC Cinema</h2>
      <ul>
        <li><span>Nơi đăng kí bắt buộc: Quầy vé NDC Cinema</span> <b><i>(LÀM THẺ HOÀN TOÀN MIỄN PHÍ)</i></b></li>
        <li>Thông tin đăng kí cần có: Họ và tên, Số điện thoại, Sos CMND, Ngày sinh</li>
        <li>1 SĐT/CMND chỉ đưng ký đywich duy nhất 1 tài khoản/1 thẻ thành với mã số duy nhất</li>
        <li>Tài khoản được quyền sử dụng ngay</li>
        <li>Trong trường hợp mất thẻ thành việc mất thẻ cần mang CMND đên quày để làm lại thẻ</li>
      </ul>
      <p><b>ĐỂ KÍCH HOẠT THẺ THÀNH VIÊN ONLINE VÀ MUA VÉ VỚI GIÁ ƯU ĐÃI:</b></p>
      <p>- Tài khoản online đăng ký số điện thoại <b>trùng</b> với số điện thoại bạn đăng ký THẺ THÀNH VIÊN (trùng cả về đầu số)</p>
      <p>- Số điện thoại của tài khoản online phải <b>được xác nhận</b> trong mục TÀI KHOẢN online</p>
      <h2>2. Hướng đẫn thể lệ tính điểm</h2>
      <img src={require('../../../Image/Header/tichdiem-3112-02-1.png')} />
      <p><b>1.000 đồng = 1 điểm</b></p>
      <p>Bạn có thể đẽ dàng kiểm tra điểm của mình trên Website NDC Cinema hoặc Ứng dụng NDC Cinema trên điện thoại (Với điều kiện phải thực hiện kích hoạt thành viên online)</p>
      <ul><li>NDC Member (điểm tích lũy từ 0 - 3499 diểm)</li></ul>
      <p>Khách đăng kí mới hoàn tất thanh toán đầu tiên cộng ngay 100 điểm</p>
      <p>Cộng điểm đổi thưởng thêm 3% số tiền chi tiêu cho bắp nước và 5% số tiền chi tiêu cho vé</p>
      <ul><li>NDC Vip (điểm tích lũy từ 3500 - 7999 điểm)</li></ul>
      <p>Khách hàng lên thẻ hạng VIP được tặng 1 combo (1 nước ngọt + 1 bắp ngọt) và 3 vé xem phim 2D.</p>
      <p>Cộng điểm đổi thưởng thêm 3% số tiền chi tiêu cho bắp nước và 75 số tiền chi tiêu cho vé</p>
      <ul><li>NDC Diamound (điểm tích lũy từ 8000 điểm trở lên)</li></ul>
      <p>Khchs hàng lên hạng Diamond đưuọc tặng 2 combo [2x(1 nước ngọt + 1 bắp ngọt)] và 5 vé xem phim 2D.</p>
      <p>Cộng điểm đổi thưởng thêm 5% chi tiêu cho bắp nước và 10% số tiền chi tiêu cho vé</p>
      <p><b>Khách hàng thành viên được tự động nâng hạng khi đủ điểm lên hạng và không cần phải xét duyệt vào cuối năm như các rạp khác.
        Khách hàng cần đến quầy đổi thẻ theo cấp hạng mới để được nhận quà trước khi số điểm reset vào cuối năm.</b></p>
      <p>Hạng thẻ của năm tiếp theo sẽ tính dựa trên điểm tích lũy năm nay (tính tại thời điểm 31/12 hàng năm)</p>
      <h2>3. Quà sinh nhật thành viên</h2>
      <p><b>Thay lời chúc mừng đến quý khách hàng, NDC Cinema xin dành tặng bạn món quà nhân dịp sinh nhật của mình</b></p>
      <ul><li>Quà tặng</li></ul>
      <p>- NDC Menmber: 1 combo (1 bước ngot + 1 bắp ngọt)</p>
      <p>- NDC Vip: 1 combo (2 nước ngọt + 1 báp ngọt) và một vé xem phim 2D</p>
      <p>- NDC Diamond: 1 combo (2 nước ngọt + 1 bắp ngọt) và 2 vé xem phim 2D</p>
      <ul>
        <li>Thời gian nhận quà sinh nhật dành cho khách hàng: Trong vong 10 ngày kể từ ngày sinh nhật.</li>
        <li>Khách hàng thành viên nhận quà sinh nhật trực tiếp tại rạp</li>
        <li>Chỉ những thành viên có ít hơn 1 lần giao dịch trọng năm và trước thời điểm nhận quà mới nhận được phần quà sinh nhật từ NDC Cinema</li>
        <li>Khách hàng vui lòng xuất trình giấy tờ tùy thân (CMND/...) tương ứng với tài khoản thành viên nhận quà</li>
        <li>Quà sinh nhật có giá trị sử dụng 1 tháng kể từ ngày sinh nhật</li>
        <li>Nếu có nhu cầu đổi vị bắp, bạn vui lòng thanh toán thêm khoản phụ phí</li>
        <li>Phần quà sinh nhật không có giá trị quy đổi thành tiền mặt</li>
      </ul>
      <h2>4. Điều kiện sử dụng điểm</h2>
      <img src={require('../../../Image/Header/tichdiem-3112-01.png')} />
      <ul>
        <li>Điểm tích lũy là điểm dùng để xét cấp bậc hạng thẻ. Điểm thưởng là điểm dùng để đổi các phần quà tương ứng với số điểm.</li>
        <li>Khi đổi thưởng, điểm tích lũy sẽ vẫn giữ nguyên, chỉ có điểm thưởng bị trừ đi</li>
        <li>Điểm thành viên bao gồm điểm tích lũy và điểm thưởng chỉ cso giá trị sử dụng trong năm. Toàn bộ điểm sẽ được reset về 0 vào 23h59' ngày 31/12 hàng năm</li>
        <li>Khách hàng thành viên có thể sử dụng điểm thưởng để đổi các phần quà tương ứng như sau:
          <ul className='ul2'>
            <li>450 điểm = 1 nước aquafina</li>
            <li>500 điểm = 1 nước ngọt</li>
            <li>550 điểm = 1 nước ngọt lớn</li>
            <li>700 điểm = 1 bắp ngọt</li>
            <li>800 điểm = 1 bắp phô mai/ caramal</li>
            <li>1100 điểm = 1 nước ngọt + 1 bắp ngọt</li>
            <li>1150 điểm = 1 nước ngọt lớn + 1 bắp ngọt</li>
            <li>1200 điểm = 1 nước ngọt + 1 bắp phô mai/ caramel</li>
            <li>1250 điểm = 1 nước ngọt lớn + 1 bắp phô mai/ caramel</li>
            <li>1500 điểm = 2 nước ngọt + 1 bắp ngọt</li>
            <li>1600 điểm = 2 nước ngọt + 1 bắp phô mai/ caramel HOẶC 2 nước ngọt lớn + 1 bắp ngọt</li>
            <li>1700 điểm = 2 nước ngọt lớn + 1 bắp phô mai/ caramel</li>
            <li><b>1000 điểm = 1 vé 2D</b></li>
            <li><b>1200 điểm = 1 vé 3D</b></li>
          </ul>
        </li>
        <li>Quà tặng quy đổi từ điểm thưởng chỉ có giá trị sử dụng trong ngày thực hiện đổi </li>
        <li>Quà tặng đưuọc thay đổi tại quầy hoặc đổi online ngay trong giao dịch</li>
        <li>Không quy đổi quà ra tiền mặt hoặc chuyển nhượng sang tài khoản khác</li>
        <li>Thành viên phải cung cấp CMND hoặc thẻ thành viên để nhận quà</li>
        <li>Thông tin chương trình, quà thưởng và các ưu đãi cho thành viên có thể thay đổi và cập nhật thường xuyên mà không báo trước</li>
      </ul>
    </div>
  )
}

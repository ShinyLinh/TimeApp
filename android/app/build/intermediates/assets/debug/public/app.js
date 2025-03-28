import { Share } from '@capacitor/share';

const showTimeBtn = document.getElementById('showTimeBtn');
const timeDisplay = document.getElementById('timeDisplay');
const shareBtn = document.getElementById('shareBtn');

// Hàm lấy thời gian hiện tại
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

// Hiển thị thời gian lên màn hình khi nhấn nút
showTimeBtn.addEventListener('click', () => {
  const currentTime = getCurrentTime();
  timeDisplay.textContent = currentTime;

  // Hiển thị thông báo cục bộ
  LocalNotifications.requestPermission().then(() => {
    LocalNotifications.schedule({
      notifications: [
        {
          title: 'Thời gian hiện tại',
          body: currentTime,
          id: 1,
          schedule: { at: new Date(Date.now()) },
          sound: null,
        },
      ],
    });
  });
});

// Chia sẻ thời gian hiện tại khi nhấn nút chia sẻ
shareBtn.addEventListener('click', () => {
  const currentTime = getCurrentTime();
  Share.share({
      title: 'Chia sẻ thời gian',
      text: `Thời gian hiện tại là: ${currentTime}`,
      url: '',  // URL có thể để trống nếu không chia sẻ liên kết
      dialogTitle: 'Chia sẻ thời gian'
    }).then(() => {
      console.log('Chia sẻ thành công!');
    }).catch((error) => {
      console.error('Lỗi chia sẻ: ', error); // In ra lỗi nếu không thành công
    });
  });

// (Bonus) Chụp màn hình ứng dụng
async function takeScreenshot() {
  const result = await Screenshot.capture();
  console.log(result);
}


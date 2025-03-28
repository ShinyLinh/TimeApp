# Ứng dụng Hiển thị Thời gian

Ứng dụng này hiển thị thời gian hiện tại, cho phép chia sẻ thời gian qua tính năng chia sẻ của hệ điều hành và chụp màn hình.

## Yêu cầu
- **Capacitor** 
- **Android Studio** hoặc **Xcode** (Để chạy trên thiết bị Android/iOS)

## Cài đặt

1. **Tải xuống dự án**:
Link Github: https://github.com/ShinyLinh/TimeApp.git

2. Cài đặt
  *phụ thuộc: npm install
  *Cài đặt Capacitor và các plugin: npx cap sync ( để cài đặt các plugin và cấu hình cho Capacitor)
  *Cài đặt Capacitor Share Plugin: npm install @capacitor/share
                                   npx cap sync
  *Cài đặt Capacitor CameraAPI Plugin: npm install @capacitor/camera
                                       npx cap sync

3. Chạy ứng dụng
   * Mở ứng dụng Android Studio : npx cap open android
   * Chạy ứng dựng trên trên điện thoại thật hoặc giả lập: npx cap run android
     ![image](https://github.com/user-attachments/assets/628355ee-ae3d-4f05-a96c-92c78ab13a22)
     
4. Các tính năng
   Xem thời gian hiện tại: Nhấn nút để hiển thị giờ, phút, giây.
   Chia sẻ thời gian: Chia sẻ thời gian hiện tại qua các ứng dụng hỗ trợ chia sẻ.
     ![image](https://github.com/user-attachments/assets/8cb448e3-ddfb-4bd4-a741-f97db0420b17)

   Chụp màn hình: Lưu ảnh màn hình hiện tại của ứng dụng.




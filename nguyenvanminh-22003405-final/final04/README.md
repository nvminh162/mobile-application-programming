App: Training Diary
•	Có tiêu đề cố định “Training Diary” ở đầu ứng dụng và dùng SafeAreaProvider.
•	Sử dụng Redux để lưu lịch tập luyện ngay trong thiết bị.

Workout gồm các trường:
•	name (tên bài tập)
•	duration (thời lượng phút)
•	category (ví dụ: Cardio, Strength, Yoga)
•	completed (đã hoàn thành hay chưa)

Yêu cầu nhóm màn hình 1
•	Màn hình giới thiệu ứng dụng hiển thị: Họ tên sinh viên – Mã số – Lớp.
•	Có nút chuyển sang nhóm màn hình 2.

Yêu cầu nhóm màn hình 2
•	Gồm 3 màn hình con:
	o	Danh sách workout
	o	Biểu mẫu thêm / cập nhật workout
	o	Đồng bộ - Sync
•	Điều hướng 3 màn hình con bằng Tab Navigation.
•	Cho phép thêm / sửa / xóa mềm workout.
•	Khi xóa workout phải confirm người dùng.
•	Tìm kiếm theo name, lọc theo category tại màn hình danh sách.
•	Ở màn hình đồng bộ cho người dùng nhập URL MockAPI (Tạo API cho phù hợp với yêu cầu bài).  
	o	Chức năng Đẩy thông tin: xóa hết dữ liệu trong API URL đẩy cái mới lên
	o	Chức năng Lấy thông tin: lấy thông tin từ API URL đã nhập xuống
•	Bắt buộc dùng:
	o	useMemo để tối ưu render danh sách
	o	useFocusEffect để reload dữ liệu khi màn hình được mount lại

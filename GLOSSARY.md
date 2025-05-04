# 📚 **Glossary — Hệ Thống Quản Lý Kênh YouTube**

> Tài liệu này tổng hợp các thuật ngữ và thực thể chính được sử dụng trong hệ thống quản lý content, media, marketing, thiết kế và cộng đồng cho kênh YouTube chuyên nghiệp.

---

## 🔑 **Thuật Ngữ & Định Nghĩa Chung**

| Thuật Ngữ             | Định Nghĩa                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| **Bounded Context**   | Một phạm vi logic riêng biệt trong hệ thống, nơi các thực thể và luồng dữ liệu có nghĩa rõ ràng.        |
| **Entity**            | Thực thể quan trọng được hệ thống quản lý (ví dụ: `ContentIdea`, `Campaign`, `EditedVideo`).            |
| **Integration Event** | Sự kiện được gửi giữa các context để đồng bộ thông tin (ví dụ: gửi `EditedVideo` sang Marketing).       |
| **Webhook**           | Cơ chế kỹ thuật để gửi thông báo theo thời gian thực giữa các hệ thống hoặc context.                    |
| **MVP Roadmap**       | Lộ trình phát triển theo từng sprint để xây dựng phiên bản tối thiểu khả dụng (Minimum Viable Product). |

---

## 📂 **Theo Bounded Context**

### 1. **Content Planning Context**

| Thuật Ngữ            | Định Nghĩa                                                                    |
| -------------------- | ----------------------------------------------------------------------------- |
| `ContentIdea`        | Ý tưởng video ban đầu: bao gồm mô tả, chủ đề, mục tiêu, người phụ trách.      |
| `Script`             | Kịch bản chi tiết cho video, có thể gắn với `ContentIdea`.                    |
| `ProductionTask`     | Các tác vụ cụ thể như quay, dựng, review – dùng để theo dõi tiến độ sản xuất. |
| `PublishingSchedule` | Lịch đăng video cụ thể, gồm ngày, format, metadata.                           |

---

### 2. **Media Production Context**

| Thuật Ngữ          | Định Nghĩa                                                                   |
| ------------------ | ---------------------------------------------------------------------------- |
| `RawFootage`       | File video gốc được quay, kèm metadata (ngày quay, người quay, máy quay...). |
| `EditedVideo`      | Video đã qua xử lý dựng, có thể gồm nhiều bản chỉnh sửa (versioning).        |
| `ProductionAsset`  | Asset phụ trợ như âm thanh, nhạc nền, hiệu ứng hình ảnh…                     |
| `EditorAssignment` | Giao task dựng cho editor cụ thể với deadline và yêu cầu.                    |

---

### 3. **Design & Branding Context**

| Thuật Ngữ         | Định Nghĩa                                                                 |
| ----------------- | -------------------------------------------------------------------------- |
| `ThumbnailDesign` | Thiết kế ảnh đại diện (thumbnail) cho video, có thể có nhiều phiên bản.    |
| `BrandAsset`      | Tài sản thương hiệu như logo, intro animation, watermark…                  |
| `DesignTemplate`  | Mẫu thiết kế định sẵn giúp tạo asset nhanh, đồng bộ nhận diện thương hiệu. |

---

### 4. **Channel Growth & Marketing Context**

| Thuật Ngữ             | Định Nghĩa                                                                              |
| --------------------- | --------------------------------------------------------------------------------------- |
| `Campaign`            | Một chiến dịch quảng bá nội dung, có đối tượng mục tiêu, ngân sách, thời gian.          |
| `KeywordOptimization` | Tối ưu từ khóa để tăng khả năng tìm kiếm video, dựa vào xu hướng và dữ liệu thị trường. |
| `VideoPerformance`    | Dữ liệu hiệu suất video: lượt xem, CTR, watch time, retention…                          |
| `AudienceSegment`     | Phân khúc người xem dựa trên hành vi, nhân khẩu học hoặc sở thích.                      |

---

### 5. **Community & Partnership Context**

| Thuật Ngữ           | Định Nghĩa                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `CommentThread`     | Chuỗi bình luận từ YouTube hoặc các nền tảng khác, bao gồm nội dung, người gửi, thời gian. |
| `FanInteractionLog` | Lịch sử tương tác quan trọng với fan: inbox, sự kiện đặc biệt, yêu cầu cá nhân hóa.        |
| `SponsorshipDeal`   | Giao dịch tài trợ: thương hiệu, điều khoản, mốc thời gian, ngân sách.                      |
| `PartnerCompany`    | Đối tác thương hiệu: thông tin ngành hàng, lịch sử hợp tác, liên kết deal.                 |

---

### 6. **Operations & HR Context**

| Thuật Ngữ         | Định Nghĩa                                                                 |
| ----------------- | -------------------------------------------------------------------------- |
| `TeamMember`      | Thành viên trong team, kèm thông tin liên hệ, vai trò, team.               |
| `Contract`        | Hợp đồng làm việc giữa team và nhân sự, có thể là part-time, freelance…    |
| `PaymentSchedule` | Lịch thanh toán theo tháng, task hoặc milestone.                           |
| `WorkCalendar`    | Lịch làm việc tổng quát cho các thành viên, gồm ngày nghỉ, lịch quay/dựng… |

---

## 🔑 **A. Thuật Ngữ Kiến Trúc Hệ Thống**

| Thuật Ngữ             | Định Nghĩa                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **Bounded Context**   | Phân vùng logic độc lập, mỗi context xử lý các nghiệp vụ riêng và có schema riêng.             |
| **Integration Event** | Sự kiện được gửi giữa các context để đồng bộ dữ liệu hoặc trigger quy trình liên quan.         |
| **Webhook**           | Endpoint nhận thông báo thời gian thực từ hệ thống khác (dùng để trigger update giữa context). |
| **Sprint**            | Một chu kỳ phát triển ngắn (1–2 tuần) trong lộ trình Agile nhằm hoàn thiện 1 nhóm tính năng.   |
| **MVP**               | Minimum Viable Product – phiên bản tối thiểu để vận hành được và kiểm chứng giá trị sản phẩm.  |

---

## 👥 **B. Vai Trò & Stakeholders**

| Vai trò               | Mô tả                                                           |
| --------------------- | --------------------------------------------------------------- |
| **Content Planner**   | Người lên ý tưởng nội dung, lập kế hoạch và lịch đăng video.    |
| **Scriptwriter**      | Người viết kịch bản cho từng video theo định hướng của Planner. |
| **PM / Producer**     | Quản lý tiến độ sản xuất, giao task và đảm bảo tiến độ/đầu ra.  |
| **Editor**            | Người dựng video từ file thô, chỉnh sửa, xuất bản bản final.    |
| **Cameraman**         | Người quay video theo kế hoạch được giao.                       |
| **Director**          | Giám sát chất lượng video, duyệt sản phẩm dựng.                 |
| **Designer**          | Người thiết kế các asset hình ảnh (thumbnail, logo, intro).     |
| **Branding PM**       | Đảm bảo consistency trong thiết kế theo guideline thương hiệu.  |
| **Marketing/Growth**  | Lên chiến dịch tăng trưởng, tối ưu nội dung, đo hiệu suất.      |
| **Data Analyst**      | Phân tích dữ liệu, tạo dashboard, hỗ trợ A/B test.              |
| **Community Manager** | Quản lý comment, phản hồi fan, theo dõi mức độ gắn kết.         |
| **Sales Executive**   | Làm việc với đối tác tài trợ, đàm phán và theo dõi deal.        |
| **Partner Manager**   | Duy trì và phát triển quan hệ hợp tác dài hạn với các brand.    |

---

## 📦 **C. Workflow Terms (Luồng Tác Vụ)**

| Thuật Ngữ                 | Định Nghĩa                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Idea-to-Publish Cycle** | Vòng đời nội dung: từ lên ý tưởng → viết kịch bản → sản xuất → thiết kế → đăng tải.            |
| **Asset Request Flow**    | Quy trình yêu cầu thiết kế asset (thumbnail, intro…) từ Content hoặc Media sang Design Team.   |
| **SEO Optimization Flow** | Quy trình gợi ý và chỉnh sửa metadata nhằm tăng điểm SEO cho video.                            |
| **A/B Testing**           | So sánh hai phiên bản nội dung (title, thumbnail...) để đánh giá hiệu quả qua dữ liệu thực tế. |
| **Sponsorship Workflow**  | Toàn bộ tiến trình từ lead đối tác → thương lượng → ký deal → đo lường hiệu quả hợp tác.       |

---

## 🧩 **D. Term về Tích Hợp Kỹ Thuật**

| Thuật Ngữ               | Định Nghĩa                                                           |
| ----------------------- | -------------------------------------------------------------------- |
| **YouTube Data API v3** | API cung cấp dữ liệu video, view, retention, CTR từ YouTube.         |
| **Google Ads API**      | API để tạo và theo dõi các chiến dịch quảng cáo trả phí.             |
| **Superset / Metabase** | Công cụ BI dùng để tạo dashboard phân tích dữ liệu.                  |
| **GDrive API / S3**     | Giao thức dùng để lưu trữ và chia sẻ file media hoặc asset thiết kế. |
| **Metadata Tagging**    | Cách gắn nhãn cho asset/file để dễ quản lý, lọc và tìm kiếm.         |


/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { notification } from "antd";
import { extend } from "umi-request";


const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
const isUrl = (path) => reg.test(path);

// change to your api backend
const baseUrl = "https://g12nhapmoncnpm.somee.com";

const codeMessage = {
  200: "Thành công",
  201: "Đã tạo hoặc sửa đổi dữ liệu thành công.",
  202: "Một yêu cầu đã vào hàng đợi nền (tác vụ không đồng bộ).",
  204: "Xóa dữ liệu thành công.",
  400: "Đã xảy ra lỗi trong yêu cầu được gửi và máy chủ không tạo hoặc sửa đổi dữ liệu.",
  401: "Người dùng không có quyền (mã thông báo, tên người dùng, mật khẩu sai).",
  403: "Người dùng được ủy quyền, nhưng truy cập bị cấm.",
  404: "Yêu cầu được thực hiện cho một bản ghi không tồn tại và máy chủ không làm gì cả.",
  406: "Định dạng được yêu cầu không có sẵn.",
  409: "Yêu cầu xung đột tài nguyên.",
  410: "Tài nguyên được yêu cầu sẽ bị xóa vĩnh viễn và sẽ không còn nữa.",
  422: "Khi tạo một đối tượng, đã xảy ra lỗi xác thực.",
  500: "Đã xảy ra lỗi máy chủ, vui lòng kiểm tra máy chủ.",
  502: "Lỗi cổng.",
  503: "Dịch vụ không khả dụng, máy chủ tạm thời quá tải hoặc được bảo trì.",
  504: "Cổng vào đã hết thời gian.",
};
/**
 * 异常处理程序
 */

const errorHandler = (error) => {

  const { response } = error;
  if (response && response.status) {
    const { status } = response;
    if (status === 400 ) {
      // not show message
      notification.error({
        message: "Thông báo",
        description: "Có lỗi rồi, vui lòng thử lại sau",
      });
    }
    if (!response) {
    notification.error({
      description: `Mạng của bạn không bình thường và không thể kết nối với máy chủ`,
      message: "Lỗi mạng",
    });
    }
}

  return response;
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: "include", // 默认请求是否带上cookie
});

// request.interceptors.request.use((url, options) => {
//   const headers = {};
//     // const token = localStorage.getItem("xplat-token");
//     // headers.Authorization = `Bearer ${token}`;
//   return {
//     url: isUrl(url) ? url : `${baseUrl}${url}`, // 是url 则默认使用之，不是则表明为后端请求...
//     options: {
//       ...options,
//       interceptors: true,
//       headers,
//       getResponse: true,
//     },
//   };
// });

export default request;

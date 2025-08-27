import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/:path*"]
});

// authMiddleware = lớp bảo vệ route bằng Clerk.
// publicRoutes = danh sách route không cần login.
// config.matcher = xác định route nào chạy middleware này
//  (loại bỏ static files, chỉ áp dụng cho page & API).

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


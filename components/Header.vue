<script setup lang="ts">
import img from "@/assets/images/logo_header.png";
</script>
<template>
  <section class="xl:block hidden">
    <div :class="`bg-[url('./images/bg_header.png')]`">
      <div class="container mx-auto">
        <img :src="img" class="h-[100px] object-cover" alt="">
      </div>
    </div>

    <div class="bg-gray-800 text-white">
      <header class="container mx-auto flex items-center justify-between gap-5 py-2">
        <ul class="flex items-center gap-4 flex-1">
          <li>
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-home-3-line"></i>
              Trang Chủ
            </nuxt-link>
          </li>
          <li class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent">
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-book-read-line"></i>
              Chương Trình Đào Tạo
            </nuxt-link>

            <div class="absolute top-[120px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear w-full text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
              <ul >
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Toàn trường
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Chuyên ngành chính
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Chuyên ngành thứ 2
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent">
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-draft-line"></i>
              Đăng Kí
            </nuxt-link>
            <div class="absolute top-[120px] w-[250px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
              <ul >
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Học chuyên ngành chính
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Học chuyên ngành thứ 2
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Đăng ký môn học sớm
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Đăng ký môn học tự chọn
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent">
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-user-line"></i>
              Sinh Viên
            </nuxt-link>

            <div class="absolute top-[120px] w-[300px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
              <ul >
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Thông tin cá nhân
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Điểm danh cho lớp
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Tra cứu điểm tổng hợp
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Tra cứu lịch học
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Tra cứu lịch thi
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Học bổng - Khen thưởng - Kỷ luật
                  </nuxt-link>
                </li>

                <li  class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Thông tin sinh viên tốt nghiệp
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent">
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-draft-line"></i>
              Đánh Giá
            </nuxt-link>
            <div class="absolute top-[120px] w-[200px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
              <ul >
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Khảo sát đánh giá
                  </nuxt-link>
                </li>
              </ul>
            </div>
            
          </li>
          <li  class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent">
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-news-line"></i>
              Thông Tin
            </nuxt-link>

            <div class="absolute top-[120px] w-[200px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
              <ul >
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Tin mới nhất
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Thông báo
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Văn bản biểu mẫu
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li  class="relative group after:w-full after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:bg-transparent">
            <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
              <i class="ri-wallet-line"></i>
              Thông Tin Tài Chính
            </nuxt-link>
            <div class="absolute top-[120px] w-[200px] group-hover:top-[120%] group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 ease-linear text-black bg-white p-3 rounded-md shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
              <ul >
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Xem thông tin học phí
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Học phí trực tuyến
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Kết quả phiếu chi
                  </nuxt-link>
                </li>
                <li class="py-2">
                  <nuxt-link to="#" class="font-medium hover:text-primary transition duration-200 ease-linear">
                    Khoản học phí khác
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <nuxt-link class="font-semibold hover:text-primary transition duration-200 ease-linear" to="login"> <i class="ri-login-box-line"></i> Đăng Nhập</nuxt-link>
      </header>
    </div>
  </section>
</template>



<style></style>
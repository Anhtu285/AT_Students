<script setup lang="ts">
import { ref } from 'vue'
import img from "@/assets/images/logo_header.png";
import imgMB from "@/assets/images/logo_header_mobile.png";

const isOpen = ref<any>({})
const isMenuMobileOpen = ref(false)
</script>
<template>
  <section class="xl:block hidden fixed top-0 w-full">
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

  <section class="xl:hidden block bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px]">
    <div class="container mx-auto flex items-center justify-between">
        <figure>
          <img :src="imgMB" class="h-[60px] object-cover" alt="">
        </figure>

        <button @click="isMenuMobileOpen = true">
          <i class="ri-menu-3-line text-[26px]"></i>
        </button>
    </div>

    <div  :class="isMenuMobileOpen? 'translate-x-[0]' : 'translate-x-[-100%]'"  class="fixed z-10 w-full transition-all max-w-[340px] h-screen bg-white top-0">
      <div class="py-2 px-3 flex items-center justify-between font-semibold">
        <nuxt-link to="#">Đăng Nhập</nuxt-link>
        <button @click="isMenuMobileOpen = false" class="w-[30px] h-[30px] bg-primary text-white">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <ul class="">
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex border-b-[1px] border-solid border-gray-200">
            <i class="ri-home-3-line"></i>
            Trang Chủ
          </nuxt-link>
        </li>
        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link to="#" class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex">
              <i class="ri-book-read-line"></i>
              Chương Trình Đào Tạo
          </nuxt-link>
          <button @click="isOpen.item2 ? isOpen.item2 = !isOpen.item2 : isOpen.item2=true" type="button" :class="isOpen?.item2 ? 'rotate-180 text-primary' : ''" class="absolute right-4 top-3 w-[30px] h-[30px] transition-all">
              <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul class="list-disc ml-[40px] transition-all" :class="isOpen?.item2 ? '' : 'hidden'">
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Toàn trường
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Chuyên ngành chính
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Chuyên ngành thứ 2
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link to="#" class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex">
            <i class="ri-draft-line"></i>
              Đăng kí
          </nuxt-link>
          <button @click="isOpen.item3 ? isOpen.item3 = !isOpen.item3 : isOpen.item3=true" type="button" :class="isOpen?.item3 ? 'rotate-180 text-primary' : ''" class="absolute right-4 top-3 w-[30px] h-[30px] transition-all">
              <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul class="list-disc ml-[40px] transition-all" :class="isOpen?.item3 ? '' : 'hidden'">
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Học chuyên ngành chính
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Học chuyên ngành thứ 2
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Đăng ký môn học sớm
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Đăng ký môn học tự chọn
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link to="#" class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex">
            <i class="ri-user-line"></i>
              Sinh Viên
          </nuxt-link>
          <button @click="isOpen.item4 ? isOpen.item4 = !isOpen.item4 : isOpen.item4=true" type="button" :class="isOpen?.item4 ? 'rotate-180 text-primary' : ''" class="absolute right-4 top-3 w-[30px] h-[30px] transition-all">
              <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul class="list-disc ml-[40px] transition-all" :class="isOpen?.item4 ? '' : 'hidden'">
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Thông tin cá nhân
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Điểm danh cho lớp
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Tra cứu điểm tống hợp
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Tra cứu lịch học
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Tra cứu lịch thi
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Học bổng - Khen thưởng - Kỷ luật
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Thông tin sinh viên tốt nghiệp
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link to="#" class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex">
            <i class="ri-draft-line"></i>
              Đánh giá
          </nuxt-link>
          <button @click="isOpen.item5 ? isOpen.item5 = !isOpen.item5 : isOpen.item5=true" type="button" :class="isOpen?.item5 ? 'rotate-180 text-primary' : ''" class="absolute right-4 top-3 w-[30px] h-[30px] transition-all">
              <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul class="list-disc ml-[40px] transition-all" :class="isOpen?.item5 ? '' : 'hidden'">
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Khảo sát đánh giá
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link to="#" class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex">
            <i class="ri-news-line"></i>
              Thông Tin
          </nuxt-link>
          <button @click="isOpen.item6 ? isOpen.item6 = !isOpen.item6 : isOpen.item6=true" type="button" :class="isOpen?.item6 ? 'rotate-180 text-primary' : ''" class="absolute right-4 top-3 w-[30px] h-[30px] transition-all">
              <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul class="list-disc ml-[40px] transition-all" :class="isOpen?.item6 ? '' : 'hidden'">
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Tin mới nhất
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Thông báo
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Văn bản biểu mẫu
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="relative border-b-[1px] border-solid border-gray-200">
          <nuxt-link to="#" class="font-semibold items-center hover:text-primary transition duration-200 ease-linear py-3 px-4 w-full flex">
            <i class="ri-wallet-line"></i>
              Thông Tin Tài Chính
          </nuxt-link>
          <button @click="isOpen.item7 ? isOpen.item7 = !isOpen.item7 : isOpen.item7=true" type="button" :class="isOpen?.item7 ? 'rotate-180 text-primary' : ''" class="absolute right-4 top-3 w-[30px] h-[30px] transition-all">
              <i class="ri-arrow-up-s-fill"></i>
          </button>
          <ul class="list-disc ml-[40px] transition-all" :class="isOpen?.item7 ? '' : 'hidden'">
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Xem thông tin học phí
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Học phí trực tuyến
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link to="#" class="py-2 w-full block font-medium hover:text-primary transition duration-200 ease-linear">
                Khoản học phí khác
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

<!-- overlay -->
    <div @click="isMenuMobileOpen = false" :class="isMenuMobileOpen? 'block' : 'hidden'" class="fixed top-0 z-1 bg-black/50 w-full h-full">
    </div>
  </section>


  <!-- margin ở đây -->
  <div class="mb-[140px] xl:block hidden">
  </div>
</template>



<style></style>
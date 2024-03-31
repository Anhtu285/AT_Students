<script setup lang="ts">
import img from "@/assets/images/logo_header.jpg";
</script>
<template>
  <header class="b">
  <div class="container mx-auto ">
    <section class=" flex items-center justify-between gap-5">
      <figure>
        <img :src="img" class="h-[54px] object-cover" alt="">
      </figure>

      <ul class="flex items-center gap-2 flex-1">
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Trang Chủ
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Chương Trình Đào Tạo
          </nuxt-link>
          </li>
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Đăng Kí
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Sinh Viên
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Đánh Giá
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Thông Tin
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="font-semibold hover:text-primary transition duration-200 ease-linear">
            Thông Tin Tài Chính
          </nuxt-link>
        </li>
      </ul>

      <nuxt-link to="login">Đăng Nhập</nuxt-link>
    </section>
  </div>
  </header>
</template>



<style>

</style>
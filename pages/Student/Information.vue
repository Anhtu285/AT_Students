
<template class="z index">
    <div class="isolate bg-white px-6 py-24 sm:py-10 lg:px-8">
      <form @submit.prevent="fetchData" method="POST" class="border border-gray-500 rounded-md p-5">
        <div class="flex space-x-20">
            <div>
                <label for="file-upload" class="block text-sm font-medium text-black">Ảnh thẻ</label>
                <input ref="file" type="file" @change="handlImage($event)" class="form-control" />
                <img v-if="images" :src="images" style="width: 100px;" alt="">
            </div>
            <div>
                <img id="preview" src="" alt="Preview" class="mt-2.5" style="max-width: 200px; max-height: 200px; display: none;" />
            </div>

        </div>

        <div class="flex space-x-36">
            <div>
                <label for="msv" class="block text-sm font-semibold leading-6 text-black">Mã sinh viên: </label>
                <div class="mt-2.5">
                <input type="text" name="msv" id="{{ students.studentId }}" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Họ Tên: </label>
                <div class="mt-2.5">
                <input type="text" name="first-name" id="{{ students.studentName }}" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Ngày sinh: </label>
                <div class="mt-2.5">
                <input type="date" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Giới tính: </label>
                <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>  
        </div>
        

        <div class="flex space-x-36">
                <div>
                    <label for="Quoctich" class="block text-sm font-semibold leading-6 text-gray-900">Quốc tịch: </label>
                    <div class="mt-2.5">
                        <input type="quoctich" name="quoctich" id="quoctich" autocomplete="email" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    </div>

                <div>
                    <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Dân tộc: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="relative mt-2.5">
                        <input type="quoctich" name="quoctich" id="quoctich" autocomplete="email" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Tôn giáo: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                        <input type="quoctich" name="quoctich" id="quoctich" autocomplete="email" class="block w-60 rounded-md border-0 px-3.5 py-2 
                         text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div>

        <div class="flex space-x-36">
                <div>
                    <label for="Quoctich" class="block text-sm font-semibold leading-6 text-gray-900">Số CCCD: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                        <input type="quoctich" name="quoctich" id="quoctich" autocomplete="email" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    </div>

                <div>
                    <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Nơi cấp CCCD: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="relative mt-2.5">
                        <input type="tel" name="quoctich" id="quoctich" autocomplete="email" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Ngày cấp CCCD: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                        <input type="date" name="NgaycapCCCD" id="Ngay_cap_CCCD" autocomplete="email" class="block w-60 rounded-md border-0 px-3.5 py-2 
                         text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div>

        <div class="flex space-x-36">
            <div>
                <label for="msv" class="block text-sm font-semibold leading-6 text-black">Hệ đào tạo: </label>
                <div class="mt-2.5">
                <input type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Chuyên ngành: </label>
                <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Khóa học: </label>
                <div class="mt-2.5">
                <input type="text" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Khóa tuyển sinh: </label>
                <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>  
        </div>

        <div class="flex space-x-36">
            <div>
                <label for="msv" class="block text-sm font-semibold leading-6 text-black">Số điện thoại chính: </label>
                <div class="mt-2.5">
                <input type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Số điện thoại phụ: </label>
                <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Email: </label>
                <div class="mt-2.5">
                <input type="text" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Email sinh viên: </label>
                <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>  
        </div>

        <div class="flex space-x-36">
            <div>
                <label for="msv" class="block text-sm font-semibold leading-6 text-black">Đoàn viên: </label>
                <div class="mt-2.5">
                <input type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Ngày vào đoàn/Đảng: </label>
                <div class="mt-2.5">
                <input type="date" name="first-name" id="first-name" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Học lực lớp 12: </label>
                <div class="mt-2.5">
                <input type="text" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Hạnh kiểm lớp 12: </label>
                <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>  
        </div>

        <div class="flex space-x-36">
            <div>
                <label for="msv" class="block text-sm font-semibold leading-6 text-black">Tỉnh/Thành phố thường trú: <a style="color:red;font-weight:bold">*</a></label>
                <div class="mt-2.5">
                <input type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Quận/Huyện thường trú: <a style="color:red;font-weight:bold">*</a></label>
                <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Xã thường trú: <a style="color:red;font-weight:bold">*</a></label>
                <div class="mt-2.5">
                <input type="text" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Số nhà/thôn, xóm thường trú: </label>
                <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>  
        </div>

        <br>
        <div class="border border-red-500 rounded-lg p-5 bg-pink-300">
            <h1 class="font-bold">Quan Hệ Gia Đình</h1>
        </div>

        <div class="border border-red-500 rounded-lg p-5">
            <div class="flex space-x-36">
                <div>
                    <label for="msv" class="block text-sm font-semibold leading-6 text-black">Họ tên bố: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                    <input type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Số điện thoại: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Ngày sinh: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                    <input type="date" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    </div>

                <div>
                    <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Địa chỉ: </label>
                    <div class="mt-2.5">
                    <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>  
            </div>

            <div class="flex space-x-36">
                <div>
                    <label for="msv" class="block text-sm font-semibold leading-6 text-black">Họ tên mẹ: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                    <input type="text" name="msv" id="msv" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Số điện thoại: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="date" class="block text-sm font-semibold leading-6 text-gray-900">Ngày sinh: <a style="color:red;font-weight:bold">*</a></label>
                    <div class="mt-2.5">
                    <input type="date" name="date" id="date" autocomplete="family-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    </div>

                <div>
                    <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Địa chỉ: </label>
                    <div class="mt-2.5">
                    <input type="text" name="company" id="company" autocomplete="organization" class="block w-60 rounded-md border-0 px-3.5 py-2 
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>  
            </div>
        </div>

        <div class="mt-10">
          <button type="submit" class="block w-52 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Lưu thông tin</button>
        </div>
      </form>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const profileSt = ref([]);
const students = ref([]);
const familySt = ref([]);
const totalProfileSt = ref(0);
const totalStudents = ref(0);
const totalFamilySt = ref(0);

const getProfileSt = async () => {
  try {
    const response = await axios.get('https://localhost:44356/api/ProfileSt');
    profileSt.value = response.data;
    totalProfileSt.value = profileSt.value.length;
  } catch (error) {
    console.error(error);
  }
};

const getStudents = async () => {
  try {
    const response = await axios.get('https://localhost:44356/api/Student');
    students.value = response.data;
    totalStudents.value = students.value.length;
  } catch (error) {
    console.error(error);
  }
};

const getFamilySt = async () => {
  try {
    const response = await axios.get('https://localhost:44356/api/FamilySt');
    familySt.value = response.data;
    totalFamilySt.value = familySt.value.length;
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get('https://localhost:44356/api/Student/1');
    student.value = response.data;
  } catch (error) {
    console.error(error);
    showErrorMessage(error);
  }
};

const handlImage = (e) => {
  const fileInput = e.target.files[0];
  if (fileInput) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrBuffer = event.target.result;
      const byteArray = new Uint8Array(arrBuffer);
      const blob = new Blob([byteArray]);
      const imageURL = URL.createObjectURL(blob);
      images.value = imageURL;
    };
    reader.readAsArrayBuffer(fileInput);
  } else {
    Swal.fire("Vui lòng chọn ảnh");
    images.value = '';
  }
};

const studentId = ref('');
const student = ref({
  studentName: '',
  sex: '',
  birthday: '',
  nationality: '',
  placeOfOrigin: '',
  phoneNumber: '',
  email: '',
  note: ''
});
const images = ref('');

onMounted(() => {
  getProfileSt();
  getStudents();
  getFamilySt();
  fetchData();
});
</script>
<template>
    <div class="w-full md:grid-cols-3 gap-4 -mb-96 mt-40">
        <div class="border border-blue-500 rounded-lg p-4 mb-96 mx-4 md:mx-10">
            <div class="flex space-x-36">
                <div>
                    <label for="hocky" class="block text-sm font-semibold leading-6 text-black">Học kỳ </label>
                    <div class="mt-2.5">
                    <input type="text" name="hocky" id="hocky" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 *:" />
                    </div>
                </div>

                <div>
                    <label for="namhoc" class="block text-sm font-semibold leading-6 text-black">Năm học </label>
                    <div class="mt-2.5">
                    <input type="text" name="namhoc" id="namhoc" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="dothoc" class="block text-sm font-semibold leading-6 text-black">Đợt học </label>
                    <div class="mt-2.5">
                    <input type="text" name="dothoc" id="dothoc" autocomplete="given-name" class="block w-32 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="nganhhoc" class="block text-sm font-semibold leading-6 text-black">Ngành học </label>
                    <div class="mt-2.5">
                    <input type="text" name="nganhhoc" id="nganhhoc" autocomplete="given-name" class="block w-60 rounded-md border-0 px-3.5 py-2 
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded shadow">
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr>
                                <th class="border p-2">STT</th>
                                <th class="border p-2">Tên học phần</th>
                                <th class="border p-2">Số tín chỉ</th>
                                <th class="border p-2">Tên lớp tín chỉ</th>
                                <th class="border p-2">Giời gian</th>
                                <th class="border p-2">Thứ</th>
                                <th class="border p-2">Tiết</th>
                                <th class="border p-2">Phòng</th>
                                <th class="border p-2">Giáo viên</th>
                            </tr>

                            <tr>
                                <td class="border p-2">1</td>
                                <td class="border p-2">Thực tập tốt nghiệp</td>
                                <td class="border p-2">4</td>
                                <td class="border p-2">CNTT14-01-Báo cáo Thực tập tốt nghiệp-077CQ5TTTN-4</td>
                                <td class="border p-2">01/01/2024-17/02/2024</td>
                                <td class="border p-2 ">0</td>
                                <td class="border p-2">1-4</td>
                                <td class="border p-2"></td>
                                <td class="border p-2"></td>
                            </tr>

                            <tr>
                                <td class="border p-2">2</td>
                                <td class="border p-2">Quản trị mạng</td>
                                <td class="border p-2">3</td>
                                <td class="border p-2">CNTT14-01-Quản trị mạng-077CQ2bQTMA-3</td>
                                <td class="border p-2">04/03/2024-17/05/2024</td>
                                <td class="border p-2 ">3</td>
                                <td class="border p-2">1-4</td>
                                <td class="border p-2">P-405 GD2</td>
                                <td class="border p-2"></td>
                            </tr>

                            <tr>
                                <td class="border p-2">3</td>
                                <td class="border p-2">Học máy</td>
                                <td class="border p-2">3</td>
                                <td class="border p-2">CNTT14-01-Học máy-077CQ2bHoMa-3</td>
                                <td class="border p-2">04/03/2024-17/05/2024</td>
                                <td class="border p-2 ">5</td>
                                <td class="border p-2">1-4</td>
                                <td class="border p-2">P-506 GD2</td>
                                <td class="border p-2"></td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
// {
//     photo:'',   # 照片链接
//     labels:['', '', '', ...],   # 照片下方标签
//     thumbnail:'',   # [可选]如果照片过大的话，建议使用较小的照片作为thumnail展示在网页上。当用户点开大图的时候，才显示photo。
//                     如果不写thumnail的话，默认以photo作为thumbnail
// }

// Gallery页面是瀑布流的显示方式
// 以4列为例，第一张图片在第1列，第二、三、四张图片分别在第2、3、4列
// 从第五张图片开始，每张图片在放置前，检索当前高度最短的列，并将该图片放在最短列
// 直至所有图片放完为止

gallery = [
    {
        photo: './photos/gallery/Teacher_day_24.jpg',
        labels:['2024-09-10', '2024 teacher's day', 'NUAA'],
        thumbnail:'./photos/gallery/Teacher_day_24.jpg',
    }, // don't forget this comma
        {
        photo: './photos/gallery/2024_IJCAI_JEJU.png',
        labels:['2024-08-05', 'IJCAI reception', 'JEJU'],
        thumbnail:'./photos/gallery/2024_IJCAI_JEJU_lr.jpg',
    }, // don't forget this comma
      {
        photo: './photos/gallery/Farewell_Kang.jpg',
        labels:['2024-07-12', 'Farewell party for Kang You', 'Nanjing'],
        thumbnail:'./photos/gallery/Farewell_Kang_lr.jpg',
    }, // don't forget this comma
          {
        photo: './photos/gallery/Chenyi_CVPR.jpg',
        labels:['2024-07-12', 'Photoed with a colleague from Google Deepmind during CVPR 2024', 'Seattle'],
        thumbnail:'./photos/gallery/Chenyi_CVPR_lr.jpg',
    }, // don't forget this comma
    {
        photo: './photos/gallery/2024_valse.jpg',
        labels:['2024-05-05', 'Valse', 'ChongQing'],
        thumbnail:'./photos/gallery/2024_valse_lr.jpg',
    }, // don't forget this comma
    {
        photo: './photos/gallery/20231225.jpg',
        labels:['2023-12-25', 'Annual Report'],
        thumbnail:'./photos/gallery/20231225_lr.jpg',
    }, // don't forget this comma
    {
        photo: './photos/gallery/Image_snow_2023.png',
        labels:['2023-12-18', 'A heavy snowfall in Nanjing'],
        thumbnail:'./photos/gallery/Image_snow_2023_lr.jpg',
    }, // don't forget this comma
    {
        photo: './photos/gallery/20231106.jpg',
        labels:['2023-11-06', 'Prof. Wei Xiang from La Trobe University visited Nanjing'],
    }, // don't forget this comma
    {
        photo: './photos/gallery/20230611.jpg',
        labels:['2023-06-11', 'VALSE 2023', 'Wuxi'],
        thumbnail:'./photos/gallery/20230611-lr.jpg',
    },
    {
        photo: './photos/gallery/20230407.jpg',
        labels:['2023-04-07', 'Graduation'],
        thumbnail:'./photos/gallery/20230407-lr.jpg',
    },
    {
        photo: './photos/gallery/20230311.jpg',
        labels:['2023-03-11', 'Mountain climbing'],
        thumbnail:'./photos/gallery/20230311-lr.jpg',
    },
    {
        photo: './photos/gallery/20221212-2.jpg',
        labels:['2022-12-12', 'Annual Report'],
    },
    {
        photo: './photos/gallery/20221212.jpg',
        labels:['2022-12-12', 'Annual Report'],
        thumbnail:'./photos/gallery/5.jpg',
    },
    {
        photo: './photos/gallery/9.jpg',
        labels:['2022-09-05', 'Openday', ':D'],
    },
    {
        photo: './photos/gallery/20220822.jpg',
        labels:['2022-08-22', 'VALSE', 'Tianjin', 'Conference'],
        thumbnail:'./photos/gallery/4.jpg',
    },
    {
        photo: './photos/gallery/1.jpg',
        labels:['2022-07-29', 'Dinner Party'],
        thumbnail:'./photos/gallery/1.jpg',
    },
    {
        photo: './photos/gallery/2.jpg',
        labels:['2022-04-06', 'Graduation🎉'],
    },
    {
        photo: './photos/gallery/20210910.jpg',
        labels:['2021-09-10', 'Teacher\'s Day'],
        thumbnail:'./photos/gallery/20210910.jpg',
    },
    {
        photo: './photos/gallery/6.jpg',
        labels:['2021-03-31', 'Oral Defence'],
        thumbnail:'./photos/gallery/6.jpg',
    },
    {
        photo: './photos/gallery/7.jpg',
        labels:['2021-01-16', 'Annual Report'],
        thumbnail:'./photos/gallery/7.jpg',
    },
    {
        photo: './photos/gallery/20200910.jpg',
        labels:['2020-09-10', 'Teachers\' Day'],
        thumbnail:'./photos/gallery/20200910.jpg',
    },
]

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export default function About() {
  const [counter, setCounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const branches = [
    { id: 1,
      name: {
        ar: "الرياض",
        en: "Riyadh",
      },
    },
    {id: 2,
      name: {
        ar: "جدة",
        en: "Jeddah",
      },
    },
    {id: 3,
      name: {
        ar: "المدينة",
        en: "Madinah",
      },
    },
    {id: 4,
      name: {
        ar: "الخبر",
        en: "Khobar",
      },
    },
    ,
    {id: 5,
      name: {
        ar: "حفر الباطن",
        en: "Hafar Al-Batin",
      },
    },
    {id: 6,
      name: {
        ar: "خميس مشيط",
        en: "Khamis Mushait",
      },
    },
    {id: 7,
      name: {
        ar: "جازان",
        en: "Jazan",
      },
    },
    {id: 8,
      name: {
        ar: "بريدة",
        en: "Buraydah",
      },
    },
  ];
  const branches2 = [
    {
      name: {
        ar: "البحرين",
        en: "Bahrain",
      },
    },
    {
      name: {
        ar: "الامارات",
        en: "The UAE",
      },
    },
    {
      name: {
        ar: "عمان",
        en: "Oman",
      },
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("desc1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {dir == "rtl" ? (
        <>
          <div
            //  bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about%20us%20background.jpg?raw=true')] bg-no-repeat bg-cover bg-center
            className={`relative   w-full lg:h-[470px] h-[300px] md:h-[350px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about-bg.jpg?raw=true"
              className="w-full h-full  z-10"
              alt="about us image "
            />
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-gray-800/60 to-gray-700/50 opacity-80 z-10"></div>
            <div className="absolute top-4 end-4 hidden md:flex bg-white bg-opacity-30 rounded-full items-center justify-center z-20">
              <h3 className="text-green-950 text-sm font-semibold mx-1">
                ALBatel & Co
              </h3>
              <img
                src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true"
                className="w-[50px] mt-1"
                alt="logo image "
              />
            </div>
            <div className="absolute top-3/4 hidden end-4 md:flex bg-white bg-opacity-30 border border-green-600  rounded-full items-center cursor-pointer  justify-center z-30">
              <h3 className="text-gray-900 text-sm font-semibold mx-1">
                info@albatelcpa.com
              </h3>
            </div>
            <div className="absolute top-80  hidden end-4 md:flex bg-white bg-opacity-30 rounded-full border border-green-600 items-center justify-center cursor-pointer z-30">
              <h3 className="text-gray-900  text-sm font-semibold mx-1">
                www.albatelcpa.com
              </h3>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1 className="text-green-50 text-center text-xl lg:text-4xl mb-4 font-semibold">
                شركة باتل عبدالله الباتل وشركاؤه
              </h1>
              <h2 className="text-green-50 text-center text-lg lg:text-4xl mb-20 font-semibold">
                للإستشارات المهنية
              </h2>
              <button onClick={handleScroll}>
                <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-20 py-3 border-green-800 border-2 text-center z-20 text-green-100 text-md font-bold">
                  تعرف علينا
                  <span className="mx-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </h3>
              </button>
            </div>
          </div>

          <div id="desc1" className="container my-16">
            <div className=" w-full  flex  flex-col justify-start items-center overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl rounded-tl-none">
              <div className="w-full lg:w-1/2 flex flex-col justify-center  p-5">
                <h3 className="text-center font-semibold text-green-700 my-3 text-2xl">
                  تاريخ الشركة
                </h3>
                <p className="text-gray-900 text-xl py-2 m-2 flex font-semibold">
                  <i className="fa-solid fa-calendar-days text-green-600 text-xl m-2"></i>
                  تأسست شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                  بموجب ترخيص الهيئة السعودية للمحاسبين القانونيين لمزاولة أعمال

                  المحاسبة والمراجعة منذ عام 1427/08/01هـ الموافق 2006/02/07مـ{" "}

                  المحاسبة والمراجعة منذ عام 1427/01/08هـ الموافق 2006/02/07مـ   

                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i className="fa-solid fa-id-card  text-green-600 text-xl m-2"></i>
                  كما أن الشركة حاصلة على تصريح لتقديم الاستشارات المالية
                  والاقتصادية والإدارية من وزارة التجارة
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center ">
                <img
                  className=" w-full"
                  src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84%20%D9%84%D9%88%D8%AC%D9%88.jpg?raw=true"
                  alt="history of company image"
                />
              </div>
            </div>

            <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl my-8 rounded-tl-none">
              <div className="w-full lg:w-1/2 flex    flex-col   p-5">
                <h3 className="text-center font-semibold text-green-700 my-3 text-2xl">
                  مقر الشركة
                </h3>
                <p className="text-gray-900 text-xl py-2 m-2 flex font-semibold">
                  <i className="fa-solid fa-location-dot  text-green-600 text-xl m-2"></i>
                  الرياض هي نقطة البداية والفرع الرئيسي للشركة
                </p>
                <p className="text-gray-900 text-xl py-2 m-2 my-4 flex font-semibold">
                  <i className="fa-solid fa-map-location text-green-600 text-xl m-2"></i>
                  7162 مبنى السمو، الطريق الدائرى الشرقى، حى الربوة، ص ب 28565
                  الرمز البريدى 11447
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i className="fa-solid fa-map-location-dot  text-green-600 text-xl m-2"></i>

                  بالإضافة إلى العديد من الفروع داخل وخارج المملكة

                </p>
              </div>

              <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={`100%`}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <h2 className="text-3xl text-green-800 text-center font-semibold p-6">
            فروعنا داخل المملكة العربية السعودية
          </h2>
          <div className=" w-full flex bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about1.jpg?raw=true')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row bg-white shadow-md rounded-3xl my-8 ">
            {branches.map((branch,index) => {
              return (
                  
                 <Link to={`/branch/${branch.id}`} key={index} className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.ar}
                    </p>
                  
                  </Link>
                
                 
                
              );
            })}
          </div>
          <h2 className="text-3xl text-green-800 text-center mt-14 font-semibold p-6">
            فروعنا خارج المملكة العربية السعودية
          </h2>
          <div className=" w-full flex flex-wrap bg-fixed flex-col items-center justify-evenly md:flex-row bg-white shadow-md bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about1.jpg?raw=true')] bg-cover bg-center rounded-3xl my-8 ">
            {branches2.map((branch,index) => {
              return (
                
                  <div key={index} className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.ar}
                    </p>
                    {/* </div> */}
                  </div>
                
              );
            })}
          </div>

          <h2 className="text-3xl text-green-800 text-center font-semibold mt-20 p-6">
            الهيكل التنظيمي والموظفين
          </h2>

          <div className="container mb-12">
            <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center items-stretch">
              <div className="w-full  lg:w-1/2   p-3">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center  bg-white rounded-3xl flex-col  shadow-md  ">
                  <img
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/team-about.avif"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex  items-center font-semibold text-xl text-center leading-10 p-10 my-4">
                      أكثر من سبعين مراجع حسابات مؤهلين علميا وأصحاب خبرة واسعة
                      قادرون على تقديم جميع الخدمات في مجال الحسابات وإعداد
                      القوائم المالية والمراجعة الداخلية والخارجية والاستشارات
                      المالية والمحاسبية والإدارية والقانونية تمكننا من تقديم
                      خدماتنا لآلاف العملاء داخل وخارج المملكة
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  lg:w-1/2   p-3 ">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center bg-white rounded-3xl flex-col shadow-md  ">
                  <img
                    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team2-about.jpg?raw=true"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex items-center text-center font-semibold text-lg leading-10 p-10 my-4">
                      فريق كامل من الموظفات للعمل في الأقسام النسائية أو المواقع
                      تتنوع مؤهلاتهن في المحاسبة وعمليات المراجعة الداخلية
                      والخارجية لديهن خبرة واسعة في جميع الجوانب المالية
                      والمحاسبية لديهن خبرة واسعة في الاعمال الإدارية والحوكمة
                      لا تقل خبرة أحدهم عن خمس سنوات خبرة معترف بهم يحملون
                      شهادات محاسبية ومالية وإدارية وقانونية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                تميزت شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                بالخبرة الواسعة في عمليات المراجعة الخارجية والداخلية
                والاستشارات المالية والمحاسبية والإدارية والقانونية وكذا عمليات
                تقييم المخاطر والالتزام والحوكمة
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                كما تميزت الشركة في اتمامها لكافة هذه العمليات على أكمل وجه
                بالإضافة الى الالتزام التام بفريق العمل المحدد بالعرض الذي نقدمه
                لكل منافسة أو شراكة أو تعاقد
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                لدينا التزام تام بالوقت المحدد الذي يتم التعاقد عليه مع كل جهة
                وكذا في تقديم الدعم المستمر على مدى مدار العمل بالإضافة الى
                الدعم بعد انتهاء العمل
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                وتتميز الشركة أيضًا بكادر بشرى يتمتع بالخبرات اللازمة لإتمام
                المهام المكلف بها، والذي يتميز أيضًا بحسن الخلق والمعاملة الجيدة
                والحصول على الشهادات المهنية في مختلف المجالات المحاسبية
                والاستشارية والإدارية والقانونية، والتي منها على سبيل المثال لا
                الحصر:
              </span>
            </p>
            <div className="flex w-full flex-wrap gap-6 justify-center items-center pb-4">
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CBA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFC
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFE
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFM
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIB
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CICA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIPA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CISA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CSAA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                MBA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CERTI IFRS
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA VAT
              </span>
            </div>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                للتعرف اكثر على فريقنا يمكنك الضغط هنا
                <Link
                  className="text-sm text-green-500 hover:text-blue-500 hover:underline duration-500 transition-all mx-3"
                  to={"/team"}
                >
                  اضغط هنا
                </Link>
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div
            //  bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about%20us%20background.jpg?raw=true')] bg-no-repeat bg-cover bg-center
            className={`relative   w-full lg:h-[450px] h-[300px] md:h-[350px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about-bg.jpg?raw=true"
              className="w-full h-full  z-10"
              alt="about us image "
            />
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-gray-800/60 to-gray-700/50 opacity-80 z-10"></div>
            <div className="absolute top-4 end-4 flex bg-white bg-opacity-30 rounded-full items-center justify-center z-20">
              <h3 className="text-green-950 text-sm font-semibold mx-1">
                ALBatel & Co
              </h3>
              <img
                src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true"
                className="w-[50px] mt-1"
                alt="logo image "
              />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1 className="text-green-50 text-center text-lg lg:text-3xl mb-4 font-semibold">
                {/* Batal Abdullah Al-Batal & Partners for Professional Consultations */}
                Batal Abdullah Al-Batal & Partners Company
              </h1>
              <h2 className="text-green-50 text-center text-xl lg:text-3xl mb-20 font-semibold">
                For professional consultations
              </h2>
              <button onClick={handleScroll}>
                <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-20 py-3 border-green-800 border-2 text-center z-20 text-green-100 text-md font-bold">
                  Get to know us
                  <span className="mx-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </h3>
              </button>
            </div>
          </div>

          <div id="desc1" className="container my-16">
            <div className=" w-full  flex  flex-col justify-start items-center overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl rounded-tl-none">
              <div className="w-full lg:w-1/2 flex flex-col justify-center  p-5">
                <h3 className="text-center font-semibold text-green-700 my-3 text-2xl">
                  Company History
                </h3>
                <p className="text-gray-900 text-xl py-2 m-2 flex font-semibold">
                  <i className="fa-solid fa-calendar-days text-green-600 text-xl m-2"></i>
                  Batel Abdullah Al Batel & Partners Professional Consulting
                  Company was established under the license of the Saudi
                  Organization for Certified Public Accountants to practice
                  accounting and auditing since 08/01/1427 AH corresponding to
                  07/02/2006 AD.
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i className="fa-solid fa-id-card  text-green-600 text-xl m-2"></i>
                  The company is also licensed to provide financial, economic
                  and administrative consulting from the Ministry of Commerce.
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center ">
                <img
                  className=" w-full"
                  src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84%20%D9%84%D9%88%D8%AC%D9%88.jpg?raw=true"
                  alt="history of company image"
                />
              </div>
            </div>

            <div className=" w-full flex flex-col lg:flex-row bg-white shadow-md rounded-3xl my-8 rounded-tl-none">
              <div className="w-full lg:w-1/2 flex    flex-col   p-5">
                <h3 className="text-center font-semibold text-green-700 my-3 text-2xl">
                  company location
                </h3>
                <p className="text-gray-900 text-xl py-2 m-2 flex font-semibold">
                  <i className="fa-solid fa-location-dot  text-green-600 text-xl m-2"></i>
                  Riyadh is the starting point and the main branch of the
                  company.
                </p>
                <p className="text-gray-900 text-xl py-2 m-2 my-4 flex font-semibold">
                  <i className="fa-solid fa-map-location text-green-600 text-xl m-2"></i>
                  7162 Al-Samoa Building, Eastern Ring Road, Al-Rabwa District,
                  P.O. Box 28565 Zip Code 11447
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i className="fa-solid fa-map-location-dot  text-green-600 text-xl m-2"></i>
                  We have many branches inside and outside the kingdom.
                </p>
              </div>

              <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={`100%`}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <h2 className="text-3xl text-green-800 text-center font-semibold p-6">
            Our branches inside the Kingdom of Saudi Arabia
          </h2>
          <div className=" w-full flex bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about1.jpg?raw=true')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row bg-white shadow-md rounded-3xl my-8 ">
            {branches.map((branch,index) => {
              return (
                <Link to={`/branch/${branch.id}`} key={index} className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                {/* <div className="p-4"> */}
                <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                  {branch.name.en}
                </p>
              
              </Link>
              );
            })}
          </div>
          <h2 className="text-3xl text-green-800 text-center mt-14 font-semibold p-6">
            Our branches outside the Kingdom of Saudi Arabia
          </h2>
          <div className=" w-full flex flex-wrap bg-fixed flex-col items-center justify-evenly md:flex-row bg-white shadow-md bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/about1.jpg?raw=true')] bg-cover bg-center rounded-3xl my-8 ">
            {branches2.map((branch,index) => {
              return (
              
                  <div key={index} className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.en}
                    </p>
                    {/* </div> */}
                  </div>
                
              );
            })}
          </div>

          <h2 className="text-3xl text-green-800 text-center font-semibold mt-20 p-6">
            Organizational structure and staff
          </h2>

          <div className="container mb-12">
            <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center items-stretch">
              <div className="w-full  lg:w-1/2   p-3">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center  bg-white rounded-3xl flex-col  shadow-md  ">
                  <img
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/team-about.avif"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex  items-center font-semibold text-xl text-center leading-10 p-10 my-4">
                      More than seventy scientifically qualified auditors with
                      extensive experience are able to provide all services in
                      the field of accounts, preparation of financial
                      statements, internal and external audit, financial,
                      accounting, administrative and legal consulting enable us
                      to provide our services to thousands of clients inside and
                      outside the kingdom
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  lg:w-1/2   p-3 ">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center bg-white rounded-3xl flex-col shadow-md  ">
                  <img
                    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team2-about.jpg?raw=true"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex items-center text-center font-semibold text-lg leading-10 p-10 my-4">
                      A full team of female employees to work in women's
                      departments or locations their qualifications vary in
                      accounting, internal and external audits have extensive
                      experience in all aspects of Finance and accounting have
                      extensive experience in administrative and governance at
                      least one of them has at least five years of experience
                      recognized with accounting, financial, administrative and
                      legal certificates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                Batel Abdullah Al Batel & Partners Professional Consulting
                Company has distinguished itself with its extensive experience
                in external and internal auditing, financial, accounting,
                administrative and legal consulting, as well as risk assessment,
                compliance and governance operations.
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                The company has also been distinguished in completing all these
                operations in the best possible way, in addition to the full
                commitment of the work team specified in the offer we provide
                for every competition, partnership or contract.
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                We have full commitment to the specific time contracted with
                each party, as well as providing continuous support throughout
                the work cycle, in addition to support after the work is
                completed.
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                The company is also distinguished by a human cadre with the
                necessary expertise to complete the tasks assigned to it, and
                who are also distinguished by good morals and good treatment and
                obtaining professional certificates in various accounting,
                consulting, administrative and legal fields, including, but not
                limited to:
              </span>
            </p>
            <div className="flex w-full flex-wrap gap-6 justify-center items-center pb-4">
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CBA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFC
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFE
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFM
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIB
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CICA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIPA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CISA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CSAA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                MBA
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CERTI IFRS
              </span>
              <span className="text-green-950 font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA VAT
              </span>
            </div>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i className="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                To learn more about our team, you can click here.
                <Link
                  className="text-sm text-green-500 hover:text-blue-500 hover:underline duration-500 transition-all mx-3"
                  to={"/team"}
                >
                  Click here
                </Link>
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
}

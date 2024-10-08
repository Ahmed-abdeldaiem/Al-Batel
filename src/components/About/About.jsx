import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export default function About() {
  const [counter, setCounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const branches = [
    {
      name: {
        ar: "الرياض",
        en: "Riyadh",
      },
    },
    {
      name: {
        ar: "جدة",
        en: "Jeddah",
      },
    },
    {
      name: {
        ar: "المدينة",
        en: "Almadenah",
      },
    },
    {
      name: {
        ar: "الخبر",
        en: "Khobar",
      },
    },
    {
      name: {
        ar: "القصيم",
        en: "Qassim",
      },
    },
    {
      name: {
        ar: "حفر الباطن",
        en: "Hafar Al-Batin",
      },
    },
    {
      name: {
        ar: "خميس مشيط",
        en: "Khamis Mushait",
      },
    },
    {
      name: {
        ar: "جيزان",
        en: "Jizan",
      },
    },
    {
      name: {
        ar: "الدمام",
        en: "Dammam",
      },
    },
    {
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
            className={`relative   w-full lg:h-[450px] h-[300px] md:h-[350px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="https://breicis.com/wp-content/uploads/2022/03/132526715_s-1.jpg"
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
                src="\logo.png"
                className="w-[50px] mt-1"
                alt="logo image "
              />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1 className="text-green-50 text-center text-xl lg:text-3xl mb-4 font-semibold">
                نحن شركة باتل عبدالله الباتل وشركاؤه
              </h1>
              <h2 className="text-green-50 text-center text-xl lg:text-3xl mb-20 font-semibold">
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
                  <i class="fa-solid fa-calendar-days text-green-600 text-xl m-2"></i>
                  تأسست شركة/ باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                  بموجب ترخيص الهيئة السعودية للمحاسبين القانونيين لمزاولة أعمال
                  المحاسبة والمراجعة منذ عام 08/01/1427هـ الموافق 07/02/2006م أي
                  ما يقارب سبعة عشر عام
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i class="fa-solid fa-id-card  text-green-600 text-xl m-2"></i>
                  كما أن الشركة حاصلة على تصريح لتقديم الاستشارات المالية
                  والاقتصادية والإدارية من وزارة التجارة
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center ">
                <img
                  className=" w-full"
                  src="https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-enterprise-sales-work-report-summary-powerpoint-background_7fda59407b__960_540.jpg"
                  alt="history of company image"
                />
              </div>
            </div>

            <div className=" w-full flex flex-col lg:flex-row bg-white shadow-md rounded-3xl my-8 rounded-tl-none">
              <div className="w-full lg:w-1/2 flex    flex-col   p-5">
                <h3 className="text-center font-semibold text-green-700 my-3 text-2xl">
                  مقر الشركة
                </h3>
                <p className="text-gray-900 text-xl py-2 m-2 flex font-semibold">
                  <i class="fa-solid fa-location-dot  text-green-600 text-xl m-2"></i>
                  الرياض هي نقطة البداية والفرع الرئيسي للشركة
                </p>
                <p className="text-gray-900 text-xl py-2 m-2 my-4 flex font-semibold">
                  <i class="fa-solid fa-map-location text-green-600 text-xl m-2"></i>
                  7162 مبنى السمو، الطريق الدائرى الشرقى، حى الربوة، ص ب 28565
                  الرمز البريدى 11447
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i class="fa-solid fa-map-location-dot  text-green-600 text-xl m-2"></i>
                  توسعنا لنصل الى اماكن عدة داخل وخارج المملكة
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center p-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={500}
                  height={400}
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
          <div className=" w-full flex bg-[url('https://t4.ftcdn.net/jpg/01/23/73/15/240_F_123731572_KMfBEkpbRlfQj1ypdPVwv4W0r27B9hVJ.jpg')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row bg-white shadow-md rounded-3xl my-8 ">
            {branches.map((branch) => {
              return (
                <>
                  <div className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i class="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.ar}
                    </p>
                    {/* </div> */}
                  </div>
                </>
              );
            })}
          </div>
          <h2 className="text-3xl text-green-800 text-center mt-14 font-semibold p-6">
            فروعنا خارج المملكة العربية السعودية
          </h2>
          <div className=" w-full flex flex-wrap bg-fixed flex-col items-center justify-evenly md:flex-row bg-white shadow-md bg-[url('https://t4.ftcdn.net/jpg/01/23/73/15/240_F_123731572_KMfBEkpbRlfQj1ypdPVwv4W0r27B9hVJ.jpg')] bg-cover bg-center rounded-3xl my-8 ">
            {branches2.map((branch) => {
              return (
                <>
                  <div className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i class="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.ar}
                    </p>
                    {/* </div> */}
                  </div>
                </>
              );
            })}
          </div>

          <h2 className="text-3xl text-green-800 text-center font-semibold mt-20 p-6">
            الهيكل التنظيمي والموظفين
          </h2>

          <div className="container mb-12">
            <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center items-stretch">
              <div className="w-full  md:w-1/2   p-5">
                <div className="flex items-center justify-center  bg-white rounded-3xl flex-col  shadow-md  ">
                  <img
                    src="https://img.freepik.com/premium-photo/multiethnic-team-group-icon-people-standing-circle_93826-1338.jpg"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex  items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        أكثر من خمسين مراجع حسابات مؤهلين علميا وأصحاب خبرة
                        واسعة
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        قادرون على تقديم جميع الخدمات في مجال الحسابات
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span> وإعداد القوائم المالية</span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span> والمراجعة الداخلية والخارجية</span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        والاستشارات المالية والمحاسبية والإدارية والقانونية
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        تمكنا من تقديم خدماتنا لآلاف العملاء داخل وخارج المملكة
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  md:w-1/2   p-5 ">
                <div className="flex items-center justify-center bg-white rounded-3xl flex-col shadow-md  ">
                  <img
                    src="https://www.abouther.com/sites/default/files/2019/09/25/main_-_saudi_women_working.jpg"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        فريق كامل من الموظفات للعمل في الأقسام النسائية أو
                        المواقع
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        تتنوع مؤهلاتهن في المحاسبة وعمليات المراجعة الداخلية
                        والخارجية
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        لديهن خبرة واسعة في جميع الجوانب المالية والمحاسبية
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>لديهن خبرة واسعة في الاعمال الإدارية والحوكمة</span>
                    </p>

                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span> لا تقل خبرة أحدهم عن خمس سنوات خبرة</span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        معترف بهم يحملون شهادات محاسبية ومالية وإدارية وقانونية
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                تميزت شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                بالخبرة الواسعة في عمليات المراجعة الخارجية والداخلية
                والاستشارات المالية والمحاسبية والإدارية والقانونية وكذا عمليات
                تقييم المخاطر والالتزام والحوكمة
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                كما تميزت الشركة في اتمامها لكافة هذه العمليات على أكمل وجه
                بالإضافة الى الالتزام التام بفريق العمل المحدد بالعرض الذي نقدمه
                لكل منافسة أو شراكة أو تعاقد
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                لدينا التزام تام بالوقت المحدد الذي يتم التعاقد عليه مع كل جهة
                وكذا في تقديم الدعم المستمر على مدى مدار العمل بالإضافة الى
                الدعم بعد انتهاء العمل
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
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
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
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
              src="https://breicis.com/wp-content/uploads/2022/03/132526715_s-1.jpg"
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
                src="\logo.png"
                className="w-[50px] mt-1"
                alt="logo image "
              />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1 className="text-green-50 text-center text-xl lg:text-3xl mb-4 font-semibold">
                We are Batel Abdullah Al Batel and Partners Company
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
                  <i class="fa-solid fa-calendar-days text-green-600 text-xl m-2"></i>
                  Batel Abdullah Al Batel & Partners Professional Consulting
                  Company was established under the license of the Saudi
                  Organization for Certified Public Accountants to practice
                  accounting and auditing since 08/01/1427 AH corresponding to
                  07/02/2006 AD, i.e. approximately seventeen years.
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i class="fa-solid fa-id-card  text-green-600 text-xl m-2"></i>
                  The company is also licensed to provide financial, economic
                  and administrative consulting from the Ministry of Commerce.
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center ">
                <img
                  className=" w-full"
                  src="https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-enterprise-sales-work-report-summary-powerpoint-background_7fda59407b__960_540.jpg"
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
                  <i class="fa-solid fa-location-dot  text-green-600 text-xl m-2"></i>
                  Riyadh is the starting point and the main branch of the
                  company.
                </p>
                <p className="text-gray-900 text-xl py-2 m-2 my-4 flex font-semibold">
                  <i class="fa-solid fa-map-location text-green-600 text-xl m-2"></i>
                  7162 Al-Samoa Building, Eastern Ring Road, Al-Rabwa District,
                  P.O. Box 28565 Zip Code 11447
                </p>
                <p className="text-gray-900 text-xl m-2 py-5 flex font-semibold">
                  <i class="fa-solid fa-map-location-dot  text-green-600 text-xl m-2"></i>
                  We have expanded to reach many places inside and outside the
                  Kingdom.
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center p-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={500}
                  height={400}
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
          <div className=" w-full flex bg-[url('https://t4.ftcdn.net/jpg/01/23/73/15/240_F_123731572_KMfBEkpbRlfQj1ypdPVwv4W0r27B9hVJ.jpg')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row bg-white shadow-md rounded-3xl my-8 ">
            {branches.map((branch) => {
              return (
                <>
                  <div className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i class="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.en}
                    </p>
                    {/* </div> */}
                  </div>
                </>
              );
            })}
          </div>
          <h2 className="text-3xl text-green-800 text-center mt-14 font-semibold p-6">
            Our branches outside the Kingdom of Saudi Arabia
          </h2>
          <div className=" w-full flex flex-wrap bg-fixed flex-col items-center justify-evenly md:flex-row bg-white shadow-md bg-[url('https://t4.ftcdn.net/jpg/01/23/73/15/240_F_123731572_KMfBEkpbRlfQj1ypdPVwv4W0r27B9hVJ.jpg')] bg-cover bg-center rounded-3xl my-8 ">
            {branches2.map((branch) => {
              return (
                <>
                  <div className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5">
                    {/* <div className="p-4"> */}
                    <i class="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                    <p className="text-2xl text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.en}
                    </p>
                    {/* </div> */}
                  </div>
                </>
              );
            })}
          </div>

          <h2 className="text-3xl text-green-800 text-center font-semibold mt-20 p-6">
            Organizational structure and staff
          </h2>

          <div className="container mb-12">
            <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center items-stretch">
              <div className="w-full  md:w-1/2   p-5">
                <div className="flex items-center justify-center  bg-white rounded-3xl flex-col  shadow-md  ">
                  <img
                    src="https://img.freepik.com/premium-photo/multiethnic-team-group-icon-people-standing-circle_93826-1338.jpg"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex  items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        More than 50 academically qualified and experienced
                        auditors
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        Able to provide all services in the field of accounting
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>Preparing financial statements</span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>Internal and external audit</span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        Financial, accounting, administrative and legal
                        consultations
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        our services provided to thousands of clients inside and
                        outside the Kingdom.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  md:w-1/2   p-5 ">
                <div className="flex items-center justify-center bg-white rounded-3xl flex-col shadow-md  ">
                  <img
                    src="https://www.abouther.com/sites/default/files/2019/09/25/main_-_saudi_women_working.jpg"
                    className="w-[250px] h-[250px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div className="w-full flex flex-col justify-start">
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        A full team of female employees to work in the women's
                        sections or sites
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        Their qualifications vary in accounting, internal and
                        external auditing.
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        They have extensive experience in all aspects of finance
                        and accounting.
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        They have extensive experience in administrative and
                        governance work.
                      </span>
                    </p>

                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        One of them has at least five years of experience.
                      </span>
                    </p>
                    <p className="text-blue-950 flex items-center font-semibold text-lg my-4">
                      <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
                      <span>
                        Recognized holders of accounting, financial,
                        administrative and legal certificates
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                Batel Abdullah Al Batel & Partners Professional Consulting
                Company has distinguished itself with its extensive experience
                in external and internal auditing, financial, accounting,
                administrative and legal consulting, as well as risk assessment,
                compliance and governance operations.
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                The company has also been distinguished in completing all these
                operations in the best possible way, in addition to the full
                commitment of the work team specified in the offer we provide
                for every competition, partnership or contract.
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
              <span>
                We have full commitment to the specific time contracted with
                each party, as well as providing continuous support throughout
                the work cycle, in addition to support after the work is
                completed.
              </span>
            </p>
            <p className="p-5 mx-5 font-semibold text-blue-950 text-lg flex items-baseline">
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
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
              <i class="fa-solid fa-circle-dot text-green-600 text-lg mx-2"></i>
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

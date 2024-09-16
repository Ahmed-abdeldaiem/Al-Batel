import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { TeamContext } from "../../Context/TeamContext";
import Loader from "../Loader/Loader";
import style from "./Team.module.css";

export default function Team() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getAllFirstTeam } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [team3, setTeam3] = useState([]);
  const [team4, setTeam4] = useState([]);
  const [team5, setTeam5] = useState([]);

  useEffect(() => {
    getFirstTeam();
  }, []);

  async function getFirstTeam() {
    setLoading(true);
    let all = await getAllFirstTeam();
    console.log("team ", all.record.team);
    setTeam1(all.record.team);
    setTeam2(all.record.team2);
    setTeam3(all.record.team3);
    setTeam4(all.record.team4);
    setTeam5(all.record.team5);

    setLoading(false);
  }

  return (
    <>
      {Loading ? <Loader /> : null}
      {dir=='rtl'?<>
      <div className="container  py-24  ">
        <h2 className="text-green-600 text-3xl text-center my-6 font-semibold">
        
          فريق العمل
         
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

        <div className="flex flex-wrap w-full items-center justify-center">
          {team1.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team1.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2 lg:w-1/3 hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.ar}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.ar}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.ar}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >اضغط لعرض المزيد</Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
          الاستشارات الإدارية والاقتصادية والترجمة
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team2.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team2.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2 hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.ar}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.ar}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.ar}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >اضغط لعرض المزيد</Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
          الاستشارات الضريبية والزكوية
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team3.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team3.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2  hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.ar}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.ar}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.ar}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >اضغط لعرض المزيد</Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
          استشارات قانونية{" "}
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team4.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team4.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2  hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.ar}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.ar}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.ar}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >اضغط لعرض المزيد</Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
          البرمجة وتحليل البيانات
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team5.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team5.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2  hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.ar}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.ar}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.ar}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >اضغط لعرض المزيد</Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      </>:<>
      <div className="container  py-24  ">
        <h2 className="text-green-600 text-3xl text-center my-6 font-semibold">
        Our Team         
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

        <div className="flex flex-wrap w-full items-center justify-center">
          {team1.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team1.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2 lg:w-1/3 hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.en}
                    />
                    {/* Card Content */}
                    <div className="p-4 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.en}
                      </h5>
                      <p className="mb-1 font-normal text-gray-700">
                        {person.job_title.en}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >
                        Click to view more
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        Administrative and economic consulting and translation
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team2.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team2.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2 hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.en}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.en}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.en}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >
                        Click to view more
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        Tax and Zakat Consultations
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team3.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
             Tax and Zakat Consultations
            </p>
          ) : (
            team3.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2  hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.en}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.en}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.en}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >
                        Click to view more
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        Legal consultations
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team4.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team4.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2  hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.en}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.en}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.en}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >
                        Click to view more
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        Programming and data analysis
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {team5.length == 0 ? (
            <p className="text-2xl text-blue-800 font-bold">
              No team members available
            </p>
          ) : (
            team5.map((person) => {
              return (
                <Link
                  to={`/team/${person.id}`}
                  key={person.id}
                  className="w-full group md:w-1/2  hover:bg-blue-200 rounded-lg transition-all duration-500 p-4"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col xl:flex-row justify-center items-center overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-green-500 transition-all duration-500 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-48 h-48 object-center"
                      src={person.image?.url} // Fallback if image URL is missing
                      alt={person.image?.description?.en}
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {person.name.en}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                        {person.job_title.en}
                      </p>
                      {/* Read More Button */}

                      <Link
                        to={`/team/${person.id}`}
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full bg-indigo-500 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2 border-green-500 rounded-lg shadow-md group"
                      >
                        Click to view more   </Link>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      </>}
   
    </>
  );
}

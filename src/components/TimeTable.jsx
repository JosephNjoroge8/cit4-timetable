import React from 'react';

const TimeTable = () => {
  const timeSlots = [
    "7:00-8:00", "8:00-9:00", "9:00-10:00", "10:00-11:00",
    "11:00-12:00", "12:00-1:00", "2:00-3:00", "3:00-4:00",
    "4:00-5:00", "5:00-6:00", "6:00-7:00"
  ];

  const schedule = {
    "Monday": Array(11).fill("-"),
    "Tuesday": [
      "CIT 404 (TB1)", "CIT 404 (TB1)", "CIT 404 (TB1)",
      "CIT 410 (TB1)", "CIT 410 (TB1)", "CIT 410 (TB1)",
      "-", "-", "-", "-", "-"
    ],
    "Wednesday": [
      "-", "-", "-",
      "CIT 410 (TB5)", "CIT 410 (TB5)", "CIT 410 (TB5)",
      "CIT 416 LAB 1", "CIT 416 LAB 1", "CIT 416 LAB 1",
      "CIT 416 LAB 1", "CIT 416 LAB 1"
    ],
    "Thursday": [
      "CIT 406 (TB1)", "CIT 406 (TB1)", "CIT 406 (TB1)",
      "CIT 408 (TB1)", "CIT 408 (TB1)", "CIT 408 (TB1)",
      "-", "-", "-", "-", "-"
    ],
    "Friday": [
      "CIT 418 (TB1)", "CIT 418 (TB1)", "CIT 418 (TB1)",
      "CIT 414 (TB1)", "CIT 414 (TB1)", "CIT 414 (TB1)",
      "CIT 414 (TB1)", "-", "-", "-", "-"
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">CIT 4 Timetable (Jan-April 2025)</h1>
        <h2 className="text-lg text-gray-600">Maseno University, Department of Information Technology</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border bg-gray-100 font-semibold text-left">Day</th>
              {timeSlots.map((slot, index) => (
                <th key={index} className="p-2 border bg-gray-100 font-semibold text-center whitespace-nowrap">
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(schedule).map(([day, slots], index) => (
              <tr key={day} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="p-2 border font-medium">{day}</td>
                {slots.map((slot, slotIndex) => (
                  <td
                    key={slotIndex}
                    className={`p-2 border text-center ${
                      slot !== '-' ? 'bg-blue-50' : ''
                    }`}
                  >
                    {slot}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Room Key:</h3>
        <ul className="space-y-1">
          <li>TB1: Tution Block 1</li>
          <li>TB5: Tutution Block 5</li>
          <li>LAB 1: Laboratory 1</li>
        </ul>
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Course Information:</h3>
        <ul className="space-y-1">
          <li>ABA 424: Entrepreneurship and Small Business Management - LEVIS OTIENO - 0714 852 500</li>
          <li>CIT 402: IT project II - ALL LECTURERS</li>
          <li>CIT 404: Cryptography and Information Security - DR SAMUEL OONGE - 0714 891 743</li>
          <li>CIT 406: Social And Professional Issues In IT - DR ERICK OTEYO - 0716 555551</li>
          <li>CIT 408: IT and Development - VIOLET SETTIM - 0722 242 818</li>
          <li>CIT 410: Mobile Technology Applications and M-Commerce - DR SAMUEL OONGE - 0714 891 743</li>
          <li>CIT 414: Cloud Computing and Emerging Applications - GEORGE OMUONO - 0721 240 172</li>
          <li>CIT 416: Network Security - JAMES CHAMWAMA - 0722 399 874</li>
          <li>CIT 418: Authentication Protocols and Biometrics - DR SAMUEL OONGE - 0714 891 743</li>
        </ul>
      </div>
    </div>
  );
};

export default TimeTable;
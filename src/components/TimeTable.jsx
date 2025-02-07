import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

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
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          <div className="text-2xl font-bold">CIT 4 Timetable (Jan-April 2025)</div>
          <div className="text-lg text-gray-600">Maseno University, Department of Information Technology</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
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
            <li>TB1: Tutorial Block 1</li>
            <li>TB5: Tutorial Block 5</li>
            <li>LAB 1: Laboratory 1</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeTable;
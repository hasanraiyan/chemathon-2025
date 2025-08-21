// Committee.jsx
import React from "react";

const committeeData = {
  organizingCommittee: [
    { name: "To Be Announced", role: "Chief Patron", designation: "President, Indian Chemical Society" },
    { name: "To Be Announced", role: "Patron", designation: "Principal, KEC" },
  ],

  studentOrganizingCommittee: [
    { name: "To Be Announced", designation: "Secretary" },
    { name: "To Be Announced", designation: "Vice Secretary" },
  ],

  iicheNationalAdvisory: [
    { name: "To Be Announced", designation: "Advisor - Policy & Outreach" },
    { name: "To Be Announced", designation: "Advisor - Research & Innovation" },
  ],

  icsNationalAdvisory: [
    { name: "To Be Announced", designation: "Chairman" },
    { name: "To Be Announced", designation: "Member" },
  ],

  technicalAdvisoryCommittee: [
    { name: "To Be Announced", designation: "Technical Lead" },
    { name: "To Be Announced", designation: "Subject Expert" },
  ],

  localExecutiveCommittee: [
    { name: "To Be Announced" },
    { name: "To Be Announced" },
  ],
};

function SectionTable({ columns, rows }) {
  return (
    <div className="max-w-3xl mx-auto mb-10">
      <table className="w-full text-left bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="border-b dark:border-gray-700">
            {columns.map((col) => (
              <th key={col.key} className="p-4 font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key} className="p-4">
                  {row[col.key] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Committee() {
  return (
    <section id="committee" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Organizing <span className="text-blue-600 dark:text-blue-400">Committee</span>
        </h2>

        {/* Organizing */}
        <SectionTable
          columns={[
            { key: "name", label: "Name" },
            { key: "role", label: "Role" },
            { key: "designation", label: "Designation" },
          ]}
          rows={committeeData.organizingCommittee}
        />

        {/* Student */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Student <span className="text-blue-600 dark:text-blue-400">Organizing Committee</span>
        </h2>
        <SectionTable
          columns={[
            { key: "name", label: "Name" },
            { key: "designation", label: "Designation" },
          ]}
          rows={committeeData.studentOrganizingCommittee}
        />

        {/* IIChE National */}
        <h2 className="text-2xl font-bold text-center mb-6">
          IIChE - <span className="text-blue-600 dark:text-blue-400">National Advisory Committee</span>
        </h2>
        <SectionTable
          columns={[
            { key: "name", label: "Name" },
            { key: "designation", label: "Designation" },
          ]}
          rows={committeeData.iicheNationalAdvisory}
        />

        {/* ICS National */}
        <h2 className="text-2xl font-bold text-center mb-6">
          ICS - <span className="text-blue-600 dark:text-blue-400">National Advisory Committee</span>
        </h2>
        <SectionTable
          columns={[
            { key: "name", label: "Name" },
            { key: "designation", label: "Designation" },
          ]}
          rows={committeeData.icsNationalAdvisory}
        />

        {/* Technical */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Technical <span className="text-blue-600 dark:text-blue-400">Advisory Committee</span>
        </h2>
        <SectionTable
          columns={[
            { key: "name", label: "Name" },
            { key: "designation", label: "Designation" },
          ]}
          rows={committeeData.technicalAdvisoryCommittee}
        />

        {/* Local */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Local <span className="text-blue-600 dark:text-blue-400">Executive Committee</span>
        </h2>
        <SectionTable
          columns={[{ key: "name", label: "Name" }]}
          rows={committeeData.localExecutiveCommittee}
        />
      </div>
    </section>
  );
}

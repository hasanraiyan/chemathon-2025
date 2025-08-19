// Committee.jsx
import React from "react";
import { motion } from "framer-motion";


const rowVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.28 } },
};

const tbodyVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const committeeData = {
  organizingCommittee: [
    { name: "Y", role: "Chief Patron", designation: "President, Indian Chemical Society" },
    { name: "X", role: "Patron", designation: "Principal, KEC" },
  ],

  studentOrganizingCommittee: [
    { name: "X", designation: "Secretary" },
    { name: "Y", designation: "Vice Secretary" },
  ],

  iicheNationalAdvisory: [
    { name: "X", designation: "Advisor - Policy & Outreach" },
    { name: "Y", designation: "Advisor - Research & Innovation" },
  ],

  icsNationalAdvisory: [
    { name: "X", role: "Chairman" },
    { name: "Y", role: "Member" },
  ],

  technicalAdvisoryCommittee: [
    { name: "X", role: "Technical Lead" },
    { name: "Y", role: "Subject Expert" },
  ],

  localExecutiveCommittee: [
    { name: "X" },
    { name: "Y" },
  ],
};

function SectionTable({ title, columns, rows }) {
  
  return (
    <div className="mb-10">
      {title ? (
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">{title}</h3>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="bg-white dark:bg-gray-800 text-left px-4 py-3 text-sm font-semibold border border-gray-300 dark:border-gray-700"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <motion.tbody initial="hidden" animate="visible" variants={tbodyVariants}>
            {rows.map((row, idx) => (
              <motion.tr key={idx} variants={rowVariants} className={`border-b border-gray-700`}>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-4 align-top text-sm text-gray-700 dark:text-gray-200">
                    {row[col.key] ?? "-"}
                  </td>
                ))}
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <section id="committee" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Organizing <span className="text-blue-600 dark:text-blue-400">Committee</span>
        </h2>

        
        <SectionTable
          title=""
          columns={[
  { key: "name", label: <span className="font-bold">Name</span> },
  { key: "role", label: <span className="font-bold">Role</span> },
  { key: "designation", label: <span className="font-bold">Designation</span> },
]}

          rows={committeeData.organizingCommittee}
        />

        {/* Student*/}
        <h2 className="text-2xl font-bold text-center mb-4">
          Student <span className="text-blue-600 dark:text-blue-400">Organizing Committee</span>
        </h2>
        <SectionTable
          title=""
          columns={[
  { key: "name", label: <span className="font-bold">Name</span> },
  { key: "designation", label: <span className="font-bold">Designation</span> }
]}

          rows={committeeData.studentOrganizingCommittee}
        />

        {/* IIChE - National Advisory*/}
        <h2 className="text-2xl font-bold text-center mb-4">
          IIChE - <span className="text-blue-600 dark:text-blue-400">National Advisory Committee</span>
        </h2>
        <SectionTable
          title=""
          columns={[
             { key: "name", label: <span className="font-bold">Name</span> },
             { key: "designation", label: <span className="font-bold">Designation</span> }
          ]}
          rows={committeeData.iicheNationalAdvisory}
        />

        {/*National Advisory */}
        <h2 className="text-2xl font-bold text-center mb-4">
          ICS - <span className="text-blue-600 dark:text-blue-400">National Advisory Committee</span>
        </h2>
        <SectionTable
          title=""
          columns={[
            { key: "name", label: <span className="font-bold">Name</span> },
             { key: "designation", label: <span className="font-bold">Designation</span> }
          ]}
          rows={committeeData.icsNationalAdvisory}
        />

        {/* Technical */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Technical <span className="text-blue-600 dark:text-blue-400">Advisory Committee</span>
        </h2>
        <SectionTable
          title=""
          columns={[
            { key: "name", label: <span className="font-bold">Name</span> },
            { key: "designation", label: <span className="font-bold">Designation</span> }
          ]}
          rows={committeeData.technicalAdvisoryCommittee}
        />

        {/* Local */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Local <span className="text-blue-600 dark:text-blue-400">Executive Committee</span>
        </h2>
        <SectionTable title=""
          columns={[
          { key: "name", label: <span className="font-bold">Name</span> }
        ]}
          rows={committeeData.localExecutiveCommittee} />
      </div>
    </section>
  );
}

// Committee.jsx
import React from "react";
import Section from './ui/Section';
import Container from './ui/Container';
import ScrollReveal from './ui/ScrollReveal';

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
    <div className="max-w-4xl mx-auto mb-10">
      <table className="w-full text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden responsive-table">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr className="border-b dark:border-gray-700">
            {columns.map((col) => (
              <th key={col.key} className="p-4 font-semibold text-gray-600 dark:text-gray-300 uppercase text-sm tracking-wider">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b dark:border-gray-700 md:even:bg-gray-50 dark:md:even:bg-gray-800/50">
              {columns.map((col) => (
                <td key={col.key} data-label={col.label} className="md:p-4">
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
    <Section id="committee" background="bg-gray-100 dark:bg-gray-900">
      <Container maxWidth="max-w-5xl" className="text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12">
            Organizing <span className="text-blue-600 dark:text-blue-400">Committee</span>
          </h2>
        </ScrollReveal>

        {/* Organizing */}
        <ScrollReveal delay={0.1}>
          <SectionTable
            columns={[
              { key: "name", label: "Name" },
              { key: "role", label: "Role" },
              { key: "designation", label: "Designation" },
            ]}
            rows={committeeData.organizingCommittee}
          />
        </ScrollReveal>

        {/* Student */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl font-bold text-center mb-6 mt-12">
            Student <span className="text-blue-600 dark:text-blue-400">Organizing Committee</span>
          </h3>
          <SectionTable
            columns={[
              { key: "name", label: "Name" },
              { key: "designation", label: "Designation" },
            ]}
            rows={committeeData.studentOrganizingCommittee}
          />
        </ScrollReveal>

        {/* IIChE National */}
        <ScrollReveal delay={0.3}>
          <h3 className="text-2xl font-bold text-center mb-6 mt-12">
            IIChE - <span className="text-blue-600 dark:text-blue-400">National Advisory Committee</span>
          </h3>
          <SectionTable
            columns={[
              { key: "name", label: "Name" },
              { key: "designation", label: "Designation" },
            ]}
            rows={committeeData.iicheNationalAdvisory}
          />
        </ScrollReveal>

        {/* ICS National */}
        <ScrollReveal delay={0.4}>
          <h3 className="text-2xl font-bold text-center mb-6 mt-12">
            ICS - <span className="text-blue-600 dark:text-blue-400">National Advisory Committee</span>
          </h3>
          <SectionTable
            columns={[
              { key: "name", label: "Name" },
              { key: "designation", label: "Designation" },
            ]}
            rows={committeeData.icsNationalAdvisory}
          />
        </ScrollReveal>

        {/* Technical */}
        <ScrollReveal delay={0.5}>
          <h3 className="text-2xl font-bold text-center mb-6 mt-12">
            Technical <span className="text-blue-600 dark:text-blue-400">Advisory Committee</span>
          </h3>
          <SectionTable
            columns={[
              { key: "name", label: "Name" },
              { key: "designation", label: "Designation" },
            ]}
            rows={committeeData.technicalAdvisoryCommittee}
          />
        </ScrollReveal>

        {/* Local */}
        <ScrollReveal delay={0.6}>
          <h3 className="text-2xl font-bold text-center mb-6 mt-12">
            Local <span className="text-blue-600 dark:text-blue-400">Executive Committee</span>
          </h3>
          <SectionTable
            columns={[{ key: "name", label: "Name" }]}
            rows={committeeData.localExecutiveCommittee}
          />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
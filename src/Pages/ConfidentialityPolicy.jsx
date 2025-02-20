import React from 'react';

const ConfidentialityPolicy = () => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto px-6 py-10">
      {/* Purpose of Document */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
        Purpose of Document
      </h2>
      <p className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
        The purpose of this document is to ensure all staff members at the College are aware of their legal duty to maintain confidentiality, to inform them of the processes in place to protect personal information, and to provide guidance on disclosure obligations.
      </p>

      {/* Introduction */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
        Introduction
        {/* Introduction */}
      </h2>
      <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
        <p>
          Everyone working for the college or elsewhere within the business is under a legal duty to keep student’s personal information confidential. Students who believe their confidence has been breached may make a complaint to the college, and they could take legal action or report it to the ICO. In the case of a registered dental professional tutor, the student could also make a complaint to the General Dental Council, which, in worst-case scenarios, may end in erasure from the GDC register.
        </p>

        <p>
          This policy is concerned with protecting personal student information, although its content would apply equally to staff personal information or business-sensitive information.
        </p>

        <p>
          Personal information is data in any form (paper, electronic, tape, verbal, etc.) from which a living individual could be identified including:
        </p>

        {/* Personal Information List */}
        <ul className="list-disc list-inside space-y-2 pl-6">
          <li>
            Name, age, address, and personal circumstances, as well as sensitive personal information like race, health, sexuality, etc.
          </li>
          <li>Information regarding appointments</li>
          <li>Information regarding medical histories</li>
          <li>Information regarding finances, including any bad debts.</li>
        </ul>

        <p>
          Although the Data Protection Act 2018 is only relevant to the personal information of living individuals, this code also covers information about students. This policy applies to all staff, including permanent, temporary, and locum staff members.
        </p>
      </div>

       {/* Confidentiality */}
       <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
        Confidentiality
      </h2>
      <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
        <p>
          Under the Data Protection Act 2018 and UK GDPR, dental colleges must keep personal data about their students safe and secure and to ensure it is only accessed by persons who need to see it for the purposes of providing safe, effective education.
        </p>
        <p>
          Registered dental professionals and tutors have an ethical and legal duty to keep all student information confidential.
        </p>
      </div>


      {/* Caldicott Principles */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
        Caldicott Principles
        </h2>
        <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
        <p>
            The Caldicott Principles are the guidelines for ensuring people's information is kept confidential and used or shared appropriately within a healthcare setting.
        </p>
        <p>
            All NHS organizations must have an appointed Caldicott Guardian. This won't apply to most dental colleges, although there should be someone within the college who is responsible for ensuring student information is kept confidential and shared appropriately when required.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">The Caldicott Principles</h3>
        <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
            <li><strong>Principle 1:</strong> Justify the purpose for using the confidential information.</li>
            <li><strong>Principle 2:</strong> Use confidential information only when it is necessary.</li>
            <li><strong>Principle 3:</strong> Use the minimum necessary confidential information.</li>
            <li><strong>Principle 4:</strong> Access to confidential information should be on a strict need-to-know basis.</li>
            <li><strong>Principle 5:</strong> Everyone with access to confidential information should be aware of their responsibilities.</li>
            <li><strong>Principle 6:</strong> Comply with the law.</li>
            <li><strong>Principle 7:</strong> The duty to share information for individual education is as important as the duty to protect students' confidentiality.</li>
        </ul>
        </div>

        {/* Disclosing Student Information */}
            <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
            Disclosing Student Information
            </h2>
            <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
            <p>
                Personal information relating to a student should only be shared with third parties where the student has given consent or in exceptional circumstances (<strong>GDC Standards 4.3</strong>).
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Examples of where information may be shared without consent include:</h3>
            <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
                <li>
                In safeguarding concerns where it is not possible to gain consent and a referral needs to be made to the local authority or the police.
                </li>
                <li>
                Where information has been ordered by a court or by a coroner. If a court order has requested information, only the minimum amount of information should be disclosed.
                </li>
            </ul>
            <p>
                Before disclosing information to third parties where consent has not been obtained, you are advised to contact your indemnity provider.
            </p>
            </div>

            {/* The Importance of Confidentiality */}
            <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
            The Importance of Confidentiality
            </h2>
            <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
            <p>
                The relationship between the tutor and student is based on the understanding that any information revealed by the student to the tutor will not be divulged without the student’s consent. Students have the right to privacy, and they must provide the organization with full information on their educational history to ensure that education is carried out effectively.
            </p>
            <p>
                The intensely personal nature of health information means that many students would be reluctant to provide the college with information if they felt the information would be passed on.
            </p>
            <p>
                Education must be taken to ensure that confidentiality is never breached, even to the most minor degree, in the use of social media or websites (<strong>GDC Standards 4.2.3</strong>).
            </p>
            </div>

            {/* Recognize Your Obligations */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
                Recognize Your Obligations
                </h2>
                <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
                <p>
                    A duty of confidence arises out of the common law duty of confidence, employment contracts, and for registered dental professionals, it is part of your professional obligations. Breaches of confidence and inappropriate use of records or computer systems are serious matters that could result in disciplinary proceedings, dismissal, and possibly legal prosecution.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">So, make sure you do not:</h3>
                <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
                    <li>Put personal information at risk of unauthorized access.</li>
                    <li>Knowingly misuse any personal information or allow others to do so.</li>
                    <li>Access records or information that you have no legitimate reason to look at. This includes records and information about your family, friends, neighbors, and acquaintances.</li>
                </ul>
                </div>


                {/* GDC Standards Guidance */}
                <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
                GDC Standards Guidance
                </h2>
                <div className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
                <p>
                    Dental educational professionals have an ethical and legal duty to ensure they are familiar with and comply with the GDC’s standards and guidance. All team members must also follow this guidance and ensure that they maintain student confidentiality.
                </p>
                <p>
                    Copies of this publication in full are available as PDF downloads from the GDC’s website at 
                    <a href="https://www.gdc-uk.org" className="text-blue-600 underline">
                    www.gdc-uk.org
                    </a>.
                </p>
                <h3 className="text-xl font-semibold mt-4 mb-2">Key Standards:</h3>
                <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
                    <li>
                    <strong>4.2</strong> Protect the confidentiality of students’ information and only use it for the purpose for which it was given.
                    </li>
                    <li>
                    <strong>4.2.1</strong> Confidentiality is central to the relationship and trust between you and your student. You must keep student information confidential. This applies to all the information about students that you have learned in your professional role, including personal details, student educational history, what education they are having, and how much it costs.
                    </li>
                    <li>
                    <strong>4.2.3</strong> You must not post any information or comments about students on social networking or blogging sites. If you use professional social media to discuss anonymized cases for the purpose of discussing best education, you must be careful that the student or students cannot be identified.
                    </li>
                </ul>
                </div>




    </div>
  );
};

export default ConfidentialityPolicy;

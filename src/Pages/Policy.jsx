import React from "react";
import {  definitions, introduction, scopeOfPolicy, dpoContactReasons, dataProtectionPrinciples, lawfulProcessingGrounds, consentDetails, transparencyDetails, dataProtectionPolicy, purposeLimitation, dataMinimization, accuracy, storageLimitation, securityIntegrityConfidentiality, reportingPersonalDataBreach, transferLimitation, dataSubjectRightsRequests, accountability, recordKeeping, trainingAndAudit, privacyByDesignAndDPIA, processingAndADM, directMarketing, sharingPersonalData, caldicottPrinciples, changesToPolicy  } from "../../src/assets/data/policyData";

const Policy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Privacy Policy</h1>
      <p className="mb-6 text-lg leading-relaxed">
        This Policy is specifically for JoinLio and
        is a mutual agreement between the college entity and the staff
        (comprising of both employees and non-employed staff members).
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        Please be aware that this Policy and Annexures are generic and do not
        negate the necessity for specific advice and a thorough review of the
        document to precisely reflect your circumstances. This is strongly
        recommended:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        <li>
          To use the GDPR Risk assessment link to assess the suitability of
          your Policy and carry out a Data Protection Impact Assessment (DPIA)
          as set out in clause 19 before implementing this Policy.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Interpretation</h2>
      <h3 className="text-xl font-semibold mt-8 mb-2">Definitions:</h3>
      <div className="space-y-4">
        {[
          { term: "Automated Decision-Making (ADM)", desc: "when a decision is made based solely on Automated Processing (including profiling), which produces legal effects or significantly affects an individual. The UK GDPR prohibits Automated Decision-Making (unless certain conditions are met) but not Automated Processing." },
          { term: "Automated Processing", desc: "any form of automated processing of Personal Data consisting of the use of Personal Data to evaluate certain personal aspects relating to an individual, in particular, to analyze or predict aspects concerning that individual's performance at work, economic situation, health, personal preferences, interests, reliability, behavior, location, or movements. Profiling is an example of automated processing, as are many uses of artificial intelligence (AI), which involves the processing of personal data." },
          { term: "Caldicott Principles", desc: "8 Principles used to ensure people’s information is kept confidential and used appropriately." },
          { term: "Company name", desc: "Joinlio." },
          { term: "Company Personnel", desc: "all employees, associates, and, without limitation, other self-employed staff, workers, contractors, agency workers, consultants, directors, members, and others." },
          { term: "Consent", desc: "agreement which must be freely given, specific, informed, and be an unambiguous indication of the Data Subject's wishes by which they, by a statement or by a clear positive action, signify agreement to the Processing of Personal Data relating to them." },
          { term: "Controller", desc: "the person or organization that determines when, why, and how to process Personal Data. It is responsible for establishing practices and policies in line with the UK GDPR. We are the Controller of all Personal Data relating to our Company Personnel and Personal Data used in our business for our own commercial purposes." },
          { term: "Criminal Convictions Data", desc: "personal data relating to criminal convictions and offenses, including personal data relating to criminal allegations and proceedings." },
          { term: "Data Subject", desc: "a living, identified, or identifiable individual about whom we hold Personal Data. Data Subjects may be nationals or residents of any country and may have legal rights regarding their Personal Data." },
          { term: "Data Privacy Impact Assessment (DPIA)", desc: "tools and assessments used to identify and reduce risks of a data processing activity. A DPIA can be carried out as part of Privacy by Design and should be conducted for all major system or business setups, as well as on adopting this Policy and any change programs involving the Processing of Personal Data." },
          { term: "Data Protection Officer (DPO)", desc: "either of the following: a) The person required to be appointed in specific circumstances under the UK GDPR; or b) where wholly a college and a mandatory DPO have not been appointed, a Data Protection Lead is recommended to take responsibility for data protection compliance." },
          { term: "Explicit Consent", desc: "consent that requires a very clear and specific statement (that is, not just action)." },
          { term: "UK GDPR", desc: "the retained EU law version of the General Data Protection Regulation ((EU) 2016/679) as defined in the Data Protection Act 2018. Personal Data is subject to the legal safeguards specified in the UK GDPR." },
          { term: "Personal Data", desc: "any information identifying a Data Subject or information relating to a Data Subject that we can identify (directly or indirectly) from that data alone or in combination with other identifiers we possess or can reasonably access. Personal Data includes Special Categories of Personal Data and Pseudonymized Personal Data but excludes anonymous data or data that has had the identity of an individual permanently removed. Personal data can be factual (for example, a name, email address, location, or date of birth) or an opinion about that person's actions or behavior. Personal Data specifically includes but is not limited to, medical records." },
          { term: "Personal Data Breach", desc: "any act or omission that compromises the security, confidentiality, integrity, or availability of Personal Data or the physical, technical, administrative, or organizational safeguards that we or our third-party service providers put in place to protect it. The loss or unauthorized access, disclosure, or acquisition of Personal Data is a Personal Data Breach." },
          { term: "Privacy by Design", desc: "implementing appropriate technical and organizational measures in an effective manner to ensure compliance with the UK GDPR." },
          { term: "Privacy Guidelines", desc: "The company privacy and UK GDPR-related guidelines and policies provided to assist in interpreting and implementing this Data Protection Policy and Related Policies are available on the DCME compliance portal or on display at the practice." },
          { term: "Privacy Notices (also referred to as Fair Processing Notices) or Privacy Policies", desc: "separate notices setting out information that may be provided to Data Subjects when the Company collects information about them. These notices may take the form of: a) general privacy statements applicable to a specific group of individuals (for example, employee privacy notices or the website privacy policy) or b) stand-alone, one-time privacy statements covering Processing related to a specific purpose." }
        ].map(({ term, desc }, index) => (
          <p key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-600">{term}:</strong> {desc}
          </p>
        ))}
        {/* Introduction Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Introduction</h2>
      {introduction.map((para, index) => (
        <p key={index} className="mb-6 text-lg leading-relaxed">{para}</p>
      ))}

      {/* Scope of Policy Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">
        Scope of Policy and When to Seek Advice
      </h2>
      {scopeOfPolicy.map((para, index) => (
        <p key={index} className="mb-6 text-lg leading-relaxed">{para}</p>
      ))}

      {/* DPO Contact Reasons */}
      <h3 className="text-xl font-semibold mt-8 mb-2">When to Contact the DPO:</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {dpoContactReasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      {/* Definitions Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Definitions</h2>
      <div className="space-y-4">
        {definitions.map(({ term, desc }, index) => (
          <p key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-600">{term}:</strong> {desc}
          </p>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Data Protection Principles </h2>
      <div className="space-y-4">
        {dataProtectionPrinciples.map(({ term, desc }, index) => (
          <p key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-600">{term}:</strong> {desc}
          </p>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Lawful Processing Grounds</h2>
      <div className="space-y-4">
        {lawfulProcessingGrounds.map(({ term, desc }, index) => (
          <p key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-600">{term}:</strong> {desc}
          </p>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Consent</h2>
      <div className="space-y-4">
        {consentDetails.map(({ term, desc }, index) => (
          <p key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-600">{term}:</strong> {desc}
          </p>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 border-b-2 border-blue-500 pb-2">Transparency Details</h2>
      <div className="space-y-4">
        {transparencyDetails.map(({ term, desc }, index) => (
          <p key={index} className="bg-white shadow-md p-4 rounded-lg border-l-4 border-blue-500">
            <strong className="text-blue-600">{term}:</strong> {desc}
          </p>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-2">When to Contact the DPO:</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {dataProtectionPolicy.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Purpose Limitation</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {purposeLimitation.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Data Minimization</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {dataMinimization.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Accuracy</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {accuracy.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Storage Limitation</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {storageLimitation.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Storage Limitation</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {storageLimitation.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Security Integrity Confidentiality</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {securityIntegrityConfidentiality.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Reporting Personal Data Breach</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {reportingPersonalDataBreach.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Transfer Limitation</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {transferLimitation.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Data Subject Rights Requests</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {dataSubjectRightsRequests.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Accountability</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {accountability.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Record Keeping</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {recordKeeping.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Training And Audit</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {trainingAndAudit.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Privacy By Design And DPIA</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {privacyByDesignAndDPIA.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Processing And ADM</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {processingAndADM.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Direct Marketing</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {directMarketing.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Sharing Personal Data</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {sharingPersonalData.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Caldicott Principles</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {caldicottPrinciples.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-2">Changes To Policy</h3>
      <ul className="list-disc list-inside space-y-2 pl-6 mb-6 text-lg">
        {changesToPolicy.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      </div>
    </div>
  );
};

export default Policy;
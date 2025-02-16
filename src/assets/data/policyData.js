const definitions = [
    { term: "Processing or Process", desc: "any activity that involves the use of Personal Data. It includes obtaining, recording, or holding the data or carrying out any operation or set of operations on the data, including organizing, amending, retrieving, using, disclosing, erasing, or destroying it. Processing also includes transmitting or transferring Personal Data to third parties." },
    { term: "Pseudonymization or Pseudonymized", desc: "replacing information that directly or indirectly identifies an individual with one or more artificial identifiers or pseudonyms so that the person to whom the data relates cannot be identified without the use of additional information which is meant to be kept separately and secure." },
    { term: "Related Policies", desc: "the Company's policies, operating procedures, or processes related to this Data Protection Policy and designed to protect Personal Data and available from your line manager or the DPO." },
    { term: "Special Categories of Personal Data", desc: "information revealing racial or ethnic origin, political opinions, religious or similar beliefs, trade union membership, physical or mental health conditions, sexual life, sexual orientation, biometric or genetic data. The Company will treat the following types of data as if they are Special Categories of Personal Data." }
  ];
  
  const introduction = [
    "This Data Protection Policy sets out how ('we', 'our', 'us', and 'the Company') handle the Personal Data of our students, their parents or carers, customers, prospective students, suppliers, employees, workers, business contacts, and other third parties.",
    "This Data Protection Policy applies to all Personal Data we Process regardless of the media on which that data is stored or whether it relates to past or present employees, workers, customers, clients or supplier contacts, shareholders, website users, or any other Data Subject.",
    "This Data Protection Policy applies to all Company Personnel ('you', 'your'). You must read, understand, and comply with this Data Protection Policy when Processing Personal Data on our behalf and attend training on its requirements. Data protection is the responsibility of everyone within the Company, and this Data Protection Policy sets out what we expect from you when handling Personal Data to enable the Company to comply with applicable law. Your compliance with this Data Protection Policy is mandatory. Related Policies and Privacy Guidelines are available to help you interpret and act in accordance with this Data Protection Policy. You must also comply with all those Related Policies and Privacy Guidelines. Any breach of this Data Protection Policy may result in disciplinary action.",
    "Where you have a specific responsibility in connection with Processing, such as capturing Consent, reporting a Personal Data Breach, or conducting a DPIA as referenced in this Data Protection Policy or otherwise, then you must comply with the Related Policies and Privacy Guidelines.",
    "This Data Protection Policy (together with Related Policies and Privacy Guidelines) is an internal document and cannot be shared with third parties, clients, or regulators without prior authorization from the DPO unless legally required to do so."
  ];
  
  const scopeOfPolicy = [
    "We recognize that the correct and lawful handling of Personal Data will maintain trust and confidence in the organization and will provide for successful business operations. Protecting the confidentiality and integrity of Personal Data is a critical responsibility we take seriously. The Company is exposed to potential fines of up to £17.5 million or 4% of total worldwide annual turnover, whichever is higher and depending on the breach, for failure to comply with the UK GDPR.",
    "All line managers and other responsible parties are responsible for ensuring all Company Personnel comply with this Data Protection Policy and must implement appropriate practices, processes, controls, and training to ensure compliance.",
    "The DPO oversees this Data Protection Policy and, as applicable, develops Related Policies and Privacy Guidelines. That post is held by Dr. Jasmin Thoria, and they can be reached at [INSERT TELEPHONE NUMBER] and [EMAIL ADDRESS].",
    "Please contact the DPO with any questions about the operation of this Data Protection Policy or the UK GDPR or if you have any concerns that this Data Protection Policy is not being or has not been followed. In particular, you must always contact the DPO in the following circumstances:"
  ];
  
  const dpoContactReasons = [
    "If you are unsure of the lawful basis on which you are relying to process Personal Data (including the legitimate interests used by the Company) (see paragraph 5.1).",
    "If you need to rely on Consent or need to capture Explicit Consent (see paragraph 6).",
    "If you need to draft Privacy Notices (see paragraph 7).",
    "If you are unsure about the retention period for the Personal Data being Processed (see paragraph 11).",
    "If you are unsure what security or other measures you need to implement to protect Personal Data (see paragraph 12.1).",
    "If there has been a Personal Data Breach (paragraph 13).",
    "If you are unsure on what basis to transfer Personal Data outside the UK (see paragraph 14).",
    "If you need any assistance dealing with any rights invoked by a Data Subject (see paragraph 15).",
    "Whenever you are engaging in a significant new or change in Processing activity that is likely to require a DPIA (see paragraph 19) or plan to use Personal Data for purposes other than for which it was collected (see paragraph 8).",
    "If you plan to undertake any activities involving Automated Processing, including profiling or Automated Decision-Making (see paragraph 20).",
    "If you need help complying with applicable law when carrying out direct marketing activities (see paragraph 21).",
    "If you need help with any contracts or other areas in relation to sharing Personal Data with third parties (including our vendors) (see paragraph 22)."
  ];

  const dataProtectionPrinciples = [
    { term: "Lawfulness, fairness, and transparency", desc: "Personal data must be processed lawfully, fairly, and in a transparent manner in relation to the Data Subject." },
    { term: "Purpose limitation", desc: "Personal data must be collected only for specified, explicit, and legitimate purposes." },
    { term: "Data minimization", desc: "Personal data must be adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed." },
    { term: "Accuracy", desc: "Personal data must be accurate and, where necessary, kept up to date." },
    { term: "Storage limitation", desc: "Personal data must not be kept in a form that permits the identification of Data Subjects for longer than necessary for the purposes for which the data is processed." },
    { term: "Security, integrity, and confidentiality", desc: "Personal data must be processed in a manner that ensures its security using appropriate technical and organizational measures." },
    { term: "Transfer limitation", desc: "Personal data must not be transferred to another country without appropriate safeguards in place." },
    { term: "Data subject's rights and requests", desc: "Personal data must be made available to Data Subjects, allowing them to exercise certain rights in relation to their personal data." },
    { term: "Accountability", desc: "The company must be able to demonstrate compliance with the data protection principles." }
  ];
  
  const lawfulProcessingGrounds = [
    { term: "Consent", desc: "The Data Subject has given their Consent to the processing of their personal data for one or more specific purposes." },
    { term: "Contract performance", desc: "Processing is necessary for the performance of a contract with the Data Subject." },
    { term: "Legal compliance", desc: "Processing is necessary for compliance with a legal obligation." },
    { term: "Vital interests", desc: "Processing is necessary to protect the vital interests of the Data Subject or another individual." },
    { term: "Legitimate interests", desc: "Processing is necessary for the purposes of legitimate interests pursued by the Controller or a third party, unless overridden by the Data Subject's interests or rights." }
  ];
  
  const consentDetails = [
    { term: "Affirmative action", desc: "Consent requires affirmative action, and silence, pre-ticked boxes, or inactivity will not be sufficient." },
    { term: "Withdrawal of consent", desc: "A Data Subject must be able to withdraw consent at any time, and the withdrawal must be promptly honored." },
    { term: "Separate from other matters", desc: "Consent must be clearly separated from other matters if included in a document dealing with other matters." }
  ];
  
  const transparencyDetails = [
    { term: "Privacy Notice", desc: "A Privacy Notice must be provided to Data Subjects detailing how, why, and by whom their personal data will be processed." },
    { term: "Direct collection", desc: "When personal data is collected directly from a Data Subject, a Privacy Notice must be provided at the time of collection." },
    { term: "Indirect collection", desc: "When personal data is collected from third parties, the Data Subject must be notified as soon as possible after collection." }
  ];
  
  const dataProtectionPolicy = [
    "This Data Protection Policy sets out how ('we', 'our', 'us', and 'the Company') handle the Personal Data of our students, their parents or carers, customers, prospective students, suppliers, employees, workers, business contacts, and other third parties.",
    "This Data Protection Policy applies to all Personal Data we Process regardless of the media on which that data is stored or whether it relates to past or present employees, workers, customers, clients or supplier contacts, shareholders, website users, or any other Data Subject.",
    "This Data Protection Policy applies to all Company Personnel ('you', 'your'). You must read, understand, and comply with this Data Protection Policy when Processing Personal Data on our behalf and attend training on its requirements.",
    "Where you have a specific responsibility in connection with Processing, such as capturing Consent, reporting a Personal Data Breach, or conducting a DPIA as referenced in this Data Protection Policy or otherwise, then you must comply with the Related Policies and Privacy Guidelines."
  ];


  const purposeLimitation = [
    "Personal Data must be collected only for specified, explicit and legitimate purposes. It must not be further Processed in any manner incompatible with those purposes.",
    "You cannot use Personal Data for new, different, or incompatible purposes from that disclosed when it was first obtained unless you have informed the Data Subject of the new purposes and they have Consented where necessary.",
    "If you want to use Personal Data for a new or different purpose from that for which it was obtained, you must first contact the DPO for advice on how to do this in compliance with both the law and this Data Protection Policy."
  ];

  const dataMinimization = [
    "Personal Data must be adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.",
    "You may only process personal data when performing your job duties that require it. You cannot Process Personal Data for any reason unrelated to your job duties.",
    "You may only collect Personal Data that you require for your job duties; do not collect excessive data. Ensure any Personal Data collected is adequate and relevant for the intended purposes.",
    "You must ensure that when Personal Data is no longer needed for specified purposes, it is deleted or anonymized in accordance with the Company's data retention guidelines."
  ];

  const accuracy = [
    "Personal Data must be accurate and, where necessary, kept up to date. It must be corrected or deleted without delay when inaccurate.",
    "You must ensure that the Personal Data we use and hold is accurate, complete, kept up to date, and relevant to the purpose for which we collected it. You must check the accuracy of any Personal Data at the point of collection and regular intervals afterward. You must take all reasonable steps to destroy or amend inaccurate or out-of-date Personal Data."
  ];

  const storageLimitation = [
    "Personal Data must not be kept in an identifiable form for longer than is necessary for the purposes for which the data is processed.",
    "The Company will maintain retention policies and procedures to ensure Personal Data is deleted after an appropriate time unless a law requires that data be kept for a minimum time. You must comply with the Company's Data Retention Policy.",
    "You must not keep Personal Data in a form that permits the identification of the Data Subject for longer than needed for the legitimate business purpose or purposes for which we originally collected it, including for the purpose of satisfying any legal, accounting, or reporting requirements.",
    "You will take all reasonable steps to destroy or erase from our systems all Personal Data that we no longer require in accordance with all the Company's applicable records retention schedules and policies. This includes requiring third parties to delete that data where relevant.",
    "You will provide Data Subjects with information about the period for which data is stored and how that period is determined in any applicable Privacy Notice."
  ];

  const securityIntegrityConfidentiality = [
    "Personal Data must be secured by appropriate technical and organizational measures against unauthorized or unlawful Processing and against accidental loss, destruction, or damage.",
    "We will develop, implement, and maintain safeguards appropriate to our size, scope and business, our available resources, the amount of Personal Data that we own or maintain on behalf of others, and identified risks (including use of encryption and Pseudonymization where applicable). We will regularly evaluate and test the effectiveness of those safeguards to ensure the security of our Processing of Personal Data. You are responsible for protecting the Personal Data we hold. You must implement reasonable and appropriate security measures against unlawful or unauthorized Processing of Personal Data and against the accidental loss of, or damage to, Personal Data. You must exercise particular care in protecting Special Categories of Personal Data and Criminal Convictions Data from loss and unauthorized access, use or disclosure.",
    "You must follow all procedures and technologies we put in place to maintain the security of all Personal Data from the point of collection to the point of destruction. You may only transfer Personal Data to third-party service providers who agree to comply with the required policies and procedures and who agree to put adequate measures in place, as requested.",
    "You must maintain data security by protecting the confidentiality, integrity and availability of the Personal Data, defined as follows: (a) Confidentiality: only people who have a need to know and are authorized to use the Personal Data can access it; (b) Integrity: Personal Data is accurate and suitable for the purpose for which it is processed and (c) Availability: Authorized users are able to access their personal data when they need it for authorized purposes.",
    "You must comply with and not attempt to circumvent the administrative, physical and technical safeguards we implement and maintain in accordance with the UK GDPR and relevant standards to protect Personal Data."
  ];

  const reportingPersonalDataBreach = [
    "The UK GDPR requires Controllers to notify any Personal Data Breach to the Information Commissioner and, in certain instances, the Data Subject.",
    "We have put in place procedures to deal with any suspected Personal Data Breach and will notify the Data Subject or any applicable regulator where we are legally required to do so.",
    "If you know or suspect that a Personal Data Breach has occurred, do not attempt to investigate the matter yourself. Immediately contact the person or team designated as the key point of contact for Personal Data Breaches or the DPO. You should preserve all evidence relating to the potential Personal Data Breach."
  ];


  const transferLimitation = [
    "The UK GDPR restricts data transfers to countries outside the UK to ensure that the level of data protection afforded to individuals by the UK GDPR is not undermined. You transfer Personal Data originating in one country across borders when you transmit, send, view or access that data in or to a different country.",
    "You must comply with the Company's guidelines on cross-border data transfers.",
    "You may only transfer Personal Data outside the UK if one of the following conditions applies:",
    "(a) the UK has issued regulations confirming that the country to which we transfer the Personal Data ensures an adequate level of protection for the Data Subject's rights and freedoms;",
    "(b) appropriate safeguards are in place, such as binding corporate rules, standard contractual clauses approved for use in the UK, an approved code of conduct, or a certification mechanism, a copy of which can be obtained from the DPO;",
    "(c) the Data Subject has provided Explicit Consent to the proposed transfer after being informed of any potential risks or",
    "(d) the transfer is necessary for one of the other reasons set out in the UK GDPR, including:",
    "(i) the performance of a contract between us and the Data Subject;",
    "(ii) reasons of public interest;",
    "(iii) to establish, exercise, or defend legal claims;",
    "(iv) to protect the vital interests of the Data Subject where the Data Subject is physically or legally incapable of giving Consent; and",
    "(v) in some limited cases, for our legitimate interest."
  ];

  const dataSubjectRightsRequests = [
    "A Data Subject has rights regarding how we handle their Personal Data. These include rights to:",
    "(a) withdraw Consent to Processing at any time;",
    "(b) receive certain information about the Controller's Processing activities;",
    "(c) request access to their Personal Data that we hold (including receiving a copy of their Personal Data);",
    "(d) prevent our use of their Personal Data for direct marketing purposes;",
    "(e) ask us to erase Personal Data if it is no longer necessary in relation to the purposes for which it was collected or Processed, to rectify inaccurate data, or to complete incomplete data;",
    "(f) restrict Processing in specific circumstances;",
    "(g) object to Processing which has been justified on the basis of our legitimate interests or in the public interest;",
    "(h) request a copy of an agreement under which Personal Data is transferred outside of the UK;",
    "(i) object to decisions based solely on Automated Processing, including profiling (ADM);",
    "(j) prevent Processing that is likely to cause damage or distress to the Data Subject or anyone else;",
    "(k) be notified of a Personal Data Breach which is likely to result in a high risk to their rights and freedoms;",
    "(l) make a complaint to the supervisory authority;",
    "(m) in limited circumstances, receive or ask for their Personal Data to be transferred to a third party in a structured, commonly used and machine-readable format; and",
    "(n) [ANY OTHER RIGHTS YOU MAY BE REQUIRED TO PROVIDE UNDER COMPANY POLICIES].",
    "You must verify the identity of an individual requesting data under any of the rights listed above (do not allow third-parties to persuade you into disclosing Personal Data without proper authorization).",
    "You must immediately forward any Data Subject request you receive to the DPO, and they must comply with the Company's Response procedures for data subject requests."
  ];

  const accountability = [
    "The Controller must implement appropriate technical and organizational measures effectively to ensure compliance with data protection principles. The Controller is responsible for and must be able to demonstrate compliance with the data protection principles.",
    "The Company must have adequate resources and controls in place to ensure and document UK GDPR compliance, including:",
    "(a) appointing a suitably qualified DPO (where necessary) and an executive accountable for data privacy;",
    "(b) implementing Privacy by Design when Processing Personal Data and completing DPIAs where Processing presents a high risk to the rights and freedoms of Data Subjects;",
    "(c) integrating data protection into internal documents, including this Data Protection Policy, Related Policies, Privacy Guidelines or Privacy Notices;",
    "(d) regularly training Company Personnel on the UK GDPR, this Data Protection Policy, Related Policies and Privacy Guidelines, and data protection matters including, for example, a Data Subject's rights, Consent, legal basis, DPIA, and Personal Data Breaches. The Company must maintain a record of training attendance by Company Personnel and",
    "(e) Regularly test the privacy measures implemented and conduct periodic reviews and audits to assess compliance, including using the results of testing to demonstrate compliance improvement efforts."
  ];


  const recordKeeping = [
    "The UK GDPR requires us to keep full and accurate records of all our data Processing activities.",
    "You must keep and maintain accurate corporate records reflecting our Processing, including records of Data Subjects' Consents and procedures for obtaining Consents in accordance with the Company's record-keeping guidelines.",
    "These records should include, at a minimum:",
    "(a) the name and contact details of the Controller and the DPO, and",
    "(b) clear descriptions of:",
    "(i) the Personal Data types;",
    "(ii) the Data Subject types;",
    "(iii) the Processing activities;",
    "(iv) the Processing purposes;",
    "(v) the third-party recipients of the Personal Data;",
    "(vi) the Personal Data storage locations;",
    "(vii) the Personal Data transfers;",
    "(viii) the Personal Data's retention period; and",
    "(ix) the security measures in place.",
    "To create the records, data maps should be created, which should include the details set out above together with appropriate data flows."
  ];

  const trainingAndAudit = [
    "We are required to ensure all Company Personnel have undergone adequate training to enable them to comply with data privacy laws. We must also regularly test our systems and processes to assess compliance.",
    "You must undergo all mandatory data privacy-related training and ensure your team undergo similar training [per the Company's mandatory training guidelines].",
    "You must regularly review all the systems and processes under your control to ensure they comply with this Data Protection Policy and check that adequate governance controls and resources are in place to ensure proper use and protection of Personal Data."
  ];

  const privacyByDesignAndDPIA = [
    "We are required to implement Privacy by Design measures when Processing Personal Data by implementing appropriate technical and organizational measures (like Pseudonymization) effectively to ensure compliance with data privacy principles.",
    "You must assess what Privacy by Design measures can be implemented on all programs, systems, or processes that Process Personal Data by taking into account the following:",
    "(a) The state of the art.",
    "(b) The cost of implementation.",
    "(c) The nature, scope, context, and purposes of Processing.",
    "(d) The risks of varying likelihood and severity for rights and freedoms of the Data Subject posed by the Processing.",
    "The Controller must also regularly and not less than annually conduct a DPIA with respect to high-risk Processing.",
    "You should conduct a DPIA (and discuss your findings with the DPO) annually and when implementing a college set-up and before implementing this Policy and any major system or business change programs involving the Processing of Personal Data, including:",
    "(a) Use of new technologies (programs, systems, or processes, including the use of AI) or changing technologies (programs, systems or processes).",
    "(b) Automated Processing, including profiling and ADM.",
    "(c) Large-scale Processing of Special Categories of Personal Data or Criminal Convictions Data.",
    "(d) Large-scale, systematic monitoring of a publicly accessible area.",
    "A DPIA must include:",
    "(a) A description of the Processing, its purposes and the Controller's legitimate interests if appropriate.",
    "(b) An assessment of the necessity and proportionality of the Processing in relation to its purpose.",
    "(c) An assessment of the risk to individuals.",
    "(d) The risk mitigation measures are in place, and compliance is demonstrated.",
    "You must comply with the Company's guidelines on DPIA and Privacy by Design."
  ];

  const processingAndADM = [
    "Generally, ADM is prohibited when a decision has a legal or similar significant effect on an individual unless:",
    "(a) a Data Subject has Explicitly Consented.",
    "(b) the Processing is authorized by law, or",
    "(c) the Processing is necessary for the performance of or entering a contract.",
    "If certain types of Special Categories of Personal Data or Criminal Convictions Data are being processed, then grounds (b) or (c) will not be allowed. However, the Special Categories of Personal Data and Criminal Convictions Data can be processed where necessary (unless less intrusive means can be used) for substantial public interest, like fraud prevention.",
    "If a decision is to be based solely on Automated Processing (including profiling), then the Data Subject must be informed when you first communicate with them of their right to object. This right must be explicitly brought to their attention and presented clearly and separately from other information. Further, suitable measures must be implemented to safeguard the Data Subject's rights, freedoms, and legitimate interests.",
    "We must also inform the Data Subject of the logic involved in the decision-making or profiling, the significance, and the envisaged consequences, and give the Data Subject the right to request human intervention, express their point of view, or challenge the decision.",
    "A DPIA must be carried out before any Automated Processing (including profiling) or ADM activities are undertaken.",
    "Where you are involved in any data Processing activity that involves profiling or ADM, you must consult with your DPO."
  ];

  const directMarketing = [
    "We are subject to certain rules and privacy laws when engaging in direct marketing to our customers and prospective customers (for example, when sending marketing emails or making telephone sales calls).",
    "For example, in a business-to-consumer context, a Data Subject's prior consent is generally required for direct electronic marketing (for example, by email, text, or automated calls). The limited exception for existing customers, known as 'soft opt-in', allows an organization to send marketing texts or emails without consent if it:",
    "(a) Has obtained contact details during a sale to that person.",
    "(b) Is marketing similar products or services.",
    "(c) Gave the person an opportunity to opt out of marketing when first collecting the details and in every subsequent marketing message.",
    "The right to object to direct marketing must be explicitly offered to the Data Subject in an intelligible manner so that it is clearly distinguishable from other information.",
    "A Data Subject's objection to direct marketing must always be promptly honored. If customers or patients opt out of marketing at any time, their details should be suppressed as soon as possible. Suppression involves retaining just enough information to ensure that marketing preferences are respected in the future.",
    "You must comply with the Company's guidelines on direct marketing to customers and patients, and you should consult your DPO if you are unsure of how to comply with either the Company's guidelines or the law."
  ];

  const sharingPersonalData = [
    "Generally, we are not allowed to share Personal Data with third parties unless certain safeguards and contractual arrangements have been put in place.",
    "You must comply with the Company's data-sharing guidelines with third parties.",
    "If the Practice is carrying out NHS dentistry, then please note the Guidelines at NHS England.",
    "Then the Company shall review the Data Protection requirements (and compatibility with this Policy) set out at www.digital.nhs.uk, which will change from time to time and is under our control, and a risk assessment shall be carried out regularly by the Company by the DPO at the following web site (subject to change) https://www.dsptoolkit.nhs.uk. The Company shall conduct an online self-assessment against the National Data Guardian’s 10 data security standards. Any failures in reaching those standards shall be immediately actioned by the Company and DPO.",
    "You may only share the Personal Data we hold with another employee, agent or representative of our group (which includes our subsidiaries and our ultimate holding company along with its subsidiaries) if the recipient has a job-related need to know the information and the transfer complies with any applicable cross-border transfer restrictions.",
    "You may only share the Personal Data we hold with third parties, such as our service providers, if:",
    "(a) they have a need to know the information for the purposes of providing the contracted services.",
    "(b) sharing the Personal Data complies with the Privacy Notice provided to the Data Subject and, if required, the Data Subject's Consent has been obtained.",
    "(c) the third party has agreed to comply with the required data security standards, policies and procedures and put adequate security measures in place.",
    "(d) the transfer complies with any applicable cross-border transfer restrictions and",
    "(e) a fully executed written contract that contains UK GDPR-approved third-party clauses has been obtained."
  ];

  const caldicottPrinciples = [
    "We and You follow the eight Caldicott principles for handling patient-identifiable information.",
    "1. Justify the purpose(s) of every proposed use or transfer.",
    "2. Don't use it unless it is necessary, and",
    "3. Use the minimum necessary.",
    "4. Access to it is on a strict need-to-know basis.",
    "5. Everyone with access to it is aware of their responsibilities and",
    "6. Understand and comply with the law.",
    "7. The Duty to share information can be as important as the duty to protect patient confidentiality.",
    "8. Inform patients and service users about how their confidential information is used."
  ];

  const changesToPolicy = [
    "We keep this Data Protection Policy under regular review."
  ];

  export { definitions, introduction, scopeOfPolicy, dpoContactReasons, dataProtectionPrinciples, lawfulProcessingGrounds, consentDetails, transparencyDetails, dataProtectionPolicy, purposeLimitation, dataMinimization, accuracy, storageLimitation, securityIntegrityConfidentiality, reportingPersonalDataBreach, transferLimitation, dataSubjectRightsRequests, accountability, recordKeeping, trainingAndAudit, privacyByDesignAndDPIA, processingAndADM, directMarketing, sharingPersonalData, caldicottPrinciples, changesToPolicy };







  
  
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

  


  
  export { definitions, introduction, scopeOfPolicy, dpoContactReasons, dataProtectionPrinciples, lawfulProcessingGrounds, consentDetails, transparencyDetails, dataProtectionPolicy };
  
  
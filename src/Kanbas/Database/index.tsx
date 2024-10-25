// src/Kanbas/Database/index.ts

// Course接口定义
export interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
    department?: string;
    credits?: number;
    author?: string;
  }
  
  // Assignment接口定义
  export interface Assignment {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
  }
  
  // Module接口定义
  export interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: Lesson[];
  }
  
  // Lesson接口定义
  export interface Lesson {
    _id: string;
    name: string;
    description: string;
  }
  
  // 导出courses数据
  export const courses = [
    {
      "_id": "RS101",
      "name": "Rocket Propulsion",
      "number": "RS4550",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15",
      "department": "D123",
      "credits": 4,
      "description": "This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work"
    },
    {
      "_id": "RS102",
      "name": "Aerodynamics",
      "number": "RS4560",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15",
      "department": "D123",
      "credits": 3,
      "description": "This course offers a comprehensive exploration of aerodynamics, focusing on the principles and applications of airflow and its effects on flying objects. Topics include fluid dynamics, airfoil design, lift and drag forces, and the aerodynamic considerations in aircraft design. The course blends theoretical learning with practical applications, suitable for students pursuing a career in aeronautics or astronautics engineering."
    },
    // ... 其他课程数据保持不变，直接从JSON复制
    {
        "_id": "RS103",
        "name": "Spacecraft Design",
        "number": "RS4570",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "D123",
        "credits": 4,
        "description": "This course delves into the principles and practices of spacecraft design, offering students a detailed understanding of the engineering and technology behind spacecraft systems. Key topics include spacecraft structure, propulsion, power systems, thermal control, and payload integration. Emphasizing both theoretical concepts and practical skills, the course prepares students for careers in the space industry, with a focus on innovative design and problem-solving in the context of current and future space missions"
      },
      {
        "_id": "RS104",
        "name": "Organic Chemistry",
        "number": "CH1230",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "D134",
        "credits": 3,
        "description": "Organic Chemistry is an in-depth course that explores the structure, properties, composition, and reactions of organic compounds and materials. The course covers various topics including hydrocarbons, functional groups, stereochemistry, and organic synthesis techniques. Students will learn about the mechanisms of organic reactions, spectroscopic methods for structure determination, and the role of organic chemistry in biological systems. Emphasis is placed on problem-solving and laboratory skills, preparing students for advanced studies in chemistry, medicine, and related fields."
      },
      {
        "_id": "RS105",
        "name": "Inorganic Chemistry",
        "number": "CH1240",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "D134",
        "credits": 3,
        "description": "Inorganic Chemistry focuses on the properties, structures, and behaviors of inorganic and organometallic compounds. This course covers a range of topics including coordination chemistry, metal complexes, bonding theories, symmetry, and crystal field theory. Students will also explore the role of inorganic chemistry in real-world applications such as catalysis, materials science, and bioinorganic processes. Laboratory work emphasizes synthesis and analysis of inorganic compounds, fostering a deeper understanding of theoretical concepts."
      },
      {
        "_id": "RS106",
        "name": "Physical Chemistry",
        "number": "CH1250",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "D134",
        "credits": 3,
        "description": "Physical Chemistry merges the principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and the chemical reactions they undergo. Key topics include thermodynamics, kinetics, quantum mechanics, and spectroscopy. The course provides a comprehensive understanding of molecular behavior, reaction dynamics, and the application of mathematical methods in solving chemical problems. Labs focus on experimental techniques and data analysis, equipping students with skills necessary for research and advanced study in chemistry and related fields."
      },
      {
        "_id": "RS107",
        "name": "Ancient Languages and Scripts of Middle-earth",
        "number": "ME101",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "Languages",
        "credits": 3,
        "description": "This course offers an exploration of the ancient languages and scripts found throughout Middle-earth, including Elvish (Sindarin and Quenya), Dwarvish (Khuzdul), and the Black Speech of Mordor. Students will learn the historical and cultural contexts of these languages, their linguistic structures, and their usage in various inscriptions and texts. Emphasis is on understanding the philological aspects and the role of language in shaping Middle-earth's history and lore.",
        "author": "654f9ec2ea7ead465908d1e3"
      },
      {
        "_id": "RS108",
        "name": "Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth",
        "number": "ME102",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "Political Studies",
        "credits": 4,
        "description": "This course explores the complex relationships and diplomatic interactions among the different races of Middle-earth: Elves, Men, Dwarves, and Wizards. Topics include the study of historical alliances, conflicts, and the role of leadership and wisdom in maintaining peace. Students will engage in discussions and case studies on key events in Middle-earth's history, such as the Council of Elrond and the War of the Ring, to understand the principles of diplomacy and conflict resolution in a multi-species context.",
        "author": "654f9ec2ea7ead465908d1e3"
      },
      {
        "_id": "RS109",
        "name": "History and Practice of Middle-earth Magic",
        "number": "ME103",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "Mystical Studies",
        "credits": 4,
        "description": "This course delves into the mystical and magical aspects of Middle-earth, examining the sources, practitioners, and manifestations of magic. Covering a range of magical beings, including Wizards, Elves, and Ents, as well as artifacts like the Rings of Power and Palantíri, students will learn about the philosophical and ethical dimensions of magic use. The course combines theoretical study with practical insights, offering a unique perspective on the magical forces that shape the events and destinies in the world of Middle-earth.",
        "author": "654f9ec2ea7ead465908d1e3"
      },
      {
        "_id": "RS110",
        "name": "Principles of Democratic Education",
        "number": "EDU201",
        "startDate": "2023-01-10",
        "endDate": "2023-05-15",
        "department": "Education",
        "credits": 3,
        "description": "This course examines the foundations of democratic education, emphasizing the role of education in fostering civic responsibility, critical thinking, and social equality. It explores historical and contemporary models of democratic schooling, the importance of participatory learning, and the development of educational systems that reflect democratic values. Students will engage in discussions on the challenges and opportunities of implementing democratic principles in diverse educational settings."
      },
  ];
  
  // 导出assignments数据
 // src/Kanbas/Database/index.ts
 export const assignments = [
  {
    _id: "A101",
    title: "Propulsion Assignment",
    course: "RS101",
    description: "Design a basic rocket propulsion system",
    points: 100,
    dueDate: "2024-05-13T23:59",
    availableFromDate: "2024-05-06T00:00", 
    availableUntilDate: "2024-05-13T23:59",
    published: true
  },
  {
    _id: "A102",
    title: "Combustion Analysis",
    course: "RS101",
    description: "Complete combustion analysis for rocket engines",
    points: 100,
    dueDate: "2024-05-20T23:59",
    availableFromDate: "2024-05-13T00:00",
    availableUntilDate: "2024-05-20T23:59",
    published: true
  },
  {
    _id: "A103",
    title: "Nozzle Design Project",
    course: "RS101",
    description: "Design an efficient rocket nozzle",
    points: 100,
    dueDate: "2024-05-27T23:59", 
    availableFromDate: "2024-05-20T00:00",
    availableUntilDate: "2024-05-27T23:59",
    published: true
  },
  {
    _id: "A201",
    title: "Aerodynamics Quiz",
    course: "RS102",
    description: "Quiz on basic aerodynamics principles",
    points: 50,
    dueDate: "2024-05-13T23:59",
    availableFromDate: "2024-05-06T00:00",
    availableUntilDate: "2024-05-13T23:59",
    published: true
  },
  {
    _id: "A202",
    title: "Flow Analysis",
    course: "RS102",
    description: "Analyze fluid flow patterns",
    points: 75,
    dueDate: "2024-05-20T23:59",
    availableFromDate: "2024-05-13T00:00",
    availableUntilDate: "2024-05-20T23:59",
    published: true
  },
  {
    _id: "A203",
    title: "Heating Analysis",
    course: "RS102",
    description: "Study heating effects in aerodynamics",
    points: 75,
    dueDate: "2024-05-27T23:59",
    availableFromDate: "2024-05-20T00:00",
    availableUntilDate: "2024-05-27T23:59",
    published: true
  },
  {
    _id: "A301",
    title: "Structural Design Task",
    course: "RS103",
    description: "Design spacecraft structural components",
    points: 100,
    dueDate: "2024-05-13T23:59",
    availableFromDate: "2024-05-06T00:00",
    availableUntilDate: "2024-05-13T23:59",
    published: true
  },
  {
    _id: "A302",
    title: "Orbital Calculations",
    course: "RS103",
    description: "Calculate orbital parameters",
    points: 50,
    dueDate: "2024-05-20T23:59",
    availableFromDate: "2024-05-13T00:00",
    availableUntilDate: "2024-05-20T23:59",
    published: true
  },
  {
    _id: "A303",
    title: "Systems Engineering Exam",
    course: "RS103",
    description: "Final exam on spacecraft systems",
    points: 100,
    dueDate: "2024-05-27T23:59",
    availableFromDate: "2024-05-20T00:00",
    availableUntilDate: "2024-05-27T23:59",
    published: true
  }
 ];
  
  // src/Kanbas/Database/index.ts
export const modules = [
    {
      _id: "M101",
      name: "Week 1",
      description: "Basic Concepts of Rocket Propulsion",
      course: "RS101",
      lessons: [
        {
          _id: "L101",
          name: "Introduction to Rocket Engines",
          description: "Overview of different types of rocket engines"
        },
        {
          _id: "L102",
          name: "Propulsion Fundamentals",
          description: "Basic principles of rocket propulsion"
        }
      ]
    },
    {
      _id: "M102",
      name: "Week 2",
      description: "Aerodynamics Fundamentals",
      course: "RS102",
      lessons: [
        {
          _id: "L201",
          name: "Introduction to Aerodynamics",
          description: "Basic concepts of aerodynamics"
        },
        {
          _id: "L202",
          name: "Fluid Dynamics",
          description: "Understanding fluid dynamics in aerospace"
        }
      ]
    },
    // ... 为每个课程添加更多模块
  ];

  // 定义User接口
export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
}

// 定义Enrollment接口
export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

// 导出users数据
export const users: User[] = [
  {
    "_id": "123",
    "username": "iron_man",
    "password": "stark123",
    "firstName": "Tony",
    "lastName": "Stark",
    "email": "tony@stark.com",
    "dob": "1970-05-29T00:00:00.000Z",
    "role": "FACULTY",
    "loginId": "001234561S",
    "section": "S101",
    "lastActivity": "2020-10-01",
    "totalActivity": "10:21:32"
  },
  {
    "_id": "234",
    "username": "dark_knight",
    "password": "wayne123",
    "firstName": "Bruce",
    "lastName": "Wayne",
    "email": "bruce@wayne.com",
    "dob": "1972-02-19",
    "role": "STUDENT",
    "loginId": "001234562S",
    "section": "S101",
    "lastActivity": "2020-11-02",
    "totalActivity": "15:32:43"
  },
  {
    "_id": "345",
    "username": "black_widow",
    "password": "romanoff123",
    "firstName": "Natasha",
    "lastName": "Romanoff",
    "email": "natasha@avengers.com",
    "dob": "1984-11-22",
    "role": "TA",
    "loginId": "001234564S",
    "section": "S101",
    "lastActivity": "2020-11-05",
    "totalActivity": "13:23:34"
  },
  {
    "_id": "456",
    "username": "thor_odinson",
    "password": "mjolnir123",
    "firstName": "Thor",
    "lastName": "Odinson",
    "email": "thor@asgard.com",
    "dob": "982-05-25",
    "role": "STUDENT",
    "loginId": "001234565S",
    "section": "S101",
    "lastActivity": "2020-12-01",
    "totalActivity": "11:22:33"
  },
  {
    "_id": "567",
    "username": "hulk_smash",
    "password": "banner123",
    "firstName": "Bruce",
    "lastName": "Banner",
    "email": "bruce@avengers.com",
    "dob": "1969-12-18",
    "role": "STUDENT",
    "loginId": "001234566S",
    "section": "S101",
    "lastActivity": "2020-12-01",
    "totalActivity": "22:33:44"
  },
  {
    "_id": "678",
    "username": "ring_bearer",
    "password": "shire123",
    "firstName": "Frodo",
    "lastName": "Baggins",
    "email": "frodo@shire.com",
    "dob": "1368-09-22",
    "role": "FACULTY",
    "loginId": "001234567S",
    "section": "S101",
    "lastActivity": "2020-12-02",
    "totalActivity": "44:33:22"
  },
  {
    "_id": "789",
    "username": "strider",
    "password": "aragorn123",
    "firstName": "Aragorn",
    "lastName": "Elessar",
    "email": "aragorn@gondor.com",
    "dob": "2931-03-01",
    "role": "TA",
    "loginId": "001234568S",
    "section": "S101",
    "lastActivity": "2020-12-04",
    "totalActivity": "12:23:34"
  },
  {
    "_id": "890",
    "username": "elf_archer",
    "password": "legolas123",
    "firstName": "Legolas",
    "lastName": "Greenleaf",
    "email": "legolas@mirkwood.com",
    "dob": "2879-07-15",
    "role": "STUDENT",
    "loginId": "001234569S",
    "section": "S101",
    "lastActivity": "2020-11-11",
    "totalActivity": "21:32:43"
  },
  {
    "_id": "777",
    "username": "ada",
    "password": "123",
    "firstName": "Ada",
    "lastName": "Lovelace",
    "email": "ada@lovelace.com",
    "dob": "1815-12-15",
    "role": "ADMIN",
    "loginId": "002143650S",
    "section": "S101",
    "lastActivity": "1852-11-27",
    "totalActivity": "21:32:43"
  }
];

// 导出enrollments数据
export const enrollments: Enrollment[] = [
  { "_id": "1", "user": "123", "course": "RS101" },
  { "_id": "2", "user": "234", "course": "RS101" },
  { "_id": "3", "user": "345", "course": "RS101" },
  { "_id": "4", "user": "456", "course": "RS101" },
  { "_id": "5", "user": "567", "course": "RS101" },
  { "_id": "6", "user": "234", "course": "RS102" },
  { "_id": "7", "user": "789", "course": "RS102" },
  { "_id": "8", "user": "890", "course": "RS102" },
  { "_id": "9", "user": "123", "course": "RS102" }
];
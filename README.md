# 🚀 K-10 EdTech Classroom Platform

An advanced, role-based Learning Management System (LMS) designed to deliver a strict, distraction-free, and personalized learning experience for students from **Class 1 to Class 10**. 

The platform enforces a strict navigational and data-access hierarchy: students only see their registered class, the specific subjects assigned to it, the accurate chapters of that subject, and the targeted content of a chosen chapter with zero outside clutter.

---

## 🌟 Key Features

* **Strict Role-Based Access Control (RBAC):** Students can only access the classroom environment corresponding to the specific class they selected during registration.
* **Granular Hierarchical Navigation Flow:** 
  * `Classroom Section` $\rightarrow$ Directly loads the student's registered class.
  * `Subject View` $\rightarrow$ Displays *only* the subjects mapped to that specific class.
  * `Chapter View` $\rightarrow$ Shows *only* the chapters belonging to the selected subject.
  * `Content View` $\rightarrow$ Renders the precise syllabus content for that specific chapter.
* **Comprehensive K-10 Curriculum Database:** Pre-loaded with complete syllabus trees, textbooks, and detailed topic breakdowns across Mathematics, Science, Environmental Studies (EVS), English, and Social Science.
* **Clean & Responsive UI:** Designed with modern layout practices for seamless accessibility across desktops, tablets, and mobile devices.

---

## 🏗️ System Architecture & Navigation Flow


[ User Registration ] ──> Stores Enrolled Class (e.g., Class 5)
│
▼
[ Classroom Dashboard ]
│
▼
[ Registered Class View ]
│
▼
[ Subject Selection ]
│
▼
[ Chapter Breakdown ]
│
▼
[ Chapter Content View ]


## 📚 Integrated Curriculum Overview

The platform features structured data mapping for **Classes 1 through 10** based on modern educational frameworks (NCERT / NCF guidelines):

* **Classes 1–5 (Primary):**
  * *Mathematics:* Math-Magic / Math Mela textbooks (Shapes, Numbers, Arithmetic, Fractions, Geometry, Measurement, Data Handling).
  * *Environmental Studies (EVS):* Myself, Family, School, Food, Animals, Water, Shelter, Neighborhood, Seasons, Earth & Sky, and Our Wondrous World modules.
  * *English:* Santoor textbooks focusing on reading, grammar, and foundational values.
* **Classes 6–8 (Middle School):**
  * *Mathematics:* Ganit Prakash (Algebra, Geometry, Integers, Rational Numbers, Exponents, Mensuration).
  * *Science:* Curiosity textbooks (Living World, Magnets, States of Water, Force & Pressure, Microorganisms, Light & Optics).
  * *Social Science:* Exploring Society: India and Beyond (Integrated History, Geography, Political Science, and Economics themes).
* **Classes 9–10 (Secondary School):**
  * *Mathematics:* Ganita Manjari / Advanced Algebra, Coordinate Geometry, Polynomials, Circles, Surface Areas & Volumes, Statistics & Probability.
  * *Science:* Unified Physics, Chemistry, and Biology modules (Chemical Reactions, Life Processes, Heredity, Electricity, Magnetic Effects).
  * *Social Science:* Contemporary India, Democratic Politics, Understanding Economic Development, and India and the Contemporary World.

---

## 🛠️ Tech Stack

*(Customize this section based on your actual tech stack)*
* **Frontend:** React.js / Next.js / Tailwind CSS
* **Backend:** Node.js / Express.js
* **Database:** MongoDB / PostgreSQL / Firebase Firestore
* **Authentication:** JWT / Firebase Auth

---

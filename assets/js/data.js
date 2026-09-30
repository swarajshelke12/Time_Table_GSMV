/**
 * Department of Computer Engineering - Timetable Data
 * Official schedule for SE1, SE2, TE1, TE2, BE
 * Maintained by Swaraj Shelke
 */

const TIME_SLOTS = [
  { id: 1, time: "9:00 - 10:00 AM", startMin: 540, endMin: 600 },
  { id: 2, time: "10:00 - 11:00 AM", startMin: 600, endMin: 660 },
  { id: "b1", isBreak: true, label: "Short Break", time: "11:00 - 11:15 AM", startMin: 660, endMin: 675 },
  { id: 3, time: "11:15 - 12:15 PM", startMin: 675, endMin: 735 },
  { id: 4, time: "12:15 - 1:15 PM", startMin: 735, endMin: 795 },
  { id: "b2", isBreak: true, label: "Lunch Break", time: "1:15 - 1:45 PM", startMin: 795, endMin: 825 },
  { id: 5, time: "1:45 - 2:45 PM", startMin: 825, endMin: 885 },
  { id: 6, time: "2:45 - 3:45 PM", startMin: 885, endMin: 945 }
];

const CLASS_CONFIG = {
  SE1: {
    name: "SE-1",
    title: "SE-1 Timetable",
    subtitle: "Second Year • Room E201",
    room: "Room E201",
    batches: ["ALL", "A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
  },
  SE2: {
    name: "SE-2",
    title: "SE-2 Timetable",
    subtitle: "Second Year • Room E202",
    room: "Room E202",
    batches: ["ALL", "A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
  },
  TE1: {
    name: "TE-1",
    title: "TE-1 Timetable",
    subtitle: "Third Year • Room E203",
    room: "Room E203",
    batches: ["ALL", "A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
  },
  TE2: {
    name: "TE-2",
    title: "TE-2 Timetable",
    subtitle: "Third Year • Room E204",
    room: "Room E204",
    batches: ["ALL"]
  },
  BE: {
    name: "BE",
    title: "BE Timetable",
    subtitle: "Final Year • Room E204",
    room: "Room E204",
    batches: ["ALL", "A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2"]
  }
};

const DAYS = [
  { id: 1, short: "Mon", full: "Monday" },
  { id: 2, short: "Tue", full: "Tuesday" },
  { id: 3, short: "Wed", full: "Wednesday" },
  { id: 4, short: "Thu", full: "Thursday" },
  { id: 5, short: "Fri", full: "Friday" }
];

const SCHEDULES = {
  // ==========================================
  // SE1 SCHEDULE (Room E201)
  // ==========================================
  SE1: {
    1: { // Monday
      1: { type: 'theory', code: 'OS', name: 'Operating Systems', prof: 'Mahesh Swami (MS)', room: 'E201' },
      2: { type: 'theory', code: 'OOPCG', name: 'OOP & Computer Graphics', prof: 'Kalyani Zore (KZ)', room: 'E201' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Mansi Singh', room: 'A101' },
          A2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Shreya Nehe', room: 'A101B' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Snehal Chaudhri', room: 'A204' },
          B2: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Ashvini Kheole', room: 'A102' },
          B3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Alka Kumbhar', room: 'A106A' },
          C1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Smita Sapkal', room: 'A106B' },
          C2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Jagruti Zope', room: 'A105' },
          C3: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Kalyani Zore', room: 'A105' }
        }
      },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Kalyani Zore', room: 'A105' },
          A2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Mansi Singh', room: 'A101A' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Alka Kumbhar', room: 'A106A' },
          B2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mahesh Swami', room: 'A104' },
          C1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Neelam Jadhav', room: 'A104' },
          C2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Smita Sapkal', room: 'A106B' },
          C3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
        }
      }
    },
    2: { // Tuesday
      1: { type: 'theory', code: 'DS', name: 'Data Structures', prof: 'Nilima Patil (NP)', room: 'E201' },
      2: { type: 'theory', code: 'OOPCG', name: 'OOP & Computer Graphics', prof: 'Kalyani Zore (KZ)', room: 'E201' },
      3: { type: 'theory', code: 'DELD', name: 'Digital Electronics & Logic Design', prof: 'Snehal Chaudhri (SC)', room: 'E201' },
      4: { type: 'theory', code: 'OS', name: 'Operating Systems', prof: 'Mahesh Swami (MS)', room: 'E201' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Mansi Singh', room: 'A101A' },
          A2: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Kalyani Zore', room: 'A105' },
          A3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Mansi Singh', room: 'A101B' },
          B1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Alka Kumbhar', room: 'A106A' },
          B3: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Ashvini Kheole', room: 'A102' },
          C1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Smita Sapkal', room: 'A106B' },
          C2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Jagruti Zope', room: 'A103' },
          C3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mahesh Swami', room: 'A104' }
        }
      }
    },
    3: { // Wednesday
      1: { type: 'theory', code: 'OOPCG', name: 'OOP & Computer Graphics', prof: 'Kalyani Zore (KZ)', room: 'E201' },
      2: { type: 'theory', code: 'DS', name: 'Data Structures', prof: 'Nilima Patil (NP)', room: 'E201' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Mansi Singh', room: 'A101B' },
          A3: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Kalyani Zore', room: 'A105' },
          B1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Snehal Chaudhri', room: 'A204' },
          B2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Alka Kumbhar', room: 'A106B' },
          B3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mahesh Swami', room: 'A104' },
          C1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C2: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Ashvini Kheole', room: 'A102' },
          C3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Smita Sapkal', room: 'A106A' }
        }
      },
      5: { type: 'theory', code: 'DM', name: 'Digital Marketing', prof: 'Dr. Maya Jadhav (Dr. MJ)', room: 'E201' },
      6: { type: 'theory', code: 'ED', name: 'Engineering Drawing', prof: 'Nilam Naidu (NN)', room: 'E201' }
    },
    4: { // Thursday
      1: { type: 'theory', code: 'DELD', name: 'Digital Electronics & Logic Design', prof: 'Snehal Chaudhri (SC)', room: 'E201' },
      2: { type: 'theory', code: 'DS', name: 'Data Structures', prof: 'Nilima Patil (NP)', room: 'E201' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Smita Sapkal', room: 'A106A' },
          A2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Shreya Nehe', room: 'A101B' },
          A3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Mansi Singh', room: 'A101A' },
          B1: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Kalyani Zore', room: 'A105' },
          B2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mahesh Swami', room: 'A104' },
          B3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Alka Kumbhar', room: 'A106B' },
          C1: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Ashvini Kheole', room: 'A102' },
          C2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Smita Sapkal', room: 'A106B' }
        }
      },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mansi Singh', room: 'A101A' },
          B1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Smita Sapkal', room: 'A106A' },
          C3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mahesh Swami', room: 'A104' }
        }
      }
    },
    5: { // Friday
      1: { type: 'theory', code: 'OS', name: 'Operating Systems', prof: 'Mahesh Swami (MS)', room: 'E201' },
      2: { type: 'theory', code: 'UHV', name: 'Universal Human Values', prof: 'Snehal Jagtap (SJ)', room: 'E201' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Smita Sapkal', room: 'A106B' },
          A2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Nilima Patil', room: 'A105' },
          B1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Alka Kumbhar', room: 'A106A' },
          B2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Mahesh Swami', room: 'A104' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Neelam Jadhav', room: 'A103' },
          C2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
        }
      },
      5: { type: 'theory', code: 'DM', name: 'Digital Marketing', prof: 'Dr. Maya Jadhav (Dr. MJ)', room: 'E201' },
      6: { type: 'theory', code: 'ED', name: 'Engineering Drawing', prof: 'Nilam Naidu (NN)', room: 'E201' }
    }
  },

  // ==========================================
  // SE2 SCHEDULE (Room E202)
  // ==========================================
  SE2: {
    1: { // Monday
      1: { type: 'theory', code: 'DS', name: 'Data Structures', prof: 'Prof. Alka Kumbhar (AAK)', room: 'E202' },
      2: { type: 'theory', code: 'OS', name: 'Operating Systems', prof: 'Prof. Smita Sapkal (SS)', room: 'E202' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Nilima Patil', room: 'Lab A101' },
          A2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Shreya Nehe', room: 'Room A101B' },
          A3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          B1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Smita Kathar', room: 'Room A204' },
          B2: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Ashvini Kheole', room: 'Lab A102' },
          B3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Alka Kumbhar', room: 'Lab A106A' },
          C1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Smita Sapkal', room: 'Lab A106B' },
          C2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Jagruti Zope', room: 'Room A105' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Nilima Patil', room: 'Lab A101A' },
          A3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          B1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Alka Kumbhar', room: 'Lab A106A' },
          B2: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          B3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Mahesh Swami', room: 'Room A104' },
          C1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Neelam Jadhav', room: 'Room A104' },
          C2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Smita Sapkal', room: 'Lab A106B' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      }
    },
    2: { // Tuesday
      1: { type: 'theory', code: 'OS', name: 'Operating Systems', prof: 'Prof. Smita Sapkal (SS)', room: 'E202' },
      2: { type: 'theory', code: 'OOPCG', name: 'OOP & Computer Graphics', prof: 'Prof. Ashvini Kheole (APK)', room: 'E202' },
      3: { type: 'theory', code: 'DS', name: 'Data Structures', prof: 'Prof. Alka Kumbhar (AAK)', room: 'E202' },
      4: { type: 'theory', code: 'DELD', name: 'Digital Electronics & Logic Design', prof: 'Prof. Smita Kathar (SK)', room: 'E202' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Nilima Patil', room: 'Lab A101A' },
          A2: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Kalyani Zore', room: 'Lab A105' },
          A3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Nilima Patil', room: 'Lab A101B' },
          B1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          B2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Alka Kumbhar', room: 'Lab A106A' },
          B3: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Ashvini Kheole', room: 'Lab A102' },
          C1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Smita Sapkal', room: 'Lab A106B' },
          C2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Jagruti Zope', room: 'Room A103' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      }
    },
    3: { // Wednesday
      1: { type: 'theory', code: 'OS', name: 'Operating Systems', prof: 'Prof. Smita Sapkal (SS)', room: 'E202' },
      2: { type: 'theory', code: 'OOPCG', name: 'OOP & Computer Graphics', prof: 'Prof. Ashvini Kheole (APK)', room: 'E202' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Nilima Patil', room: 'Lab A101' },
          A3: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Kalyani Zore', room: 'Lab A105' },
          B1: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Smita Kathar', room: 'Room A204' },
          B2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Alka Kumbhar', room: 'Lab A106B' },
          B3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Mahesh Swami', room: 'Room A104' },
          C1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C2: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Ashvini Kheole', room: 'Lab A102' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      },
      5: { type: 'theory', code: 'DM', name: 'Digital Marketing', prof: 'Dr. Maya Jadhav (Dr. MJ)', room: 'Common Room' },
      6: { type: 'theory', code: 'ED', name: 'Engineering Design', prof: 'Prof. Nilam Naidu (NN)', room: 'Common Room' }
    },
    4: { // Thursday
      1: { type: 'theory', code: 'OOPCG', name: 'OOP & Computer Graphics', prof: 'Prof. Ashvini Kheole (APK)', room: 'E202' },
      2: { type: 'theory', code: 'DELD', name: 'Digital Electronics & Logic Design', prof: 'Prof. Smita Kathar (SK)', room: 'E202' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Shreya Nehe', room: 'Room A101B' },
          A3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Nilima Patil', room: 'Lab A101A' },
          B1: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Kalyani Zore', room: 'Lab A105' },
          B2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Mahesh Swami', room: 'Room A104' },
          B3: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Alka Kumbhar', room: 'Lab A106B' },
          C1: { code: 'OOPCG Lab', name: 'OOP & Graphics Lab', prof: 'Prof. Ashvini Kheole', room: 'Lab A102' },
          C2: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A2: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Nilima Patil', room: 'Room A101A' },
          B1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          B2: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          B3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C2: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Smita Sapkal', room: 'Lab A106A' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      }
    },
    5: { // Friday
      1: { type: 'theory', code: 'UHV', name: 'Universal Human Values', prof: 'Prof. Neelam Jadhav (NJ)', room: 'E202' },
      2: { type: 'theory', code: 'DS', name: 'Data Structures', prof: 'Prof. Alka Kumbhar (AAK)', room: 'E202' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A2: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          A3: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Nilima Patil', room: 'Room A105' },
          B1: { code: 'DS Lab', name: 'Data Structures Lab', prof: 'Prof. Alka Kumbhar', room: 'Lab A106A' },
          B2: { code: 'CEP', name: 'Computer Engg Project', prof: 'Prof. Mahesh Swami', room: 'Room A104' },
          B3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C1: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C2: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' },
          C3: { code: 'Library', name: 'Library / Self Study', prof: 'Self-Study', room: 'Library' }
        }
      },
      5: { type: 'theory', code: 'DM', name: 'Digital Marketing', prof: 'Dr. Maya Jadhav (Dr. MJ)', room: 'Common Room' },
      6: { type: 'theory', code: 'ED', name: 'Engineering Design', prof: 'Prof. Nilam Naidu (NN)', room: 'Common Room' }
    }
  },

  // ==========================================
  // TE1 SCHEDULE (Room E203)
  // ==========================================
  TE1: {
    1: { // Monday
      "1-2": {
        type: 'practical',
        title: 'Practical Sessions (Slots 1-2: 9:00 AM - 11:00 AM)',
        batches: {
          A1: { code: 'AI Lab', name: 'AI Lab', prof: 'Pradnya Kothawade', room: 'A103' },
          A2: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Sangeetha Navale', room: 'A104' },
          A3: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Surekha Dhumal', room: 'A101A' },
          B1: { code: 'R&A', name: 'Robotics & Automation', prof: 'Snehal Jagtap', room: 'A102' },
          B2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B3: { code: 'AI Lab', name: 'AI Lab', prof: 'Jagruti Zope', room: 'A106A' },
          C1: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Snehal Chaudhri', room: 'A204' },
          C2: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Rahul Korke', room: 'A101B' },
          C3: { code: 'R&A', name: 'Robotics & Automation', prof: 'Ashvini Kheole', room: 'A106B' }
        }
      },
      3: { type: 'theory', code: 'OE', name: 'Open Elective', prof: '-', room: 'E203' },
      4: { type: 'theory', code: 'EL-I', name: 'Elective I (Cloud Computing)', prof: 'Surekha Dhumal (SD)', room: 'E203' },
      5: { type: 'theory', code: 'TOC', name: 'Theory of Computation', prof: 'Pradnya Kothawade (PK)', room: 'E203' },
      6: { type: 'theory', code: 'CNS', name: 'Computer Network Security', prof: 'Sangeetha Navale (SN)', room: 'E203' }
    },
    2: { // Tuesday
      "1-2": {
        type: 'practical',
        title: 'Practical Sessions (Slots 1-2: 9:00 AM - 11:00 AM)',
        batches: {
          A1: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Sangeetha Navale', room: 'A104' },
          A2: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Surekha Dhumal', room: 'A101A' },
          A3: { code: 'R&A', name: 'Robotics & Automation', prof: 'Shreya Nehe', room: 'A102' },
          B1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B2: { code: 'AI Lab', name: 'AI Lab', prof: 'Jagruti Zope', room: 'A103' },
          B3: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Snehal Chaudhri', room: 'A204' },
          C1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C2: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Mahesh Swami', room: 'A105' },
          C3: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Rahul Korke', room: 'A101B' }
        }
      },
      3: { type: 'theory', code: 'AI', name: 'Artificial Intelligence', prof: 'Jagruti Zope (JZ)', room: 'E203' },
      4: { type: 'theory', code: 'TOC', name: 'Theory of Computation', prof: 'Pradnya Kothawade (PK)', room: 'E203' },
      5: { type: 'theory', code: 'CNS', name: 'Computer Network Security', prof: 'Sangeetha Navale (SN)', room: 'E203' },
      6: { type: 'theory', code: 'Technical Seminar', name: 'Technical Seminar', prof: '-', room: 'E203' }
    },
    3: { // Wednesday
      "1-2": {
        type: 'practical',
        title: 'Practical Sessions (Slots 1-2: 9:00 AM - 11:00 AM)',
        batches: {
          A1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A2: { code: 'R&A', name: 'Robotics & Automation', prof: 'Snehal Jagtap', room: 'A102' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'AI Lab', name: 'AI Lab', prof: 'Pradnya Kothawade', room: 'A103' },
          B2: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Surekha Dhumal', room: 'A101A' },
          B3: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Smita Kathar', room: 'A204' },
          C1: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Rahul Korke', room: 'A101B' },
          C2: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Mahesh Swami', room: 'A105' },
          C3: { code: 'AI Lab', name: 'AI Lab', prof: 'Jagruti Zope', room: 'A106A' }
        }
      },
      3: { type: 'theory', code: 'TOC', name: 'Theory of Computation', prof: 'Pradnya Kothawade (PK)', room: 'E203' },
      4: { type: 'theory', code: 'CNS', name: 'Computer Network Security', prof: 'Sangeetha Navale (SN)', room: 'E203' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Surekha Dhumal', room: 'A101A' },
          A2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B2: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Snehal Chaudhri', room: 'A204' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'AI Lab', name: 'AI Lab', prof: 'Jagruti Zope', room: 'A106A' },
          C2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
        }
      }
    },
    4: { // Thursday
      "1-2": {
        type: 'practical',
        title: 'Practical Sessions (Slots 1-2: 9:00 AM - 11:00 AM)',
        batches: {
          A1: { code: 'R&A', name: 'Robotics & Automation', prof: 'Snehal Jagtap', room: 'A102' },
          A2: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Sangeetha Navale', room: 'A104' },
          A3: { code: 'AI Lab', name: 'AI Lab', prof: 'Pradnya Kothawade', room: 'A103' },
          B1: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Kalyani Zore', room: 'A105' },
          B2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B3: { code: 'R&A', name: 'Robotics & Automation', prof: 'Sangeetha Navale', room: 'A104' },
          C1: { code: 'R&A', name: 'Robotics & Automation', prof: 'Surekha Dhumal', room: 'A101B' },
          C2: { code: 'AI Lab', name: 'AI Lab', prof: 'Jagruti Zope', room: 'A106A' },
          C3: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Mahesh Swami', room: 'A106B' }
        }
      },
      3: { type: 'theory', code: 'OE', name: 'Open Elective', prof: '-', room: 'E203' },
      4: { type: 'theory', code: 'AI', name: 'Artificial Intelligence', prof: 'Jagruti Zope (JZ)', room: 'E203' },
      5: { type: 'theory', code: 'EL-I', name: 'Elective I (Cloud Computing)', prof: 'Surekha Dhumal (SD)', room: 'E203' },
      6: { type: 'theory', code: 'Technical Seminar', name: 'Technical Seminar', prof: '-', room: 'E203' }
    },
    5: { // Friday
      "1-2": {
        type: 'practical',
        title: 'Practical Sessions (Slots 1-2: 9:00 AM - 11:00 AM)',
        batches: {
          A1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A2: { code: 'AI Lab', name: 'AI Lab', prof: 'Pradnya Kothawade', room: 'A103' },
          A3: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Ashvini Kheole', room: 'A102' },
          B1: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Surekha Dhumal', room: 'A101A' },
          B2: { code: 'R&A', name: 'Robotics & Automation', prof: 'Sangeetha Navale', room: 'A104' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Snehal Chaudhri', room: 'A204' },
          C2: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Surekha Dhumal', room: 'A101B' },
          C3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
        }
      },
      3: { type: 'theory', code: 'AI', name: 'Artificial Intelligence', prof: 'Jagruti Zope (JZ)', room: 'E203' },
      4: { type: 'theory', code: 'EL-I', name: 'Elective I (Cloud Computing)', prof: 'Surekha Dhumal (SD)', room: 'E203' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Sangeetha Navale', room: 'A104' },
          A2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A3: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Ashvini Kheole', room: 'A102' },
          B1: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Kalyani Zore', room: 'A105' },
          B2: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Snehal Chaudhri', room: 'A204' },
          B3: { code: 'CC Lab', name: 'Cloud Computing Lab', prof: 'Rahul Korke', room: 'A101B' },
          C1: { code: 'R&A', name: 'Robotics & Automation', prof: 'Surekha Dhumal', room: 'A101A' },
          C2: { code: 'R&A', name: 'Robotics & Automation', prof: 'Surekha Dhumal', room: 'A101A' },
          C3: { code: 'CN Lab', name: 'Computer Network Lab', prof: 'Mahesh Swami', room: 'A103' }
        }
      }
    }
  },

  // ==========================================
  // TE2 SCHEDULE (Room E204)
  // ==========================================
  TE2: {
    1: { // Monday
      4: { type: 'theory', code: 'CNS', name: 'Computer Network Security', prof: 'Sangeetha Navale (SN)', room: 'E204' },
      5: { type: 'theory', code: 'AI', name: 'Artificial Intelligence', prof: 'Jagruti Zope (JZ)', room: 'E204' },
      6: { type: 'theory', code: 'EL-I', name: 'Elective I (Cloud Computing)', prof: 'Surekha Dhumal (SD)', room: 'E204' }
    },
    2: { // Tuesday
      3: { type: 'theory', code: 'TOC', name: 'Theory of Computation', prof: 'Pradnya Kothawade (PK)', room: 'E204' },
      4: { type: 'theory', code: 'AI', name: 'Artificial Intelligence', prof: 'Jagruti Zope (JZ)', room: 'E204' },
      5: { type: 'theory', code: 'EL-I', name: 'Elective I (Cloud Computing)', prof: 'Surekha Dhumal (SD)', room: 'E204' }
    },
    3: { // Wednesday
      3: { type: 'theory', code: 'AI', name: 'Artificial Intelligence', prof: 'Jagruti Zope (JZ)', room: 'E204' },
      4: { type: 'theory', code: 'EL-I', name: 'Elective I (Cloud Computing)', prof: 'Surekha Dhumal (SD)', room: 'E204' }
    },
    4: { // Thursday
      4: { type: 'theory', code: 'TOC', name: 'Theory of Computation', prof: 'Pradnya Kothawade (PK)', room: 'E204' },
      5: { type: 'theory', code: 'CNS', name: 'Computer Network Security', prof: 'Sangeetha Navale (SN)', room: 'E204' }
    },
    5: { // Friday
      3: { type: 'theory', code: 'TOC', name: 'Theory of Computation', prof: 'Pradnya Kothawade (PK)', room: 'E204' },
      4: { type: 'theory', code: 'CN', name: 'Computer Networks', prof: 'Sangeetha Navale (SN)', room: 'E204' }
    }
  },

  // ==========================================
  // BE SCHEDULE (Room E204)
  // ==========================================
  BE: {
    1: { // Monday
      1: { type: 'theory', code: 'DAA', name: 'Design & Analysis of Algorithms', prof: 'Ratnaraj Jambi (RJ)', room: 'E204' },
      2: { type: 'theory', code: 'BCT', name: 'Blockchain Technology', prof: 'Shreya Nehe (SHN)', room: 'E204' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'ML & DAA Lab', name: 'ML & DAA Lab', prof: 'Neelam Jadhav', room: 'A106A' },
          A2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B2: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Rahul Korke', room: 'A101A' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'BCT Lab', name: 'Blockchain Tech Lab', prof: 'Shreya Nehe', room: 'A101B' },
          C2: { code: 'ML Lab', name: 'Machine Learning Lab', prof: 'Neelam Jadhav', room: 'A106B' }
        }
      },
      5: { type: 'theory', code: 'PS-1', name: 'Project Stage 1', prof: '-', room: 'E204' }
    },
    2: { // Tuesday
      1: { type: 'theory', code: 'DAA', name: 'Design & Analysis of Algorithms', prof: 'Ratnaraj Jambi (RJ)', room: 'E204' },
      2: { type: 'theory', code: 'EL-IV-STQA', name: 'Software Testing & QA (Elective IV)', prof: 'Snehal Jagtap (SJ)', room: 'E204' },
      "3-4": {
        type: 'practical',
        title: 'Practical Sessions (Slots 3-4: 11:15 AM - 1:15 PM)',
        batches: {
          A1: { code: 'BCT Lab', name: 'Blockchain Tech Lab', prof: 'Shreya Nehe', room: 'A101B' },
          A2: { code: 'ML & DAA Lab', name: 'ML & DAA Lab', prof: 'Neelam Jadhav', room: 'A106B' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Snehal Jagtap', room: 'A102' },
          B2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C2: { code: 'BCT Lab', name: 'Blockchain Tech Lab', prof: 'Shreya Nehe', room: 'A101A' }
        }
      },
      5: { type: 'theory', code: 'ML', name: 'Machine Learning', prof: 'Neelam Jadhav (NJ)', room: 'E204' },
      6: { type: 'theory', code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
    },
    3: { // Wednesday
      1: { type: 'theory', code: 'DAA', name: 'Design & Analysis of Algorithms', prof: 'Ratnaraj Jambi (RJ)', room: 'E204' },
      2: { type: 'theory', code: 'ML', name: 'Machine Learning', prof: 'Neelam Jadhav (NJ)', room: 'E204' },
      3: { type: 'theory', code: 'EL-IV-STQA', name: 'Software Testing & QA (Elective IV)', prof: 'Snehal Jagtap (SJ)', room: 'E204' },
      4: { type: 'theory', code: 'EL-III', name: 'Elective III (CSDF)', prof: 'Rahul Korke (RK)', room: 'E204' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Snehal Jagtap', room: 'A102' },
          A2: { code: 'BCT Lab', name: 'Blockchain Tech Lab', prof: 'Shreya Nehe', room: 'A101B' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'ML Lab', name: 'Machine Learning Lab', prof: 'Neelam Jadhav', room: 'A106B' },
          B2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C2: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Rahul Korke', room: 'A101A' }
        }
      }
    },
    4: { // Thursday
      1: { type: 'theory', code: 'BCT', name: 'Blockchain Technology', prof: 'Shreya Nehe (SHN)', room: 'E204' },
      2: { type: 'theory', code: 'EL-III', name: 'Elective III (CSDF)', prof: 'Rahul Korke (RK)', room: 'E204' },
      3: { type: 'theory', code: 'PS-1', name: 'Project Stage 1', prof: '-', room: 'E204' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A2: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Snehal Jagtap', room: 'A102' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'BCT Lab', name: 'Blockchain Tech Lab', prof: 'Shreya Nehe', room: 'A101B' },
          B2: { code: 'ML Lab', name: 'Machine Learning Lab', prof: 'Neelam Jadhav', room: 'A106B' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Rahul Korke', room: 'A101A' },
          C2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
        }
      }
    },
    5: { // Friday
      1: { type: 'theory', code: 'EL-III', name: 'Elective III (CSDF)', prof: 'Rahul Korke (RK)', room: 'E204' },
      2: { type: 'theory', code: 'ML', name: 'Machine Learning', prof: 'Neelam Jadhav (NJ)', room: 'E204' },
      3: { type: 'theory', code: 'BCT', name: 'Blockchain Technology', prof: 'Shreya Nehe (SHN)', room: 'E204' },
      4: { type: 'theory', code: 'EL-IV-STQA', name: 'Software Testing & QA (Elective IV)', prof: 'Snehal Jagtap (SJ)', room: 'E204' },
      "5-6": {
        type: 'practical',
        title: 'Practical Sessions (Slots 5-6: 1:45 PM - 3:45 PM)',
        batches: {
          A1: { code: 'LPIV', name: 'Laboratory Practice IV', prof: 'Snehal Jagtap', room: 'A102' },
          A2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          A3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B1: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          B2: { code: 'BCT Lab', name: 'Blockchain Tech Lab', prof: 'Shreya Nehe', room: 'A101B' },
          B3: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' },
          C1: { code: 'ML Lab', name: 'Machine Learning Lab', prof: 'Neelam Jadhav', room: 'A106B' },
          C2: { code: 'Self Study', name: 'Library / Self Study', prof: '-', room: 'Library' }
        }
      }
    }
  }
};

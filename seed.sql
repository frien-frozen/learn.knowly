-- LMS Platform Seed Data
-- Sample data for Cambridge IGCSE (Math 0580, Physics 0625)

-- Insert Curriculums
INSERT INTO curriculums (title, slug, icon, color, description) VALUES
('Cambridge IGCSE', 'igcse', 'GraduationCap', '#D92D20', 'International General Certificate of Secondary Education'),
('A-Levels', 'a-levels', 'Star', '#FFFFFF', 'Advanced Level qualifications'),
('Pearson Edexcel', 'pearson', 'BookOpen', '#FDB022', 'Pearson Edexcel International qualifications'),
('Cambridge Lower Secondary', 'lower-secondary', 'Book', '#8B5CF6', 'Cambridge Lower Secondary');

-- Insert Subjects for Cambridge IGCSE
INSERT INTO subjects (curriculum_id, title, slug, code, description, icon, color) VALUES
-- IGCSE Subjects (ID 1)
(1, 'Mathematics', 'mathematics-0580', '0580', 'Core and Extended Mathematics', 'Calculator', '#D92D20'),
(1, 'Physics', 'physics-0625', '0625', 'Theory and Practical Physics', 'Atom', '#3B82F6'),
(1, 'Chemistry', 'chemistry-0620', '0620', 'Theory and Practical Chemistry', 'FlaskConical', '#10B981'),
(1, 'Biology', 'biology-0610', '0610', 'Theory and Practical Biology', 'Dna', '#8B5CF6');

-- Insert Combined Subjects (A-Levels, Lower Sec, Pearson)
-- Note: Using subqueries to resolve IDs dynamically as per prompt request logic transformed to single insert block for simplicity if IDs were known, but keeping it standard.
-- Actually, since we're re-writing seed.sql, we can rely on order. 
-- 1: IGCSE, 2: A-Levels, 3: Pearson, 4: Lower Secondary

INSERT INTO subjects (curriculum_id, title, slug, code, icon, color) VALUES
-- A-Levels (ID 2)
(2, 'Mathematics', 'math-alevel', '9709', 'Calculator', '#D92D20'),
(2, 'Physics', 'physics-alevel', '9702', 'Zap', '#3B82F6'),
(2, 'Computer Science', 'cs-alevel', '9618', 'Laptop', '#10B981'),

-- Pearson (ID 3)
(3, 'International GCSE Math', 'math-igcse-edexcel', '4MA1', 'Calculator', '#FDB022'),

-- Lower Secondary (ID 4)
(4, 'Mathematics', 'math-lower', '1112', 'Calculator', '#8B5CF6'),
(4, 'Science', 'science-lower', '1113', 'FlaskConical', '#10B981'),
(4, 'English', 'english-lower', '1111', 'PenTool', '#F43F5E');

-- Mathematics 0580 - Units
INSERT INTO units (subject_id, title, order_index) VALUES
(1, '1. Number', 1),
(1, '2. Algebra and Graphs', 2),
(1, '3. Coordinate Geometry', 3),
(1, '4. Geometry', 4),
(1, '5. Mensuration', 5),
(1, '6. Trigonometry', 6),
(1, '7. Vectors and Transformations', 7),
(1, '8. Probability', 8),
(1, '9. Statistics', 9);

-- Mathematics - Lessons for Unit 1 (Number)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(1, '1.1 Types of Numbers', 'types-of-numbers', 1),
(1, '1.2 Ordering and Rounding', 'ordering-and-rounding', 2),
(1, '1.3 Fractions, Decimals and Percentages', 'fractions-decimals-percentages', 3),
(1, '1.4 Powers and Roots', 'powers-and-roots', 4),
(1, '1.5 Standard Form', 'standard-form', 5),
(1, '1.6 Ratio and Proportion', 'ratio-and-proportion', 6);

-- Mathematics - Lessons for Unit 2 (Algebra and Graphs)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(2, '2.1 Algebraic Notation and Manipulation', 'algebraic-notation', 1),
(2, '2.2 Linear Equations', 'linear-equations', 2),
(2, '2.3 Simultaneous Equations', 'simultaneous-equations', 3),
(2, '2.4 Quadratic Equations', 'quadratic-equations', 4),
(2, '2.5 Graphs of Functions', 'graphs-of-functions', 5);

-- Mathematics - Lessons for Unit 3 (Coordinate Geometry)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(3, '3.1 Coordinates in 2D', 'coordinates-2d', 1),
(3, '3.2 Straight Line Graphs', 'straight-line-graphs', 2),
(3, '3.3 Gradients and Intercepts', 'gradients-intercepts', 3);

-- Physics 0625 - Units
INSERT INTO units (subject_id, title, order_index) VALUES
(2, '1. General Physics', 1),
(2, '2. Thermal Physics', 2),
(2, '3. Properties of Waves', 3),
(2, '4. Electricity and Magnetism', 4),
(2, '5. Atomic Physics', 5);

-- Physics - Lessons for Unit 1 (General Physics)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(10, '1.1 Length and Time', 'length-and-time', 1),
(10, '1.2 Speed, Velocity and Acceleration', 'speed-velocity-acceleration', 2),
(10, '1.3 Mass and Weight', 'mass-and-weight', 3),
(10, '1.4 Density', 'density', 4),
(10, '1.5 Forces', 'forces', 5),
(10, '1.6 Momentum', 'momentum', 6),
(10, '1.7 Energy, Work and Power', 'energy-work-power', 7),
(10, '1.8 Pressure', 'pressure', 8);

-- Physics - Lessons for Unit 2 (Thermal Physics)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(11, '2.1 Simple Kinetic Molecular Model of Matter', 'kinetic-molecular-model', 1),
(11, '2.2 Thermal Properties', 'thermal-properties', 2),
(11, '2.3 Thermal Processes', 'thermal-processes', 3);

-- Physics - Lessons for Unit 3 (Properties of Waves)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(12, '3.1 General Wave Properties', 'general-wave-properties', 1),
(12, '3.2 Light', 'light', 2),
(12, '3.3 Electromagnetic Spectrum', 'electromagnetic-spectrum', 3),
(12, '3.4 Sound', 'sound', 4);

-- Physics - Lessons for Unit 4 (Electricity and Magnetism)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(13, '4.1 Simple Phenomena of Magnetism', 'magnetism', 1),
(13, '4.2 Electrical Quantities', 'electrical-quantities', 2),
(13, '4.3 Electric Circuits', 'electric-circuits', 3),
(13, '4.4 Digital Electronics', 'digital-electronics', 4),
(13, '4.5 Electromagnetic Effects', 'electromagnetic-effects', 5);

-- Physics - Lessons for Unit 5 (Atomic Physics)
INSERT INTO lessons (unit_id, title, slug, order_index) VALUES
(14, '5.1 The Nuclear Atom', 'nuclear-atom', 1),
(14, '5.2 Radioactivity', 'radioactivity', 2);

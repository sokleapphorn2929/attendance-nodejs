import Teacher from './teacherModel.js';
import Student from './studentModel.js';
import Class from './classModel.js';
import Attendance from './attendanceModel.js';

Teacher.hasMany(Class, {foreignKey: 'teacherId', onDelete: 'CASCADE'});
Class.belongsTo(Teacher, {foreignKey: 'teacherId'});

Class.hasMany(Student, {foreignKey: 'classId', onDelete: 'CASCADE'});
Student.belongsTo(Class, {foreignKey: 'classId'});

Student.hasMany(Attendance, {foreignKey: 'studentId', onDelete: 'CASCADE'});
Attendance.belongsTo(Student, {foreignKey: 'studentId'});

export {Teacher, Student, Class, Attendance};
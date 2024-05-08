package com.example.WebService.Service;

import com.example.WebService.DAO.StudentDAO;
import com.example.WebService.Entity.Student;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements  StudentService{

    private final StudentDAO studentDAO;

    @Autowired
    public StudentServiceImpl(StudentDAO studentDAO){
        this.studentDAO = studentDAO;
    }
    @Override
    public List<Student> getAllStudents() {
        return studentDAO.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentDAO.getStudentById(id);
    }

    @Override
    @Transactional
    public Student addStudent(Student student) {
        return studentDAO.save(student);
    }

    @Override
    @Transactional
    public Student updateStudent(Student student) {
        return studentDAO.saveAndFlush(student);
    }

    @Override
    @Transactional
    public Student deleteStudent(Long id) {
        return studentDAO.deleteById(id);
    }
}

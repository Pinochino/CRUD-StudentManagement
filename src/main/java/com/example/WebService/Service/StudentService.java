package com.example.WebService.Service;

import com.example.WebService.Entity.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {


    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student addStudent(Student student);
    
    Student updateStudent(Student student);

    Student deleteStudent(Long id);
}

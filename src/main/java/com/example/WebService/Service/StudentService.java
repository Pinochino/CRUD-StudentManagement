package com.example.WebService.Service;

import com.example.WebService.Entity.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {


    List<Student> getAllStudents();

    Student getStudentById(int id);

    Student save(Student student);
    
    Student saveAndFlush(Student student);

    Student delete(Integer id);
}

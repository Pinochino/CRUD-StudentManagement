package com.example.WebService.Controller;


import com.example.WebService.Entity.Student;
import com.example.WebService.Exception.StudentException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WebServiceController {

    private List<Student> studentList;

    public void createListStudent() {
        studentList = new ArrayList<>();
        studentList.add(new Student(1, "Trần Đình Hùng", 7, "Công nghệ thông tin", 7.8));
        studentList.add(new Student(2, "Nguyễn Minh Thái", 18, "Kinh tế", 6.5));
        studentList.add(new Student(3, "Trần Thị Ngọc Linh", 19, "Quản trị kinh doanh", 9.2));
        studentList.add(new Student(4, "Nguyễn Tuấn Dương", 20, "Du lịch", 8.8));
        studentList.add(new Student(5, "Trịnh Thị Giang", 18, "Nông Nghiệp", 8.5));
    }

    @GetMapping("/students")
    public List<Student> getListStudent() {
        return studentList;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        for (Student student : studentList) {
            if (student.getId() == id) {
                return ResponseEntity.ok(student);
            }
        }
        throw new StudentException("Not found the student by id: " + id);
    }

    @GetMapping("/index/{index}")
    public ResponseEntity<Student> getStudentByIndex(@PathVariable int index) {
        try {
            Student student = studentList.get(index);
            return ResponseEntity.ok(student);
        } catch (IndexOutOfBoundsException e) {
            throw new StudentException("Not found the student by index: " + index);
        }
    }

    //     @ExceptionHandler()
    // public ResponseEntity<ErrorResponse> handleException(StudentException ex) {
    //     ErrorResponse er = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(er);
    // }

    // @ExceptionHandler()
    // public ResponseEntity<ErrorResponse> handleAllException(StudentException ex) {
    //     ErrorResponse er = new ErrorResponse(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body(er);
    // }
  
}

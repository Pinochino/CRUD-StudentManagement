package com.example.WebService.Controller;

import com.example.WebService.Entity.Student;
import com.example.WebService.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }



    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return this.studentService.getAllStudents();
    }

    @GetMapping("/students/{id}")
    public  ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student student = studentService.getStudentById(id);
        if (student != null){
            return ResponseEntity.ok(student);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/students")
    public  ResponseEntity<Student> updateStudent(@RequestBody Student student){
        student.setId(0L);
        student = studentService.updateStudent(student);
        return  ResponseEntity.status(HttpStatus.CREATED).body(student);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudentById(@PathVariable Long id, @RequestBody Student student){
        Student Existingstudent =  studentService.getStudentById(id);
        if (student == null){
            Existingstudent.setFirstName(student.getFirstName());
            Existingstudent.setLastName(student.getLastName());
            Existingstudent.setEmail(student.getEmail());
            studentService.updateStudent(Existingstudent);
            return ResponseEntity.ok(Existingstudent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    // @Override
    // public String toString() {
    //     return "Please select: " +
    //             "1: Lấy danh sách tất cả sinh viên"+
    //             "2: Lấy thông tin chi tiết của sinh viên dựa trên ID"+
    //             "3: Thêm 1 sinh viên mới "+
    //             "4: Cập nhật thông tin của sinh viên dựa trên ID" +
    //             "5: Xóa 1 sinh viên dựa trên ID";
    // }
}

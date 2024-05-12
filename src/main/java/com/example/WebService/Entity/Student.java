package com.example.WebService.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name= "fullname", length = 45)
    private String Fullname;
    
    @Column(name= "email", length = 45)
    private String Email;

    @Column(name = "password", length = 45)
    private String Password;

    @Column(name = "sex", length = 45)
    private String Sex;

    public Student() {}

    public Student(Integer id, String fullname, String email, String password, String sex) {
        this.id = id;
        Fullname = fullname;
        Email = email;
        Password = password;
        Sex = sex;
    }
}

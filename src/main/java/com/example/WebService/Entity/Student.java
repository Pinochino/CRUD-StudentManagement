package com.example.WebService.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45)
    private String email;

    @Column(name = "last_name", length = 45)
    private String lastName;

    @Column(name = "first_name", length = 45)
    private String firstName;

    public Student() {}

    public Student(String email, String lastName, String firstName) {
        this.email = email;
        this.lastName = lastName;
        this.firstName = firstName;
    }

}

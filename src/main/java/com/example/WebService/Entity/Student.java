package com.example.WebService.Entity;

import lombok.Data;

@Data
public class Student {
    private int id;
    private String name;
    private int age;
    private String department;
    private double grade;

      public Student(int id, String name, int age, String department, double grade) {
        this.id = id;
        this.department = department;
        this.age = age;
        this.name = name;
        this.grade = grade;
      }

      public Student() {}

}

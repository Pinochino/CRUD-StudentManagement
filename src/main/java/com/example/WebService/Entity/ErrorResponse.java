package com.example.WebService.Entity;

import lombok.Data;

@Data
public class ErrorResponse {

    private int status;
    private String message;
    private long timestamp;

    public ErrorResponse(int status, String message) {
        this.message = message;
        this.status = status;
        this.timestamp = System.currentTimeMillis();
    }

}

package com.cognizant.mockito;

public class MyService {

    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void processData(String data) {
        api.sendData(data);
    }
}
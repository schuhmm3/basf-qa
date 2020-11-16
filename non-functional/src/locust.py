#!/usr/bin/python3.6
from locust import HttpUser, task, between


class QuickstartUser(HttpUser):
    @task
    def get_persons(self):
        endpoint = "/api/person/all"
        headers = {
            "User-Agent": "BASF-LT",
            "Accept": "*/*",
            "Authorization": "Basic dXNlcjpwd2Qh"
        }
        response = self.client.get(endpoint, headers=headers)
        if response.status_code != 200:
            result = False
        # print(response.json()) - To verify that API is returning the list of persons

    wait_time = between(1, 2)

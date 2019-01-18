package com.client.client_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    @RequestMapping("/hey")
    public String login() {
        return "login";
    }

    @RequestMapping(value="/Sends",method= RequestMethod.GET,produces= "application/text")
    @ResponseBody
    public String send(@RequestParam(value = "code") String code) {

        System.out.println(code);

        if(code!=null){
            return "成功";
        }else {
            return "失败";
        }

    }
}

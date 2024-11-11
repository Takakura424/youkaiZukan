package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HelloController {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@RequestMapping(value="/")
	public String index(Model model) {
//		return "Hello";
//		getYoukaiInfo();
		model.addAttribute("youkaiInfo", getYoukaiInfo());
		return "youkaiMain";
	}
	
	@RequestMapping(path="name",method=RequestMethod.POST)
	public String name(@RequestParam("name") String name,Model model) {
		model.addAttribute("name", name);
		List<Map<String, Object>> users = getYoukaiInfo();
		model.addAttribute("users", users);
		
		return "name";
	}
	
//	@Select("select name from student")
	public List<Map<String, Object>> getYoukaiInfo() {
		String sql = "select * from youkai";
        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
//        model.addAttribute("testList", list);
		System.out.println("!!"+list);
		
		return list;
	}
	
}

import { Component, OnInit } from "@angular/core";
import { SKILLS } from "../mock-skills";
@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  skills = SKILLS;
  constructor() {}

  ngOnInit() {}
}

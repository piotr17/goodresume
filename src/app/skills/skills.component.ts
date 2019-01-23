import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  skill: Skill = {
    id: 1,
    name: "Programmazione"
  };
  constructor() {}

  ngOnInit() {}
}
